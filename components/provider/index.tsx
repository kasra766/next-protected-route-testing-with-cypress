"use client";
import ThemeRegistry from "../theme-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeRegistry>{children}</ThemeRegistry>;
}
