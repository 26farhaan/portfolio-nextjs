import { JSX } from "react/jsx-dev-runtime";

import IconLaravel from "@/components/Icon/IconLaravel";
import IconAI from "@/components/Icon/skills/IconAI";
import IconBootstrap from "@/components/Icon/skills/IconBootstrap";
import IconCSS from "@/components/Icon/skills/IconCSS";
import IconDocker from "@/components/Icon/skills/IconDocker";
import IconFastApi from "@/components/Icon/skills/IconFastApi";
import IconFigma from "@/components/Icon/skills/IconFigma";
import IconFrammerMotion from "@/components/Icon/skills/IconFrammerMotion";
import IconGit from "@/components/Icon/skills/IconGit";
import IconGithub from "@/components/Icon/skills/IconGithub";
import IconGitlab from "@/components/Icon/skills/IconGitlab";
import IconHtml5 from "@/components/Icon/skills/IconHtml5";
import IconJavascript from "@/components/Icon/skills/IconJavascript";
import IconJira from "@/components/Icon/skills/IconJira";
import IconMantine from "@/components/Icon/skills/IconMantine";
import IconMaterialUI from "@/components/Icon/skills/IconMaterialUI";
import IconMySQL from "@/components/Icon/skills/IconMySQL";
import IconNextJs from "@/components/Icon/skills/IconNextJs";
import IconNodeJs from "@/components/Icon/skills/IconNodeJs";
import IconNPM from "@/components/Icon/skills/IconNPM";
import IconNuxtJs from "@/components/Icon/skills/IconNuxtJs";
import IconPNPM from "@/components/Icon/skills/IconPNPM";
import IconPostgreSQL from "@/components/Icon/skills/IconPostgreSQL";
import IconPython from "@/components/Icon/skills/IconPython";
import IconReact from "@/components/Icon/skills/IconReact";
import IconRedux from "@/components/Icon/skills/IconRedux";
import IconSQL from "@/components/Icon/skills/IconSQL";
import IconSupabase from "@/components/Icon/skills/IconSupabase";
import IconTailwind from "@/components/Icon/skills/IconTailwind";
import IconTanstack from "@/components/Icon/skills/IconTanstack";
import IconTypescript from "@/components/Icon/skills/IconTypescript";
import IconVercel from "@/components/Icon/skills/IconVercel";
import IconVueJs from "@/components/Icon/skills/IconVueJs";
import IconZod from "@/components/Icon/skills/IconZod";
import IconZustand from "@/components/Icon/skills/IconZustand";

type skillType = { label: string; icon: ({ size }: { size?: number }) => JSX.Element; color: string };
type enumSKILLSType = Record<string, skillType>;

export type SKILLSType = skillType[];

