// components/ClientSuspense.tsx
"use client";

import { Suspense } from "react";

export default function ClientSuspense({
  fallback,
  children,
}: {
  fallback: React.ReactNode;
  children: React.ReactNode;
}) {
  return <Suspense fallback={fallback}>{children}</Suspense>;
}
