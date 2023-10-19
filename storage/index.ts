import BrowserStorage from "./browserStorage";

interface userInfoType {
  name: string;
  lname: string;
  phone: number;
  email: string;
}

interface tokenType {
  userToken: string;
}

export const userInfo = new BrowserStorage<userInfoType>("userInfo");

export const login = new BrowserStorage<tokenType>("token");
