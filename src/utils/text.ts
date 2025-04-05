/* eslint-disable @typescript-eslint/no-explicit-any */
import { parse } from "yaml";

// Type definitions for our text structure
export interface TextContent {
  header: {
    logo: string;
    nav: {
      about: string;
      research: string;
      services: string;
      publications: string;
      team: string;
      contact: string;
    };
    cta: {
      portal: string;
      consultation: string;
    };
  };
  hero: {
    title: string;
    subtitle: string;
    emphasis: string;
    description: string;
    cta: string;
  };
  about: {
    title: string;
    subtitle: string;
    description: string;
    features: Array<{
      title: string;
      description: string;
    }>;
  };
  services: {
    title: string;
    subtitle: string;
    description: string;
    features: Array<{
      title: string;
      description: string;
      details: {
        methodology: string;
        impact: string;
        timeline: string;
      };
    }>;
    buttons: {
      learnMore: string;
      backToOverview: string;
      methodology: string;
      impact: string;
      timeline: string;
    };
  };
  research: {
    title: string;
    subtitle: string;
    description: string;
    features: Array<{
      title: string;
      description: string;
    }>;
  };
  contact: {
    title: string;
    description: string;
    location: {
      country: string;
      address: string;
      email: string;
      phone: string;
    };
    form: {
      fullName: string;
      email: string;
      message: string;
      submit: string;
    };
  };
  footer: {
    company: {
      name: string;
      description: string;
    };
    quickLinks: {
      title: string;
      links: string[];
    };
    services: {
      title: string;
      items: string[];
    };
    contact: {
      title: string;
    };
    copyright: string;
  };
}

let textContent: TextContent;

// Initialize text content
export const initializeText = async () => {
  try {
    const response = await fetch("/text.yml");
    const yamlText = await response.text();
    textContent = parse(yamlText) as TextContent;
  } catch (error) {
    console.error("Failed to load text content:", error);
    // Provide fallback content
    textContent = getFallbackContent();
  }
};

// Get text by path (e.g., "header.nav.about")
export const getText = (path: string, fallback: string = ""): any => {
  try {
    return (
      path.split(".").reduce((obj, key) => obj[key], textContent as any) ||
      fallback
    );
  } catch (error: any) {
    console.warn(`Text key not found: ${path}, using fallback`, error);
    return fallback;
  }
};

// Fallback content
const getFallbackContent = (): TextContent => ({
  header: {
    logo: "Geneteck",
    nav: {
      about: "About",
      research: "Research",
      services: "Services",
      publications: "Publications",
      team: "Team",
      contact: "Contact",
    },
    cta: {
      portal: "Partner Portal",
      consultation: "Schedule Consultation",
    },
  },
  hero: {
    title: "Advancing Genomics For",
    subtitle: "A Healthier",
    emphasis: "Future",
    description: "Pioneering breakthrough genomic research across Africa.",
    cta: "Explore Our Research",
  },
  about: {
    title: "Pioneering African Genomics",
    subtitle: "For Global Impact",
    description: "Transforming healthcare through advanced genomic research.",
    features: [
      {
        title: "Global Research Impact",
        description: "Leading genomic research initiatives across Africa.",
      },
      {
        title: "Advanced Sequencing",
        description: "Utilizing cutting-edge DNA sequencing technology.",
      },
      {
        title: "AI-Powered Analysis",
        description: "Leveraging artificial intelligence and machine learning.",
      },
      {
        title: "Clinical Integration",
        description:
          "Seamlessly integrating genomic insights into clinical practice.",
      },
    ],
  },
  services: {
    buttons: {
      learnMore: "Learn More",
      backToOverview: "Back to Overview",
      methodology: "Methodology",
      impact: "Impact",
      timeline: ""
    },
    title: "Serverful Genomics Without",
    subtitle: "the Hassle of Analysis",
    description: "Process complex genomic data with our infrastructure.",
    features: [
      {
        title: "Rapid Analysis",
        description: "Advanced genomic sequencing platform.",
        details: {
          methodology: "Using next-generation sequencing technology.",
          impact: "Faster diagnosis and treatment decisions.",
          timeline: "Same-day results for urgent cases.",
        },
      },
      {
        title: "Global Coverage",
        description: "Operating in 35 regions across Africa.",
        details: {
          methodology: "Distributed laboratory network.",
          impact: "Improved healthcare access.",
          timeline: "Continuous expansion.",
        },
      },
      {
        title: "AI Integration",
        description: "Advanced machine learning algorithms.",
        details: {
          methodology: "Custom ML models.",
          impact: "Enhanced accuracy.",
          timeline: "Monthly updates.",
        },
      },
      {
        title: "Computing Power",
        description: "High-performance computing infrastructure.",
        details: {
          methodology: "Distributed computing clusters.",
          impact: "Efficient processing.",
          timeline: "Real-time processing.",
        },
      },
    ],
  },
  research: {
    title: "Full-Stack Sandboxes.",
    subtitle: "Fly.io Metal.",
    description:
      "Fly Machines are hardware-virtualized containers with a REST API.",
    features: [
      {
        title: "User-Specific Routing",
        description: "Route each user to their own dedicated sandbox.",
      },
      {
        title: "Persistent Storage",
        description: "Give each user their own dedicated storage.",
      },
      {
        title: "Zero-Cost When Idle",
        description: "Automatically scale to zero when not needed.",
      },
      {
        title: "MCP with SSE",
        description: "Build remote MCP servers with SSE support.",
      },
    ],
  },
});
