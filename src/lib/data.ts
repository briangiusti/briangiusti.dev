export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: string[];
}

export interface AboutFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface SocialLink {
  id: string;
  name: string;
  icon: string;
  url: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  icon: string;
  color: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    subtitle: string;
    profileImage: string;
    codeIcon: string;
  };
  about: {
    title: string;
    subtitle: string;
    features: AboutFeature[];
  };
  work: {
    title: string;
    subtitle: string;
    projects: Project[];
  };
  skills: {
    title: string;
    subtitle: string;
    categories: SkillCategory[];
  };
  certifications: {
    title: string;
    subtitle: string;
    items: Certification[];
  };
  contact: {
    title: string;
    subtitle: string;
    email: string;
    resumes: { id: string; title: string; url: string }[];
    socialLinks: SocialLink[];
    copyright: string;
  };
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Brian Giusti",
    title: "Software Engineer",
    subtitle: "Building products that bridge technology and people.",
    profileImage: "👨‍💻",
    codeIcon: "</>"
  },
  about: {
    title: "About Me",
    subtitle: "Passionate about creating meaningful experiences.",
    features: [
      {
        id: "creative",
        title: "Creative Problem Solver",
        description: "I love tackling complex challenges and finding elegant solutions that make a real impact.",
        icon: "💡",
        color: "purple"
      },
      {
        id: "innovation",
        title: "Innovation Driven",
        description: "Always exploring new technologies and methodologies to stay ahead of the curve.",
        icon: "🚀",
        color: "orange"
      },
      {
        id: "collaboration",
        title: "Collaborative Spirit",
        description: "I thrive in team environments and believe great work comes from great collaboration.",
        icon: "🤝",
        color: "green"
      }
    ]
  },
  work: {
    title: "Featured Work",
    subtitle: "A selection of projects I'm proud of.",
    projects: [
      {
        id: "ecommerce",
        title: "E-Commerce Platform",
        description: "Full-stack application with modern UI/UX design",
        image: "🛒",
        tags: ["React", "Node.js"]
      },
      {
        id: "mobile",
        title: "Mobile App Design",
        description: "iOS/Android app with intuitive user experience",
        image: "📱",
        tags: ["Flutter", "Figma"]
      },
      {
        id: "branding",
        title: "Brand Identity",
        description: "Complete branding package for tech startup",
        image: "🎨",
        tags: ["Illustrator", "Photoshop"]
      }
    ]
  },
  skills: {
    title: "Skills & Expertise",
    subtitle: "Technologies and tools I work with.",
    categories: [
      {
        id: "frontend",
        title: "Frontend",
        icon: "</>",
        skills: ["React", "Vue.js", "TypeScript", "Tailwind CSS"]
      },
      {
        id: "backend",
        title: "Backend",
        icon: "⚙️",
        skills: ["Node.js", "Python", "PostgreSQL", "MongoDB"]
      },
      {
        id: "design",
        title: "Design",
        icon: "🎨",
        skills: ["Figma", "Adobe Creative Suite", "UI/UX"]
      },
      {
        id: "tools",
        title: "Tools",
        icon: "🔧",
        skills: ["Git", "Docker", "AWS", "Vercel"]
      }
    ]
  },
  certifications: {
    title: "Certifications & Qualifications",
    subtitle: "Professional credentials and educational achievements.",
    items: [
      {
        id: "degree",
        title: "Bachelor of Science in Computer Science",
        issuer: "Syracuse University",
        date: "2021",
        description: "Comprehensive foundation in software engineering and algorithms",
        icon: "/SUFAV.jpeg",
        color: "orange"
      },
      {
        id: "uva",
        title: "Product Management Certificate",
        issuer: "University of Virginia",
        date: "2025",
        description: "User Interviews, Product Strategy, Product Roadmaps, Product Market-fit, A/B testing, Wireframing, and more.",
        icon: "/UVA.png",
        color: "blue"
      },
      {
        id: "umass",
        title: "Full Stack Software Engineering Bootcamp",
        issuer: "Umass Global",
        date: "2023",
        description: "Frontend focusing on React, backend focusing on Node.js, and database management using PostgreSQL.",
        icon: "/UMASS.jpg",
        color: "purple"
      },
      {
        id: "jor",
        title: "Joy of React + CSS for JS Developers",
        issuer: "Josh W Comeau",
        date: "2024",
        description: "A deep dive into React and CSS, with a focus on building a strong foundation in web development.",
        icon: "/JORFAV.png",
        color: "green"
      }
    ]
  },
  contact: {
    title: "Let's Work Together",
    subtitle: "Ready to bring your ideas to life? I'd love to hear from you.",
    email: "brianjohngiusti@gmail.com",
    resumes: [
      {
        id: "software",
        title: "Software Engineering Resume",
        url: "/software-engineering-resume.pdf"
      },
      {
        id: "product",
        title: "Product Manager Resume",
        url: "/product-manager-resume.pdf"
      }
    ],
    socialLinks: [
      {
        id: "linkedin",
        name: "LinkedIn",
        icon: "💼",
        url: "https://www.linkedin.com/in/brian-giusti/"
      },
      {
        id: "github",
        name: "GitHub",
        icon: "🐙",
        url: "https://github.com/briangiusti"
      },
      {
        id: "twitter",
        name: "Twitter",
        icon: "🐦",
        url: "https://x.com/brian_giusti"
      }
    ],
    copyright: "© 2025 Brian Giusti. All rights reserved."
  }
};
