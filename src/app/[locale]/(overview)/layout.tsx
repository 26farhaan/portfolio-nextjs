"use client";

import { ReactNode, useState } from "react";
import { notFound } from "next/navigation";
import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  AppShellNavbar,
  Avatar,
  Box,
  Burger,
  // Container, Grid, GridCol, Text,
  Group,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import * as motion from "motion/react-client";

import LangSwitch from "@/components/Layouts/LangSwitch";
import Sidebar from "@/components/Layouts/Sidebar";
import ThemeSwitch from "@/components/Layouts/ThemeSwitch";
import classes from "./layout.module.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  const [opened, { toggle }] = useDisclosure();
  const [isTop, setIsTop] = useState(true);

  const isMobile = typeof window !== "undefined" ? window.matchMedia("(hover: none)").matches : false;
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    if (isMobile && target.scrollTop < 25) {
      setIsTop(true);
    } else {
      setIsTop(false);
    }
  };

  if (!children) return notFound();
  return (
    <main className={classes.root}>
      <AppShell
        padding="md"
        header={{ height: { base: 60, sm: 0, md: 0 } }}
        navbar={{
          width: { base: 200, md: 300, lg: 400 },
          breakpoint: "sm",
          collapsed: { mobile: !opened },
        }}
        classNames={{
          main: classes.mainShell,
        }}
      >
        <AppShellHeader
          classNames={{ header: `${classes.headerShell} ${!isTop && !opened ? classes.headerShellScrolled : ""}` }}
          hiddenFrom="sm"
        >
          <Group h="100%" px="md">
            <Burger opened={opened} onClick={toggle} size="sm" />
            <motion.div
              className={classes.switchWrapMob}
              initial={{ opacity: isTop && isMobile ? 1 : 0, scale: isTop && isMobile ? 1 : 0 }}
              animate={{ opacity: !opened ? 1 : 0, scale: !opened ? 1 : 0 }} // Animate x position based on isHovered state
              transition={{ duration: 0.2 }}
            >
              <Group>
                <LangSwitch />
                <ThemeSwitch />
                <Avatar alt="Mohamad Farhan Profile" variant="filled" size={30} src="/images/profile-1.jpg" />
              </Group>
            </motion.div>
          </Group>
        </AppShellHeader>
        <AppShellNavbar classNames={{ navbar: classes.navbar }} withBorder={false}>
          <Sidebar />
        </AppShellNavbar>
        <AppShellMain classNames={{ main: classes.mainShell }} onScroll={handleScroll}>
          <div className={classes.childWrapper}>{children}</div>
        </AppShellMain>
      </AppShell>
      {/* <Container size="lg" className={classes.container}>
        <Grid>
          <GridCol span={{ md: 3 }} className={classes.sidebarWrapper}>
            <Sidebar />
          </GridCol>
          <GridCol span={{ md: 9 }} p="md" pb={100} className={classes.contentWrapper}>
            {children}
          </GridCol>
        </Grid>
      </Container> */}
    </main>
  );
}
