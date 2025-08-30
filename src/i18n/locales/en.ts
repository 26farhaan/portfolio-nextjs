import { title } from "process";

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
        title: "Skills",
        description: "Covering mobile, web, AI, and UI/UX technologies.",
      },
      achievements: {
        title: "Achievements",
        description: "Milestones from programs, projects, and communities.",
      },
      services: {
        title: "Services",
        description: "End-to-end solutions in web, mobile, AI, and design.",
      },
    },
  },
  Sidebar: {
    Home: "Home",
    About: "About",
  },
};

export type DefaultLangType = typeof en;

export default en;
