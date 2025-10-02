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
    title: "Brian Giusti",
    subtitle: "Software Engineer | Aspiring Product Manager",
    profileImage: "👨‍💻",
    codeIcon: "</>"
  },
  about: {
    title: "About Me",
    subtitle: "Passionate about creating meaningful experiences.",
    features: [
      {
        id: "solutionOriented",
        title: "Outcome driven",
        description: "Crafting solutions that fit the problem, not forcing the problem to fit the solution.",
        icon: "💡",
        color: "purple"
      },
      {
        id: "dataDriven",
        title: "Data Informed Designs",
        description: "Making decisions on what is best for the user from an engineering and product perspective.",
        icon: "🚀",
        color: "orange"
      },
      {
        id: "leadership",
        title: "Leadership",
        description: "I thrive in team environments and believe great products come from collaboration.",
        icon: "🤝",
        color: "green"
      }
    ]
  },
  work: {
    title: "Featured Work",
    subtitle: "A selection of projects",
    projects: [
      {
        id: "ecommerce",
        title: "Tea Time Golf",
        description: "An e-commerce platform for a golf apparel",
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
        icon: "",
        skills: ["React", "Next.js", "Gatsby", "TypeScript"]
      },
      {
        id: "backend",
        title: "Backend",
        icon: "⚙️",
        skills: ["Node.js", "ExpressJS", "PostgreSQL", "MongoDB"]
      },
      {
        id: "mobile",
        title: "Mobile",
        icon: "🎨",
        skills: ["Flutter", "React Native"]
      },
      {
        id: "experimentation",
        title: "Experimentation",
        icon: "🔧",
        skills: ["StatSig", "Optimizely", "Amplitude", "Snowflake"]
      },
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
    title: "Contact Me",
    subtitle: "Ready to bring your ideas to life? I'd love to hear from you.",
    email: "giusti.intake@gmail.com",
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
        icon: "/LINKEDIN.png",
        url: "https://www.linkedin.com/in/brian-giusti/"
      },
      {
        id: "github",
        name: "GitHub",
        icon: "/GITHUB.jpeg",
        url: "https://github.com/briangiusti"
      }
    ],
    copyright: "© 2025 Brian Giusti. All rights reserved."
  }
};
