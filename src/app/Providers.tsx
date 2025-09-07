// In Next.js, this file would be called: app/providers.tsx

"use client";

// Since QueryClientProvider relies on useContext under the hood, we have to put 'use client' on top
import { ReactNode } from "react";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { isServer, QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { mantinetheme, resolver } from "../../mantine.theme";
import MantineProgressHandler from "./[locale]/MantineProgressHandler";
// CSS Mantine dan style lain idealnya diimport SEKALI di root
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/nprogress/styles.css";
import "@mantine/carousel/styles.css";
import "@/styles/font.css";

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // With SSR, we usually want to set some default staleTime
        // above 0 to avoid refetching immediately on the client
        staleTime: 60 * 1000,
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined;

function getQueryClient() {
  if (isServer) {
    // Server: always make a new query client
    return makeQueryClient();
  }
  // Browser: make a new query client if we don't already have one
  // This is very important, so we don't re-make a new client if React
  // suspends during the initial render. This may not be needed if we
  // have a suspense boundary BELOW the creation of the query client
  if (!browserQueryClient) browserQueryClient = makeQueryClient();
  return browserQueryClient;
}

export default function Providers({ children }: { children: ReactNode }) {
  // NOTE: Avoid useState when initializing the query client if you don't
  //       have a suspense boundary between this and the code that may
  //       suspend because React will throw away the client on the initial
  //       render if it suspends and there is no boundary
  const queryClient = getQueryClient();

  return (
    <MantineProvider defaultColorScheme="auto" theme={mantinetheme} cssVariablesResolver={resolver}>
      <QueryClientProvider client={queryClient}>
        <Notifications />
        <MantineProgressHandler />
        {children}
      </QueryClientProvider>
    </MantineProvider>
  );
}
