import BrowserStorage from "./browserStorage";

export interface userInfoType {
  name: string;
  lname: string;
  phone: string;
  email: string;
  password: string;
}

interface tokenType {
  userToken: string;
}

export const userInfo = new BrowserStorage<userInfoType>("userInfo");

export const login = new BrowserStorage<tokenType>("token");