export const enumSKILLS: enumSKILLSType = {
  HTML5: {
    label: "HTML5",
    icon: ({ size }) => <IconHtml5 size={size} />,
    color: "#DE5631",
  },
  Javascript: {
    label: "Javascript",
    icon: ({ size }) => <IconJavascript size={size} />,
    color: "#F7E025",
  },
  TypeScript: {
    label: "TypeScript",
    icon: ({ size }) => <IconTypescript size={size} />,
    color: "#377CC8",
  },
  "React.js": {
    label: "React.js",
    icon: ({ size }) => <IconReact size={size} />,
    color: "#66DBFB",
  },
  "Tanstack React Query": {
    label: "Tanstack React Query",
    icon: ({ size }) => <IconTanstack size={size} />,
    color: "#66DBFB",
  },
  "Node.js": {
    label: "Node.js",
    icon: ({ size }) => <IconNodeJs size={size} />,
    color: "#8CC84B",
  },
  Python: {
    label: "Python",
    icon: ({ size }) => <IconPython size={size} />,
    color: "#0D3A63",
  },
  FastAPI: {
    label: "FastAPI",
    icon: ({ size }) => <IconFastApi size={size} />,
    color: "#0D9B8E",
  },
  "Next.js": {
    label: "Next.js",
    icon: ({ size }) => <IconNextJs size={size} />,
    color: "#0D3A63",
  },
  Laravel: {
    label: "Laravel",
    icon: ({ size }) => <IconLaravel size={size} />,
    color: "#f05340",
  },
  "Nuxt.js": {
    label: "Nuxt.js",
    icon: ({ size }) => <IconNuxtJs size={size} />,
    color: "#08C792",
  },
  "Vue.js": {
    label: "Vue.js",
    icon: ({ size }) => <IconVueJs size={size} />,
    color: "#3A4F63",
  },
  CSS: {
    label: "CSS",
    icon: ({ size }) => <IconCSS size={size} />,
    color: "#2D53E5",
  },
  "Tailwind CSS": {
    label: "Tailwind CSS",
    icon: ({ size }) => <IconTailwind size={size} />,
    color: "#3EBFF8",
  },
  Mantine: {
    label: "Mantine",
    icon: ({ size }) => <IconMantine size={size} />,
    color: "#399DF0",
  },
  "Material UI": {
    label: "Material UI",
    icon: ({ size }) => <IconMaterialUI size={size} />,
    color: "#0286CE",
  },
  Bootstrap: {
    label: "Bootstrap",
    icon: ({ size }) => <IconBootstrap size={size} />,
    color: "#8118FA",
  },
  Zustand: {
    label: "Zustand",
    icon: ({ size }) => <IconZustand size={size} />,
    color: "#FAB229",
  },
  Vercel: {
    label: "Vercel",
    icon: ({ size }) => <IconVercel size={size} />,
    color: "#0D3A63",
  },
  Redux: {
    label: "Redux",
    icon: ({ size }) => <IconRedux size={size} />,
    color: "#7A50BE",
  },
  Zod: {
    label: "Zod",
    icon: ({ size }) => <IconZod size={size} />,
    color: "#7A50BE",
  },
  "Framer Motion": {
    label: "Framer Motion",
    icon: ({ size }) => <IconFrammerMotion size={size} />,
    color: "#F9F133",
  },
  SQL: {
    label: "SQL",
    icon: ({ size }) => <IconSQL size={size} />,
    color: "#F9F133",
  },
  Jira: {
    label: "Jira",
    icon: ({ size }) => <IconJira size={size} />,
    color: "#1E3050",
  },
  MySQL: {
    label: "MySQL",
    icon: ({ size }) => <IconMySQL size={size} />,
    color: "#2D8BD0",
  },
  Figma: {
    label: "Figma",
    icon: ({ size }) => <IconFigma size={size} />,
    color: "#097AF9",
  },
  PostgreSQL: {
    label: "PostgreSQL",
    icon: ({ size }) => <IconPostgreSQL size={size} />,
    color: "#396C94",
  },
  Supabase: {
    label: "Supabase",
    icon: ({ size }) => <IconSupabase size={size} />,
    color: "#75C878",
  },
  Docker: {
    label: "Docker",
    icon: ({ size }) => <IconDocker size={size} />,
    color: "#0E72A8",
  },
  AI: {
    label: "AI",
    icon: ({ size }) => <IconAI size={size} />,
    color: "#FF9900",
  },
  NPM: {
    label: "NPM",
    icon: ({ size }) => <IconNPM size={size} />,
    color: "#0D3A63",
  },
  PNPM: {
    label: "PNPM",
    icon: ({ size }) => <IconPNPM size={size} />,
    color: "#F9B008",
  },
  Git: {
    label: "Git",
    icon: ({ size }) => <IconGit size={size} />,
    color: "#E84E31",
  },
  Github: {
    label: "Github",
    icon: ({ size }) => <IconGithub size={size} />,
    color: "#0D3A63",
  },
  Gitlab: {
    label: "Gitlab",
    icon: ({ size }) => <IconGitlab size={size} />,
    color: "#DB4128",
  },
} as const;

export const SKILLS: SKILLSType = Object.keys(enumSKILLS).map((key) => enumSKILLS[key]);
