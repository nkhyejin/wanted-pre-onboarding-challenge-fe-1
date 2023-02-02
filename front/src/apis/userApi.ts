import axios, { AxiosError } from 'axios';
import { RegisterInfo, ResponseType, UserInfo } from '../types/user';
import { axiosInstance } from './axiosInstance';

const END_POINT = {
  login: '/users/login',
  signIn: '/users/create',
};

//공통 post 요청
const post = async <T>(info: T, endpoint: string) => {
  try {
    const { status, data } = await axiosInstance.post(endpoint, info);
    console.log(status, data);
    if (endpoint === END_POINT.login)
      localStorage.setItem('userToken', data.token);
    return {
      status,
      message: data.message,
    };
  } catch (err) {
    if (axios.isAxiosError(err) && err.response) {
      const { status, data } = err.response;
      return {
        status,
        message: data.details,
      } as ResponseType;
    }
  }
};

export const requestLogin = (info: UserInfo) => {
  return post<UserInfo>(info, END_POINT.login);
};
export const requestRegister = (info: RegisterInfo) => {
  return post<RegisterInfo>(info, END_POINT.signIn);
};
