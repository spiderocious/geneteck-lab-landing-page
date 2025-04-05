/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';
import Header from './components/layout/Header';
import Hero from './components/home/Hero';
import About from './components/home/About';
import Services from './components/home/Services';
import Research from './components/home/Research';
import Contact from './components/home/Contact';
import Footer from './components/layout/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<LocomotiveScroll | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    scrollRef.current = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      multiplier: 0.8,
      smartphone: { smooth: true },
    });

    const instance = scrollRef.current;
    
    // Wait for next frame to ensure DOM is ready
    requestAnimationFrame(() => {
      if (!instance) return;

      ScrollTrigger.scrollerProxy(containerRef.current, {
        scrollTop(value: any): any {
          if (arguments.length) {
            instance.scrollTo(value);
          } else {
            return instance.scrollTo(0);
          }
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
            right: window.innerWidth,
            bottom: window.innerHeight,
          };
        },
      });

      // Update ScrollTrigger on scroll
      instance.on('scroll', ScrollTrigger.update);

      // Update ScrollTrigger when window resizes
      //ScrollTrigger.addEventListener('refresh', () => instance.update());

      ScrollTrigger.refresh();
    });

    return () => {
      if (instance) {
        instance.destroy();
      }
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      ScrollTrigger.clearScrollMemory();
    };
  }, []);

  useGSAP(() => {
    const sections = gsap.utils.toArray('section');
    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section as Element,
        start: 'top top',
        end: '+=100%',
        pin: true,
        pinSpacing: false,
      });
    });
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-white" data-scroll-container>
      <Header />
      <div data-scroll-section>
        <Hero />
        <About />
        <Services />
        <Research />
        <Contact />
         <Footer />
      </div>
     
    </div>
  );
}

export default App;
