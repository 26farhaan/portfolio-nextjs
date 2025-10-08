"use client";

import { useQuery } from "@tanstack/react-query";
import { DecodedValueMap, StringParam } from "use-query-params";

export type ProjectType = {
  id: number;
  name: string;
  company_code: string;
  description: {
    id: string;
    en: string;
  };
  features?: {
    id?: string[];
    en?: string[];
  };
  image: string;
  link?: string;
  tools: string[];
};

export type ListProjectType = ProjectType[];

export const projectParams = {
  search: StringParam,
  company_code: StringParam,
};

// Satu-satunya fungsi baca data
const data: ListProjectType = [
  {
    id: 1,
    name: "Portfolio",
    description: {
      id: "Website personal dan portofolio",
      en: "Personal website and portfolio",
    },
    image: "/images/projects/portfolio.png",
    company_code: "own",
    link: "",
    tools: ["Typescript", "React.js", "Next.js", "Mantine", "CSS", "PNPM", "Git", "Github", "Figma"],
  },
  {
    id: 2,
    name: "Company Profile CODR",
    description: {
      id: "Website Company Profile CODR, menawarkan layanan pada perusahaan tersebut. dibangun dengan responsive menggunakan React.Js dan tailwind css namun kontenya statis belum dinamis",
      en: "CODR Company Profile website, offering services of the company. Built responsive using React.js and Tailwind CSS, but the content is static and not yet dynamic",
    },
    features: {
      id: [
        "Adjustment layout dan bahasa di beberapa halaman",
        "Penambahan animasi pada beberapa elemen",
        "Penambahan icon whatsapp melayang pada semua halaman",
      ],
      en: [
        "Layout and language adjustments on several pages",
        "Added animations to some elements",
        "Added floating WhatsApp icon on all pages",
      ],
    },
    image: "/images/projects/codr.png",
    company_code: "codr",
    link: "https://codr.id",
    tools: ["React.js", "Tailwind CSS", "CSS", "NPM", "Git", "Figma", "Gitlab"],
  },
  {
    id: 3,
    name: "MPIS",
    description: {
      id: "Aplikasi untuk pengelolaan publisher musik di beberapa platform seperti spotify dan lainya, dibangun menggunakan Rest API dan bekerja sama dengan beberapa tim",
      en: "Application for managing music publishers on several platforms such as Spotify and others, built using Rest API and collaborating with several teams",
    },
    features: {
      id: [
        "Setup Projek, konfigurasi tools dan library yang digunakan",
        "Pengerjaan halaman form input data dan validasi menggunakan manual state",
        "Perbantuan bug fixing pada beberapa halaman",
      ],
      en: [
        "Project setup, configuration of tools and libraries used",
        "Development of data input form pages and validation using manual state",
        "Assistance in bug fixing on several pages",
      ],
    },
    image: "/images/projects/mpis.png",
    company_code: "codr",
    link: "https://mpis.id",
    tools: ["React.js", "Tailwind CSS", "CSS", "Redux", "NPM", "Git", "Figma"],
  },
  {
    id: 4,
    name: "Talasi",
    description: {
      id: "Aplikasi untuk pembelian hasil tani langsung dari petani tanpa melalui tengkulak, didalamnya ada fitur chat atau panggilan secara real time antara petani dan pembeli",
      en: "Application for purchasing agricultural products directly from farmers without middlemen, featuring real-time chat or call between farmers and buyers",
    },
    features: {
      id: [
        "Setup Projek, konfigurasi tools dan library yang digunakan",
        "Setup layout dan routing menggunakan React Router",
        "Fitur chat dan panggilan real-time menggunakan Socket.io",
        "Sistem Master Data untuk produk, kategori, dan user",
      ],
      en: [
        "Project setup, configuration of tools and libraries used",
        "Setup layout and routing using React Router",
        "Real-time chat and call feature using Socket.io",
        "Master Data system for products, categories, and users",
      ],
    },
    image: "/images/projects/talasi.png",
    company_code: "codr",
    tools: ["React.js", "Tailwind CSS", "CSS", "Redux", "Socket.io", "NPM", "Git", "Figma"],
  },
  {
    id: 5,
    name: "Woori",
    description: {
      id: "Super Internal App pada perusahaan woori yang didalamnya terdapat banyak fitur termasuk master data, pembuatan dokumen, approval, download dokumen, hingga fitur booking pun ada di aplikasi ini. Disini saya sebagai leader frontend dan bertanggung jawab terhadap semua hal yang berhubungan dengan frontend.",
      en: "Super Internal App at Woori company with many features including master data, document creation, approval, document download, and even booking features. I served as frontend leader and was responsible for all frontend-related matters.",
    },
    features: {
      id: [
        "Memimpin tim frontend yang terdiri dari 3 orang",
        "Membuat desain arsitektur aplikasi dan pembagian modul antar anggota tim",
        "Membuat dokumentasi teknis untuk memudahkan anggota tim dalam memahami alur aplikasi",
        "Melakukan code review untuk memastikan kualitas kode yang baik",
        "Merancang tools dan library yang digunakan dalam aplikasi",
        "Layouting dan integrasi API pada beberapa modul penting",
      ],
      en: [
        "Led a frontend team of 3 members",
        "Designed application architecture and module division among team members",
        "Created technical documentation to help team members understand the application flow",
        "Performed code reviews to ensure code quality",
        "Designed tools and libraries used in the application",
        "Layouting and API integration on several important modules",
      ],
    },
    image: "/images/projects/woori.png",
    company_code: "codr",
    tools: ["React.js", "Tailwind CSS", "CSS", "Redux", "Socket.io", "NPM", "Material UI", "Git", "Figma"],
  },
  {
    id: 6,
    name: "Audy CIS",
    description: {
      id: "Internal Aplikasi untuk manajemen klinik audy dental, didalamnya terdapat fitur pendaftaran pasien, rekam medis, penjadwalan dokter, hingga laporan keuangan. aplikasi ini digunakan oleh beberapa cabang klinik audy di indonesia",
      en: "Internal application for managing Audy Dental clinics, including patient registration, medical records, doctor scheduling, and financial reports. This application is used by several Audy clinic branches in Indonesia",
    },
    features: {
      id: [
        "Layouting dan integrasi sebagian besar module master data",
        "Layouting dan integrasi feature Appointment",
        "Layouting dan integrasi feature Cashier",
        "Bug fixing",
      ],
      en: [
        "Layouting and integration of most master data modules",
        "Layouting and integration of Appointment feature",
        "Layouting and integration of Cashier feature",
        "Bug fixing",
      ],
    },
    image: "/images/projects/audy-cis.png",
    company_code: "rgb",
    link: "",
    tools: [
      "Typescript",
      "Next.js",
      "Mantine",
      "Tanstack React Query",
      "SQL",
      "Zod",
      "CSS",
      "PNPM",
      "Git",
      "Gitlab",
      "Figma",
    ],
  },
  {
    id: 7,
    name: "Nutrive Nutrition",
    description: {
      id: "Nutrive Nutrition adalah website company profile penjualan produk nutrisi kesehatan. Website ini menampilkan berbagai informasi tentang produk nutrisi, manfaatnya, serta cara pembelian. Didesain dengan tampilan yang menarik dan user-friendly untuk memberikan pengalaman terbaik bagi pengunjung.",
      en: "Nutrive Nutrition is a company profile website for selling health nutrition products. It displays various information about the products, their benefits, and purchase methods. Designed with an attractive and user-friendly interface to provide the best visitor experience.",
    },
    features: {
      id: ["Development feature FAQ", "Fixing bug SEO pada halaman produk"],
      en: ["Development of FAQ feature", "Fixing SEO bug on product page"],
    },
    image: "/images/projects/nutrive.png",
    company_code: "rgb",
    link: "https://nutrivenutrition.com",
    tools: ["Javascript", "Vue.js", "Laravel", "SQL", "CSS", "NPM", "Git", "Gitlab"],
  },
  {
    id: 14,
    name: "Erha",
    description: {
      id: "Erha yang saya kerjakan adalah CMS Admin untuk mengelola konten pada website erha, Fitur yang saya kerjakan adalah master data dan konfigurasi Age Detector yang terintegrasi juga dengan AI.",
      en: "At Erha, I worked on the Admin CMS to manage content on the Erha website. The features I handled include master data and Age Detector configuration integrated with AI.",
    },
    features: {
      id: ["Development beberapa halaman master data", "Development halaman konfigurasi Age Detector, Bug fixing"],
      en: ["Development of several master data pages", "Development of Age Detector configuration page, Bug fixing"],
    },
    image: "/images/projects/erha.png",
    company_code: "rgb",
    tools: ["Javascript", "Vue.js", "Nuxt.js", "SQL", "CSS", "NPM", "Git", "Gitlab"],
  },
  {
    id: 8,
    name: "Danone Elina",
    description: {
      id: "Aplikasi internal untuk manajemen produk dan penjualan dari brand elina milik danone, didalamnya terdapat fitur master data, manajemen produk, penjualan, laporan, hingga manajemen user. aplikasi ini digunakan oleh tim sales dan marketing dari brand elina dan terintegrasi dengan aplikasi mobile yang digunakan oleh user.",
      en: "Internal application for managing products and sales of Danone's Elina brand, including master data, product management, sales, reports, and user management. This app is used by the Elina sales and marketing team and is integrated with the mobile app used by users.",
    },
    features: {
      id: [
        "Layouting dan integrasi master data dan beberapa fitur lainya",
        "Setting roles dan permission user",
        "Bug fixing",
        "Export data ke excel",
      ],
      en: [
        "Layouting and integration of master data and several other features",
        "Setting user roles and permissions",
        "Bug fixing",
        "Export data to Excel",
      ],
    },
    image: "/images/projects/danone.png",
    company_code: "rgb",
    tools: ["Javascript", "Nuxt.js", "Vue.js", "SQL", "CSS", "NPM", "Git", "Gitlab"],
  },
  {
    id: 10,
    name: "Mitra Keluarga",
    description: {
      id: "Aplikasi company profile dan Internal CMS rumah sakit mitra keluarga, menampilkan berbagai informasi tentang layanan kesehatan yang tersedia, profil rumah sakit, serta cara menghubungi dan membuat janji temu. Didesain dengan tampilan yang profesional dan mudah dinavigasi untuk memberikan pengalaman terbaik bagi pengunjung.",
      en: "Company profile and internal CMS application for Mitra Keluarga hospital, displaying information about available health services, hospital profile, and how to contact or make an appointment. Designed with a professional and easy-to-navigate interface to provide the best visitor experience.",
    },
    features: {
      id: [
        "Layanan Gawat Darurat",
        "Bug fixing",
        "Layouting dan integrasi registrasi user dan support fitur OCR",
        "Layouting dan integrasi di beberapa menu CMS",
      ],
      en: [
        "Emergency Services",
        "Bug fixing",
        "Layouting and integration of user registration and OCR support feature",
        "Layouting and integration on several CMS menus",
      ],
    },
    image: "/images/projects/mika.png",
    company_code: "rgb",
    link: "",
    tools: ["Javascript", "Nuxt.js", "Vue.js", "SQL", "CSS", "NPM", "Git", "Gitlab", "Figma"],
  },
  {
    id: 11,
    name: "Treasury Gamification",
    description: {
      id: "Treasury adalah aplikasi investasi emas secara online, yang didalamnya terdapat projek yang saya kerjakan yaitu gamification. Treasury Gamification adalah applikasi web view yang hanya bisa diakses melalui aplikasi treasury, yang didalamnya teradpat mini games, informasi point, reward, dan leaderboard. gamification ini bertujuan untuk meningkatkan engagement user terhadap aplikasi treasury.",
      en: "Treasury is an online gold investment app, where the project I worked on was gamification. Treasury Gamification is a webview application accessible only through the Treasury app, featuring mini games, point information, rewards, and leaderboard. This gamification aims to increase user engagement with the Treasury app.",
    },
    features: {
      id: [
        "Development perubahan tampilan UI/UX ke versi terbaru",
        "Bug Fixing",
        "Performance Improvement",
        "Code Refactoring",
      ],
      en: [
        "Development of UI/UX changes to the latest version",
        "Bug Fixing",
        "Performance Improvement",
        "Code Refactoring",
      ],
    },
    image: "/images/projects/treasury.png",
    company_code: "rgb",
    link: "",
    tools: ["Javascript", "Vue.js", "Zod", "CSS", "NPM", "Git", "Gitlab", "Figma"],
  },
  {
    id: 12,
    name: "Digipos",
    description: {
      id: "Digipos adalah aplikasi internal milik Telkomsel Indonesia yang digunakan untuk manajemen point of sales (POS) di seluruh outlet telkomsel, perpajakan, hingga pembuatan dokumen.",
      en: "Digipos is an internal application owned by Telkomsel Indonesia used for managing point of sales (POS) in all Telkomsel outlets, taxation, and document creation.",
    },
    features: {
      id: [
        "Setup project dan tools yang digunakan",
        "Layouting dan integrasi disemua halaman",
        "Bug fixing",
        "Kordinasi dengan client",
        "dan lainya",
      ],
      en: [
        "Project setup and tools used",
        "Layouting and integration on all pages",
        "Bug fixing",
        "Coordination with client",
        "and others",
      ],
    },
    image: "/images/projects/digipos.png",
    company_code: "fps",
    link: "",
    tools: ["Javascript", "React.js", "Material UI", "Redux", "SQL", "CSS", "NPM", "Git", "Gitlab", "Figma"],
  },
  {
    id: 13,
    name: "BLST",
    description: {
      id: "BLST adalah aplikasi internal milik IPB yang digunakan untuk manajemen aset kantor, inventaris, hingga pengajuan barang baru.",
      en: "BLST is an internal application owned by IPB used for managing office assets, inventory, and new item requests.",
    },
    image: "/images/projects/blst.png",
    company_code: "blst",
    tools: ["Javascript", "React.js", "SQL", "CSS", "NPM", "Git", "Gitlab", "Figma"],
  },
];

type UseProjectsParams = DecodedValueMap<typeof projectParams>;

export const useListProjectsQuery = (options?: { queryParams?: Partial<UseProjectsParams>; enabled?: boolean }) => {
  const { queryParams = {}, enabled = true } = options ?? {};

  let response = data;

  if (queryParams.search) {
    const lower = queryParams.search.toLowerCase();
    response = response.filter((p) => p.name.toLowerCase().includes(lower));
  }

  if (queryParams.company_code) {
    response = response.filter((p) => p.company_code === queryParams.company_code);
  }

  const query = useQuery({
    queryKey: ["projects", queryParams],
    queryFn: async () => {
      // await new Promise((resolve) => setTimeout(resolve, 1000));
      return response;
    },
    enabled,
  });

  return query;
};
