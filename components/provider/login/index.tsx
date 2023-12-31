"use client";

import { useIsLogin } from "@/hooks/use-auth";

export function ProtectRoute({ children }: { children: React.ReactNode }) {
  useIsLogin();
  return <div>{children}</div>;
}
