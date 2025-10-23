"use client";

import { usePathname } from "next/navigation";
import { Flex, NavLink } from "@mantine/core";
import { useTranslations } from "next-intl";

import IconCertification from "@/components/Icons/IconCertification";
import IconContact from "@/components/Icons/IconContact";
import IconHome from "@/components/Icons/IconHome";
import IconProjects from "@/components/Icons/IconProjects";
import IconService from "@/components/Icons/IconService";
import IconUser from "@/components/Icons/IconUser";
import classes from "./index.module.css";

export default function Sidenav() {
  const t = useTranslations("Sidebar");

  const menus = [
    {
      label: t("Home"),
      icon: <IconHome size={20} />,
      href: "/",
      key: "",
    },
    {
      label: t("About"),
      icon: <IconUser size={20} />,
      href: "/about",
      key: "about",
    },
    {
      label: t("Services"),
      icon: <IconService size={20} />,
      href: "/services",
      key: "services",
    },
    // {
    //   label: t("Achievements"),
    //   icon: <IconCertification size={20} />,
    //   href: "/achievements",
    //   key: "achievements",
    // },
    {
      label: t("Projects"),
      icon: <IconProjects size={20} />,
      href: "/projects",
      key: "projects",
    },
    {
      label: t("Contact"),
      icon: <IconContact size={20} />,
      href: "/contact",
      key: "contact",
    },
  ];

  const pathname = usePathname();
  const activeLink = pathname.split("/")[2] || "";
  return (
    <Flex direction="column" gap="xs">
      {menus.map((menu) => {
        return (
          <NavLink
            className={`${classes.link} ${activeLink === menu.key ? classes.activeLink : ""}`}
            key={menu.label}
            href={menu.href}
            label={menu.label}
            leftSection={menu.icon}
          />
        );
      })}
      {/* <NavLink
        label="Nested parent link"
        childrenOffset={28}
        href="#required-for-focus"
        leftSection={<IconHome size={20} />}
      >
        <NavLink label="First child link" href="#required-for-focus" />
        <NavLink label="Second child link" href="#required-for-focus" />
        <NavLink label="Third child link" href="#required-for-focus" />
      </NavLink> */}
    </Flex>
  );
}
