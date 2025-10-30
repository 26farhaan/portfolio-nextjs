import LISTPROJECT, { LISTPROJECTTYPE } from "./list-project";

export type LISTCAREERType = {
  title: string;
  company: string;
  code: string;
  companyLink: string;
  logo: string;
  bgLogo?: string;
  type: string;
  location: string;
  startDate: string;
  endDate: string;
  sDate: string;
  eDate: string;
  responsibilities: {
    [locale: string]: {
      description: string;
      list: string[];
    };
  };
  projects?: LISTPROJECTTYPE;
  tools: string[];
};

const LISTCAREER: LISTCAREERType[] = [
  {
    title: "Frontend Web Developer",
    company: "PT Kode Inovasi Teknologi (CODR)",
    companyLink: "https://codr.id",
    code: "codr",
    logo: "codr.png",
    bgLogo: "black",
    type: "Full-time",
    location: "Jakarta, Indonesia (Remote)",
    startDate: "Des 2021",
    endDate: "Jun 2025",
    sDate: "2021-12-01",
    eDate: "2025-06-30",
    responsibilities: {
      id: {
        description:
          "Perusahaan ini bergerak di bidang konsultasi TI, menyediakan solusi dan proyek perangkat lunak khusus untuk berbagai klien. Selama saya bekerja disini metodologi yang digunakan adalah Scrum,  dan saya mengembangkan kemahiran yang kuat dalam React.js, Tailwind CSS, React Query, Zustand, dan beberapa teknologi front-end modern lainnya.",
        list: [
          "Bertanggungjawab menyusun teknologi dan liblary yang digunakan dalam proyek yang akan dikerjakan (Biasanya menggunakan reactjs dan tailwindcss).",
          "Integrasi RESTFUL API, peningkatan performa dan user experience.",
          "Daily meeting untuk memantau perkembangan proyek.",
          "Slicing UI dan membangun aplikasi responsif.",
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
          "Slicing UI and building responsive applications.",
          "Collaborating with backend, design, project managers, and others.",
          "Bug fixing.",
          "and more.",
        ],
      },
    },
    tools: [
      "React.js",
      "Tailwind CSS",
      "Tanstack React Query",
      "Zustand",
      "Jira",
      "CSS",
      "Javascript",
      "NPM",
      "Git",
      "Gitlab",
      "Figma",
      "Material UI",
    ],
  },
  {
    title: "Frontend Web Developer",
    company: "PT Radya Gita Bahagi (RGB)",
    companyLink: "https://rollingglory.com/",
    code: "rgb",
    logo: "rgb.png",
    type: "Full-time",
    location: "Bandung, Indonesia (Remote)",
    startDate: "Jan 2022",
    endDate: "Apr 2025",
    sDate: "2022-01-01",
    eDate: "2025-04-30",
    responsibilities: {
      id: {
        description:
          "Perusahaan ini bergerak di bidang konsultasi IT yang sudah merangkap menjadi startup, selain pelayanan pembuatan aplikasi website perusahaan ini bisa membuat aplikasi mobile, game, desain, dan masih banyak yang lainya. Selama saya bekerja disini metodologi yang digunakan adalah Scrum, dan saya mengembangkan kemahiran yang kuat dalam javascript meliputi React.js, Next.js, Vue.js, Nuxt.js, Tailwind CSS, React Query, Redux, dan beberapa teknologi front-end modern lainnya.",
        list: [
          "Slicing UI dan membangun aplikasi responsif.",
          "Integrasi RESTFUL API, peningkatan performa dan user experience.",
          "Daily meeting untuk memantau perkembangan proyek.",
          "bekerjasama dengan sesama tim Frontend termasuk leader, tim backend, design, proyek manager, dan lainya.",
          "Bug fixing",
          "Engineering Talk",
          "Anual Review",
          "Trip Perusahaan",
          "dan lainnya",
        ],
      },
      en: {
        description:
          "This company operates in the IT consulting space and has also evolved into a startup. In addition to building web applications, the company can develop mobile apps, games, provide design services, and much more. During my time here, the methodology used was Scrum, and I developed strong proficiency in JavaScript, including React.js, Next.js, Vue.js, Nuxt.js, Tailwind CSS, React Query, Redux, and several other modern front-end technologies.",
        list: [
          "UI slicing and building responsive applications.",
          "RESTful API integration, performance improvements, and user experience enhancements.",
          "Daily meetings to monitor project progress.",
          "Collaborating with fellow Frontend team members including the team lead, as well as backend, design, project managers, and others.",
          "Bug fixing.",
          "Engineering Talk.",
          "Annual Review.",
          "Company Trip.",
          "and more.",
        ],
      },
    },
    tools: [
      "Javascript",
      "React.js",
      "Next.js",
      "Nuxt.js",
      "Vue.js",
      "Mantine",
      "Tailwind CSS",
      "Tanstack React Query",
      "SQL",
      "Zod",
      "CSS",
      "NPM",
      "PNPM",
      "Git",
      "Gitlab",
      "Figma",
    ],
  },
  {
    title: "Software Engineer",
    company: "PT 4Net Prima Solusi (FPS)",
    companyLink: "https://www.4netps.co.id/",
    code: "fps",
    logo: "fps.jpeg",
    type: "Full-time",
    location: "Jakarta, Indonesia (Hybrid)",
    startDate: "Des 2020",
    endDate: "Des 2021",
    sDate: "2020-12-01",
    eDate: "2021-12-31",
    responsibilities: {
      id: {
        description:
          "Perusahaan ini bergerak di bidang konsultasi IT. Selama bekerja disini saya hanya mengerjakan 1 aplikasi web yaitu digipos internal produk dari telkomsel. Saya mendevelop menggunakan React.js, Material UI, Redux, Axios, dan lainya. Selain itu saya juga mempelajari sedikit tentang React Native dan Node.js",
        list: [
          "Slicing UI dan membangun aplikasi responsif.",
          "Integrasi RESTFUL API, peningkatan performa dan user experience.",
          "Daily meeting untuk memantau perkembangan proyek.",
          "Membantu meeting dengan client",
          "bekerjasama dengan sesama  tim backend, design, proyek manager, dan lainya.",
          "Bug fixing",
          "dan lainnya",
        ],
      },
      en: {
        description:
          "This company operates in IT consulting. During my time here, I worked on a single web application: Digipos, an internal product from Telkomsel. I developed using React.js, Material UI, Redux, Axios, and others. In addition, I learned a bit about React Native and Node.js.",
        list: [
          "UI slicing and building responsive applications.",
          "RESTful API integration, performance improvements, and user experience enhancements.",
          "Daily meetings to monitor project progress.",
          "Assisting in meetings with clients.",
          "Collaborating with backend, design, project managers, and others.",
          "Bug fixing.",
          "and more.",
        ],
      },
    },
    tools: ["Javascript", "React.js", "Material UI", "SQL", "Redux", "CSS", "NPM", "Git", "Gitlab", "Figma"],
  },
  {
    title: "Frontend Web Developer",
    company: "PT Bogor Life Science & Technology (BLST)",
    companyLink: "https://blst.co.id/",
    code: "blst",
    logo: "blst.png",
    type: "Part-time",
    location: "Bogor, Indonesia (Remote)",
    startDate: "Jun 2020",
    endDate: "Okt 2020",
    sDate: "2020-06-01",
    eDate: "2020-10-31",
    responsibilities: {
      id: {
        description:
          "Perusahaan ini bergerak di bidang pertanian milik perusahan IPB Bogor, disini saya membangun aplikasi internal untuk manajemen barang kantor seperti peminjaman barang, permintaan dana, dan lainya.",
        list: [
          "Slicing UI dan membangun aplikasi responsif.",
          "Integrasi RESTFUL API, peningkatan performa dan user experience.",
          "meeting untuk memantau perkembangan proyek, estimasi pengerjaan proyek, dan lainnya.",
          "bekerjasama dengan tim backend, dan proyek manager.",
          "Bug fixing",
        ],
      },
      en: {
        description:
          "This company operates in the agriculture sector and is owned by IPB University (Bogor). Here, I built an internal application for office asset management, such as equipment lending, fund requests, and more.",
        list: [
          "UI slicing and building responsive applications.",
          "RESTful API integration, performance improvements, and user experience enhancements.",
          "Meetings to monitor project progress, estimate project effort/timelines, and more.",
          "Collaborating with the backend team and the project manager.",
          "Bug fixing.",
        ],
      },
    },
    tools: ["Javascript", "React.js", "Material UI", "CSS", "NPM", "Git", "Gitlab", "Figma"],
  },
];

export default LISTCAREER;
