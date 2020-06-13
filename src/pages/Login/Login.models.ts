import { NextPage } from 'next';

export type LoginPageType = NextPage;

export interface LoginValues {
  username: string;
  password: string;
}
