import { NextPage } from 'next';

export type LoginPageType = NextPage;

export interface LoginValues {
  email: string;
  password: string;
}
