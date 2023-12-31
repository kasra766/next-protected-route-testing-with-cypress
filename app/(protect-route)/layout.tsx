"use client";

import { ProtectRoute } from "@/components/provider/not-login";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ProtectRoute>{children}</ProtectRoute>;
}
