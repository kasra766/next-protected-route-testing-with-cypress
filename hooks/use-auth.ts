import { useLayoutEffect } from "react";
import { redirect } from "next/navigation";

import { isLogin } from "@/utils/isLogin";

export function useAuth() {
  const userIsLogin = isLogin();

  useLayoutEffect(() => {
    if (!userIsLogin) {
      redirect("/login");
    }
  }, []);
}

export function useIsLogin() {
  const userIsLogin = isLogin();

  useLayoutEffect(() => {
    if (userIsLogin) {
      redirect("/home");
    }
  }, []);
}
