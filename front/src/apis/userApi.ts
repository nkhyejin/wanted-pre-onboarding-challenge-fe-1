import axios, { AxiosError } from 'axios';
import { RegisterInfo, ResponseType, UserInfo } from '../types/user';
import { axiosInstance } from './axiosInstance';

export const requestLogin = async (info: UserInfo) => {
  try {
    const passData = JSON.stringify(info);
    const data = await axiosInstance.post('/user/login', passData);
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};

export const requestRegister = async (info: RegisterInfo) => {
  try {
    const passData = JSON.stringify(info);
    const { status, data } = await axiosInstance.post(
      '/users/create',
      passData,
    );
    return {
      status,
      message: data.message,
    } as ResponseType;
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
