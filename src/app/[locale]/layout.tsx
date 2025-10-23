"use client";

import { ReactNode, useEffect, useState } from "react";
import { notFound } from "next/navigation";
import { AppShell, AppShellHeader, AppShellMain, AppShellNavbar, Avatar, Box, Burger, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import * as motion from "motion/react-client";

import LangSwitch from "@/components/Layouts/LangSwitch";
import Sidebar from "@/components/Layouts/Sidebar";
import ThemeSwitch from "@/components/Layouts/ThemeSwitch";
import classes from "./layout.module.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  const [opened, { toggle }] = useDisclosure();
  const [isTop, setIsTop] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // hanya jalan di client
    setMounted(true);
    const mql = window.matchMedia("(hover: none)");
    setIsMobile(mql.matches);

    // optional: dengarkan perubahan orientasi/device
    const listener = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener("change", listener);
    return () => mql.removeEventListener("change", listener);
  }, []);

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
          classNames={{
            header: `${classes.headerShell} ${!isTop && !opened ? classes.headerShellScrolled : ""}`,
          }}
          hiddenFrom="sm"
        >
          <Group h="100%" px="md">
            <Burger opened={opened} onClick={toggle} size="sm" />

            <motion.div
              suppressHydrationWarning
              className={classes.switchWrapMob}
              initial={false}
              animate={{
                opacity: !opened && isMobile ? 1 : 0,
                scale: !opened && isMobile ? 1 : 0,
              }}
              transition={{ duration: 0.2 }}
            >
              <Group>
                {mounted ? (
                  <>
                    <LangSwitch />
                    <ThemeSwitch />
                    <Avatar alt="Mohamad Farhan Profile" variant="filled" size={30} src="/images/profile-1.jpg" />
                  </>
                ) : (
                  // Placeholder saat SSR (biar struktur sama)
                  <Box style={{ width: 90, height: 30 }} />
                )}
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
    </main>
  );
}
