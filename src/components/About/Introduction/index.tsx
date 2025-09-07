"use client";

import { usePathname } from "next/navigation";
import { Box, Divider } from "@mantine/core";
import { useTranslations } from "next-intl";

import IconSignature from "@/components/Icons/IconSignature";
import HeaderSection from "@/components/UI/HeaderSection";

export default function Introduction() {
  const t = useTranslations("About");

  const lang = usePathname().split("/")[1] || "id";
  const body =
    lang === "id"
      ? `<p>Halo, terima kasih telah mengunjungi website profesional saya.
        Saya seorang <strong>Frontend Web Developer</strong> dengan 5 tahun pengalaman berfokus pada JavaScript. Saya juga menguasai Backend Development menggunakan Node.js dan Python (FastAPI). Di frontend, saya terbiasa dengan jQuery, Vue.js, dan Nuxt.js. Untuk styling: CSS, SCSS, Tailwind CSS serta UI library Ant Design, Bootstrap, dan Material UI.</p>
        <p>Saat ini saya berfokus pada <strong>Next.js</strong> karena fiturnya lengkap; untuk styling saya mengutamakan <strong>CSS Modules</strong> dan menggunakan <strong>Mantine</strong> sebagai UI library utama.</p>
        <h2>Kemampuan</h2>
        <ul>
          <li><strong>Next.js App Router & Page Router</strong></li>
          <li><strong>Next.js SSR, SSG, ISR, CSR</strong></li>
          <li><strong>Typescript & Javascript</strong></li>
          <li><strong>Light or Dark theme</strong></li>
          <li><strong>Next Internationalization (i18n)</strong></li>
          <li><strong>Next Auth</strong></li>
          <li><strong>Middleware</strong></li>
          <li><strong>SEO</strong></li>
          <li><strong>Lighthouse (Best Performance)</strong></li>
          <li><strong>Adobe XD & Figma design to Next.Js Website</strong></li>
          <li><strong>API Integration (Rest, Firebase, Websocket, Socket.io)</strong></li>
          <li><strong>State Management (Redux, Zustand)</strong></li>
          <li><strong>Material UI | Mantine | Antd | Bootstrap</strong></li>
        </ul>
        <p>Dengan keterampilan tersebut, saya membangun aplikasi sesuai kebutuhan dengan arsitektur yang optimal, efisien, dan mudah dikelola. Saya senang membuat solusi yang ramah pengguna dan berperforma tinggi, dengan perhatian pada UI/UX, keamanan, dan kualitas kode. Kode yang modular agar mudah dipahami dan dirawat.</p>

        <p>Saya pembelajar cepat yang nyaman di lingkungan dinamis, mampu bekerja mandiri maupun dalam tim, berkomunikasi jelas, dan selalu berupaya memberi kontribusi nyata pada setiap proyek.</p>
        <p>Salam Hangat,</p>
        `
      : `<p>Hello, thank you for visiting my professional website. I’m a <strong>Frontend Web Developer</strong> with 5 years of experience focused on JavaScript. I also handle Backend Development using Node.js and Python (FastAPI). On the frontend, I’m proficient with jQuery, Vue.js, and Nuxt.js. For styling: CSS, SCSS, Tailwind CSS and UI libraries including Ant Design, Bootstrap, and Material UI.</p>
      <p>I currently focus on <strong>Next.js</strong> for its comprehensive features; for styling I prefer <strong>CSS Modules</strong> and use <strong>Mantine</strong> as my primary UI library.</p>
      <h2>Capabilities</h2>
      <ul>
        <li><strong>Next.js App Router & Page Router</strong></li>
          <li><strong>Next.js SSR, SSG, ISR, CSR</strong></li>
          <li><strong>Typescript & Javascript</strong></li>
          <li><strong>Light or Dark theme</strong></li>
          <li><strong>Next Internationalization (i18n)</strong></li>
          <li><strong>Next Auth</strong></li>
          <li><strong>Middleware</strong></li>
          <li><strong>SEO</strong></li>
          <li><strong>Lighthouse (Best Performance)</strong></li>
          <li><strong>Adobe XD & Figma design to Next.Js Website</strong></li>
          <li><strong>API Integration (Rest, Firebase, Websocket, Socket.io)</strong></li>
          <li><strong>State Management (Redux, Zustand)</strong></li>
          <li><strong>Material UI | Mantine | Antd | Bootstrap</strong></li>
      </ul>
      <p>With these skills, I build applications tailored to requirements with an optimal, efficient, and maintainable architecture. I enjoy creating user-friendly, high-performance solutions with attention to UI/UX, security, and code quality. My code is modular, making it easy to understand and maintain.</p>
      <p>I’m a fast learner who thrives in dynamic environments, can work independently or with a team, communicates clearly, and consistently aims to deliver meaningful contributions to every project.</p>
      <p>Best regards,</p>
      `;

  return (
    <section>
      <HeaderSection title={t("title")} description={t("description")} />
      <Divider my="md" variant="dashed" size="sm" />
      <Box fz="md" dangerouslySetInnerHTML={{ __html: body }} />
      <Box mb={-56}>
        <IconSignature size={160} />
      </Box>
      <Divider variant="dashed" size="sm" />
    </section>
  );
}
