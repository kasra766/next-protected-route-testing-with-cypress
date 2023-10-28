"use client";

import { useAuth } from "@/hooks/use-auth";

export function ProtectRoute({ children }: { children: React.ReactNode }) {
  useAuth();
  return <div>{children}</div>;
}
