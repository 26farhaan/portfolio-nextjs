"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { completeNavigationProgress, NavigationProgress, startNavigationProgress } from "@mantine/nprogress";

export default function MantineProgressHandler() {
  const pathname = usePathname();

  useEffect(() => {
    startNavigationProgress();

    // Simulasikan loading selesai setelah halaman berubah
    // (karena App Router tidak punya event "routeChangeComplete" seperti Pages Router)
    const timeout = setTimeout(() => {
      completeNavigationProgress();
    }, 300);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return <NavigationProgress aria-label="progress-page" />;
}
