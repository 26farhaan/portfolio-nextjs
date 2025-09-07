import { JSX } from "react/jsx-dev-runtime";

import IconAI from "@/components/Icons/skills/IconAI";
import IconBootstrap from "@/components/Icons/skills/IconBootstrap";
import IconCSS from "@/components/Icons/skills/IconCSS";
import IconDocker from "@/components/Icons/skills/IconDocker";
import IconFastApi from "@/components/Icons/skills/IconFastApi";
import IconFigma from "@/components/Icons/skills/IconFigma";
import IconFrammerMotion from "@/components/Icons/skills/IconFrammerMotion";
import IconGithub from "@/components/Icons/skills/IconGithub";
import IconGitlab from "@/components/Icons/skills/IconGitlab";
import IconHtml5 from "@/components/Icons/skills/IconHtml5";
import IconJavascript from "@/components/Icons/skills/IconJavascript";
import IconJira from "@/components/Icons/skills/IconJira";
import IconMantine from "@/components/Icons/skills/IconMantine";
import IconMaterialUI from "@/components/Icons/skills/IconMaterialUI";
import IconMySQL from "@/components/Icons/skills/IconMySQL";
import IconNextJs from "@/components/Icons/skills/IconNextJs";
import IconNodeJs from "@/components/Icons/skills/IconNodeJs";
import IconNPM from "@/components/Icons/skills/IconNPM";
import IconNuxtJs from "@/components/Icons/skills/IconNuxtJs";
import IconPNPM from "@/components/Icons/skills/IconPNPM";
import IconPostgreSQL from "@/components/Icons/skills/IconPostgreSQL";
import IconPython from "@/components/Icons/skills/IconPython";
import IconReact from "@/components/Icons/skills/IconReact";
import IconRedux from "@/components/Icons/skills/IconRedux";
import IconSQL from "@/components/Icons/skills/IconSQL";
import IconSupabase from "@/components/Icons/skills/IconSupabase";
import IconTailwind from "@/components/Icons/skills/IconTailwind";
import IconTanstack from "@/components/Icons/skills/IconTanstack";
import IconTypescript from "@/components/Icons/skills/IconTypescript";
import IconVercel from "@/components/Icons/skills/IconVercel";
import IconVueJs from "@/components/Icons/skills/IconVueJs";
import IconZustand from "@/components/Icons/skills/IconZustand";

export type SKILLSType = { label: string; icon: ({ size }: { size?: number }) => JSX.Element; color: string }[];

export const SKILLS: SKILLSType = [
  {
    label: "HTML5",
    icon: ({ size }) => <IconHtml5 size={size} />,
    color: "#DE5631",
  },
  {
    label: "Javascript",
    icon: ({ size }) => <IconJavascript size={size} />,
    color: "#F7E025",
  },
  {
    label: "TypeScript",
    icon: ({ size }) => <IconTypescript size={size} />,
    color: "#377CC8",
  },
  {
    label: "React.js",
    icon: ({ size }) => <IconReact size={size} />,
    color: "#66DBFB",
  },
  {
    label: "Tanstack React Query",
    icon: ({ size }) => <IconTanstack size={size} />,
    color: "#66DBFB",
  },
  {
    label: "Node.js",
    icon: ({ size }) => <IconNodeJs size={size} />,
    color: "#8CC84B",
  },
  {
    label: "Python",
    icon: ({ size }) => <IconPython size={size} />,
    color: "#0D3A63",
  },
  {
    label: "FastAPI",
    icon: ({ size }) => <IconFastApi size={size} />,
    color: "#0D9B8E",
  },
  {
    label: "Next.js",
    icon: ({ size }) => <IconNextJs size={size} />,
    color: "#0D3A63",
  },
  {
    label: "Nuxt.js",
    icon: ({ size }) => <IconNuxtJs size={size} />,
    color: "#08C792",
  },
  {
    label: "Vue.js",
    icon: ({ size }) => <IconVueJs size={size} />,
    color: "#3A4F63",
  },
  {
    label: "CSS",
    icon: ({ size }) => <IconCSS size={size} />,
    color: "#2D53E5",
  },
  {
    label: "Tailwind CSS",
    icon: ({ size }) => <IconTailwind size={size} />,
    color: "#3EBFF8",
  },
  {
    label: "Mantine",
    icon: ({ size }) => <IconMantine size={size} />,
    color: "#399DF0",
  },
  {
    label: "Material UI",
    icon: ({ size }) => <IconMaterialUI size={size} />,
    color: "#0286CE",
  },
  {
    label: "Bootstrap",
    icon: ({ size }) => <IconBootstrap size={size} />,
    color: "#8118FA",
  },
  {
    label: "Zustand",
    icon: ({ size }) => <IconZustand size={size} />,
    color: "#FAB229",
  },
  {
    label: "Vercel",
    icon: ({ size }) => <IconVercel size={size} />,
    color: "#0D3A63",
  },
  {
    label: "Redux",
    icon: ({ size }) => <IconRedux size={size} />,
    color: "#7A50BE",
  },
  {
    label: "Framer Motion",
    icon: ({ size }) => <IconFrammerMotion size={size} />,
    color: "#F9F133",
  },
  {
    label: "SQL",
    icon: ({ size }) => <IconSQL size={size} />,
    color: "#F9F133",
  },
  {
    label: "Jira",
    icon: ({ size }) => <IconJira size={size} />,
    color: "#1E3050",
  },
  {
    label: "MySQL",
    icon: ({ size }) => <IconMySQL size={size} />,
    color: "#2D8BD0",
  },
  {
    label: "Figma",
    icon: ({ size }) => <IconFigma size={size} />,
    color: "#097AF9",
  },
  {
    label: "PostgreSQL",
    icon: ({ size }) => <IconPostgreSQL size={size} />,
    color: "#396C94",
  },
  {
    label: "Supabase",
    icon: ({ size }) => <IconSupabase size={size} />,
    color: "#75C878",
  },
  {
    label: "Docker",
    icon: ({ size }) => <IconDocker size={size} />,
    color: "#0E72A8",
  },
  {
    label: "AI",
    icon: ({ size }) => <IconAI size={size} />,
    color: "#FF9900",
  },
  {
    label: "NPM",
    icon: ({ size }) => <IconNPM size={size} />,
    color: "#0D3A63",
  },
  {
    label: "PNPM",
    icon: ({ size }) => <IconPNPM size={size} />,
    color: "#F9B008",
  },
  {
    label: "Github",
    icon: ({ size }) => <IconGithub size={size} />,
    color: "#0D3A63",
  },
  {
    label: "Gitlab",
    icon: ({ size }) => <IconGitlab size={size} />,
    color: "#DB4128",
  },
];
