import { isLogin } from "@/utils/isLogin";
import { redirect } from "next/navigation";
import { useLayoutEffect } from "react";

export function useAuth() {
  const userIsLogin = isLogin();

  useLayoutEffect(() => {
    if (!userIsLogin) {
      redirect("/login");
    }
  }, [userIsLogin]);
}
