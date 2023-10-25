import { login } from "@/services/storage";

export function isLogin() {
  const { userToken } = login.get();

  return userToken ? true : false;
}
