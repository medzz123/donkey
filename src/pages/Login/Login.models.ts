import { NextPage } from "next";

export type LoginPageType = NextPage<any>;

export interface LoginValues {
  email: string;
  password: string;
}
