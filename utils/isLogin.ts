import { login } from "@/storage";

export function isLogin() {
  const { userToken } = login.get();

  return userToken ? true : false;
}
