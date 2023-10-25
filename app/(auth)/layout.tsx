"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@mui/material";

import { AppBar } from "@/components/app-bar";

export default function LayoutLogin({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const loginOrSignup = pathname.includes("login")
    ? ["/sign-up", "sign up"]
    : ["/login", "login"];
  return (
    <div className="flex min-h-screen flex-col gap-3">
      <AppBar>
        <Button
          component={Link}
          href={loginOrSignup[0]}
          className="!text-slate-100"
        >
          {loginOrSignup[1]}
        </Button>
      </AppBar>

      <main className="mb-auto flex justify-center">{children}</main>
      <footer>footer</footer>
    </div>
  );
}
