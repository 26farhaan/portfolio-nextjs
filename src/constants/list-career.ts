import LISTPROJECT, { LISTPROJECTTYPE } from "./list-project";
import { SKILLS, SKILLSType } from "./skills";

export type LISTCAREERType = {
  title: string;
  company: string;
  companyLink: string;
  logo: string;
  bgLogo?: string;
  type: string;
  location: string;
  startDate: string;
  endDate: string;
  responsibilities: {
    [locale: string]: {
      description: string;
      list: string[];
    };
  };
  projects: LISTPROJECTTYPE;
  tools: SKILLSType;
};

const LISTCAREER: LISTCAREERType[] = [
  {
    title: "Frontend Web Developer",
    company: "PT Kode Inovasi Teknologi (CODR)",
    companyLink: "https://codr.id",
    logo: "codr.png",
    bgLogo: "black",
    type: "Full-time",
    location: "Jakarta, Indonesia (Remote)",
    startDate: "Des 2021",
    endDate: "Jun 2025",
    responsibilities: {
      id: {
        description:
          "Perusahaan ini bergerak di bidang konsultasi TI, menyediakan solusi dan proyek perangkat lunak khusus untuk berbagai klien. Selama saya bekerja disini metodologi yang digunakan adalah Scrum,  dan saya mengembangkan kemahiran yang kuat dalam React.js, Tailwind CSS, React Query, Zustand, dan beberapa teknologi front-end modern lainnya.",
        list: [
          "Bertanggungjawab menyusun teknologi dan liblary yang digunakan dalam proyek yang akan dikerjakan (Biasanya menggunakan reactjs dan tailwindcss).",
          "Integrasi RESTFUL API, peningkatan performa dan user experience.",
          "Daily meeting untuk memantau perkembangan proyek.",
          "Membangun aplikasi yang responsive",
          "bekerjasama dengan tim backend, design, proyek manager, dan lainya.",
          "Bug fixing",
          "dan lainnya",
        ],
      },
      en: {
        description:
          "This company operates in the IT consulting sector, providing tailored solutions and custom software projects for a variety of clients. During my time here, the methodology used was Scrum, and I developed strong proficiency in React.js, Tailwind CSS, React Query, Zustand, and several other modern front-end technologies.",
        list: [
          "Responsible for selecting the technologies and libraries to be used in upcoming projects (typically React.js and Tailwind CSS).",
          "RESTful API integration, performance improvements, and user experience enhancements.",
          "Daily meetings to monitor project progress.",
          "Building responsive applications.",
          "Collaborating with backend, design, project managers, and others.",
          "Bug fixing.",
          "and more.",
        ],
      },
    },
    projects: LISTPROJECT.filter((item) => item.code === "codr"),
    tools: SKILLS.filter((item) =>
      [
        "React.js",
        "Tailwind CSS",
        "Tanstack React Query",
        "Zustand",
        "Jira",
        "CSS",
        "Javascript",
        "NPM",
        "Gitlab",
        "Figma",
        "Material UI",
      ].includes(item.label)
    ),
  },
  {
    title: "Frontend Web Developer",
    company: "PT Radya Gita Bahagi (RGB)",
    companyLink: "https://rollingglory.com/",
    logo: "rgb.png",
    type: "Full-time",
    location: "Bandung, Indonesia (Remote)",
    startDate: "Jan 2022",
    endDate: "Apr 2025",
    description: {
      id: {
        description:
          "Perusahaan ini bergerak di bidang konsultasi TI, menyediakan solusi dan proyek perangkat lunak khusus untuk berbagai klien. Selama saya bekerja disini metodologi yang digunakan adalah Scrum,  dan saya mengembangkan kemahiran yang kuat dalam React.js, Tailwind CSS, React Query, Zustand, dan beberapa teknologi front-end modern lainnya.",
        responsibilities: [
          "Bertanggungjawab menyusun teknologi dan liblary yang digunakan dalam proyek yang akan dikerjakan (Biasanya menggunakan reactjs dan tailwindcss).",
          "Daily meeting untuk memantau perkembangan proyek.",
          "Membangun aplikasi yang responsive",
          "bekerjasama dengan tim backend, design, proyek manager, dan lainya.",
          "Bug fixing",
          "dan lainnya",
        ],
      },
      en: {
        description: "",
        responsibilities: [],
      },
    },
  },
  {
    title: "Software Engineer",
    company: "PT 4Net Prima Solusi (FPS)",
    companyLink: "https://www.4netps.co.id/",
    logo: "fps.jpeg",
    type: "Full-time",
    location: "Jakarta, Indonesia (Hybrid)",
    startDate: "Des 2020",
    endDate: "Des 2021",
    description: {
      id: "Mengembangkan aplikasi web yang ramah pengguna menggunakan React dan Next.js.",
      en: "Developing user-friendly web applications using React and Next.js.",
    },
  },
  {
    title: "Frontend Web Developer",
    company: "PT Bogor Life Science & Technology (BLST)",
    companyLink: "https://blst.co.id/",
    logo: "blst.png",
    type: "Part-time",
    location: "Bogor, Indonesia (Hybrid)",
    startDate: "Jun 2020",
    endDate: "Okt 2020",
    description: {
      id: "Mengembangkan aplikasi web yang ramah pengguna menggunakan React dan Next.js.",
      en: "Developing user-friendly web applications using React and Next.js.",
    },
  },
];

export default LISTCAREER;
