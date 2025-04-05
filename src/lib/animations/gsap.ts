import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

export const initGSAP = () => {
  // Default GSAP settings
  gsap.config({
    autoSleep: 60,
    force3D: true,
    nullTargetWarn: false,
  });
};