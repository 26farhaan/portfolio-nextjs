import { title } from "process";
import { all } from "axios";
import { code, desc, header } from "motion/react-client";

import Projects from "@/app/[locale]/(overview)/projects/page";

const en = {
  HomePage: {
    name: "Hi, I'm Mohamad Farhan",
    based: "Based in Bogor, Indonesia 🇮🇩",
    workType: "Remote",
    intro: {
      1: `I have 5 years of experience building frontend web applications using various JavaScript libraries and frameworks, with a current focus on Next.js. I’ve also explored backend development with Node.js and FastAPI.`,
      2: `I’m used to building CMS applications in areas like healthcare, automotive, pharmaceuticals, and more. I also have some experience developing company profile websites with a focus on SEO, and I’m used to creating responsive applications using different UI libraries and CSS approaches.`,
      3: `With years of experience, I’m comfortable working both in a team and independently. I’m very passionate about technology, which is why I enjoy learning new things. Right now, I’m learning FastAPI (Python) to explore both backend development and AI.`,
    },
    skills: {
      title: "Skills",
      description: "My professional skills include:",
    },
    features: {
      title: "Featured Sections",
      description: "Explore everything I’ve crafted, contributed, and accomplished.",
      showcase: {
        title: "Project Showcase",
        description: "Projects Showcase A selection of real apps built to solve real problems.",
      },
      aboutMe: {
        title: "About Me",
        description: "Who I am and what I do.",
      },
      skills: {
        title: "Skills and Tools",
        description: "Covering Backend, web, AI, and UI/UX technologies.",
      },
      achievements: {
        title: "Achievements",
        description: "Milestones from programs, projects, and communities.",
      },
      services: {
        title: "Services",
        description: "End-to-end solutions in web, backend, AI, and design.",
      },
    },
  },
  About: {
    title: "About Me",
    description: "Learn more about my background, experience, and interests.",
    career: {
      title: "Career",
      description: "My professional journey.",
      responsibilities: "Show responsibilities",
    },
    education: {
      title: "Education",
      description: "My educational background.",
      major: "Computer Science",
      degree: "Bachelor's degree",
      majorShs: "High School",
      degreeShs: "Science",
    },
  },
  Achievements: {
    title: "Achievements",
    description:
      "A curated collection of certificates and badges I've earned throughout my professional and academic journey.",
  },
  Projects: {
    title: "Projects",
    description: "A showcase of personal and company projects I have created or contributed to.",
    search: "Search Projects",
    company: "Filter by Company",
    ownProjects: "Own Projects",
  },
  Contact: {
    title: "Contact",
    description: "Connect with me through the following platforms.",
    gmail: {
      title: "Stay in Touch",
      description: "Reach out via email for inquiries or collaborations.",
    },
    instagram: {
      title: "Follow My Journey",
      description: "Follow my creative journey.",
    },
    linkedin: {
      title: "Let's Connect",
      description: "Connect with me professionally.",
    },
    github: {
      title: "Explore My Code",
      description: "Check out my projects and contributions on GitHub.",
    },
    tiktok: {
      title: "Fun and Creativity",
      description: "Join me for some fun and creative content on TikTok.",
    },
  },
  Services: {
    title1: "I build",
    titleBold: "responsive, modern, and SEO-friendly",
    title2: "websites",
    description:
      "focus on high performance and security, modern but lightweight and of course clean code and easy to maintain",
    header: {
      hire: "Hire me",
      title: "Outcomes You Can Expect",
      description: "Examples of results you can expect.",
      loadtime: "Loadtime under 2 seconds",
      delivery: "On-time delivery and clear communication",
      performance: "Good performance, SEO support, and responsiveness",
      code: "Clean code, modern design, and easy to maintain",
    },
    ido: {
      service: "Service",
      title: "What I Do",
      jsDev: {
        title: "Javascript Development",
        description: "Building web applications using various JavaScript libraries and frameworks.",
        item1: "Support SEO",
        item2: "Lighthouse score > 90",
        item3: "Responsive all screen sizes",
      },
      figma: {
        title: "Figma → React.js/Next.js/Mantine/Tailwind",
        description: "Converting Figma designs to React components and easy to maintain.",
        item1: "Reusable components",
        item2: "A11y & semantic",
        item3: "Ready dark mode",
      },
      integration: {
        title: "Integration API & Data",
        description: "Integrating REST API or GraphQL and database to web applications.",
        item1: "Axios, Fetch, SWR, React Query",
        item2: "Handling Errors state & Loading state",
        item3: "Form validation. Authentication JWT, & OAuth",
      },
      performance: {
        title: "Performance and UX Optimization",
        description: "Improving website performance and user experience through optimization techniques.",
        item1: "Micro Animations",
        item2: "SSR, SSG, ISR, and CSR",
        item3: "Code Splitting ,Lazy Loading and Image Optimization",
      },
    },
  },
  Sidebar: {
    Home: "Home",
    About: "About",
    Achievements: "Achievements",
    Projects: "Projects",
    Contact: "Contact",
    Services: "Services",
  },
  years: "Years",
  year: "Year",
  month: "Month",
  months: "Months",
  all: "All",
};

export type DefaultLangType = typeof en;

export default en;
