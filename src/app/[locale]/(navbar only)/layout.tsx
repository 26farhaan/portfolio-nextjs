"use client";

import { ReactNode, useEffect, useState } from "react";
import { notFound } from "next/navigation";
import { AppShell, AppShellHeader, AppShellMain, Avatar, Box, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import LangSwitch from "@/components/Layouts/LangSwitch";
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
        classNames={{
          main: classes.mainShell,
        }}
      >
        <AppShellHeader
          classNames={{
            header: `${classes.headerShell} ${!isTop && !opened ? classes.headerShellScrolled : ""}`,
          }}
        >
          <Group h="100%" p="md" justify="flex-end">
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
        </AppShellHeader>

        <AppShellMain classNames={{ main: classes.mainShell }} onScroll={handleScroll}>
          <div className={classes.childWrapper}>{children}</div>
        </AppShellMain>
      </AppShell>
    </main>
  );
}
