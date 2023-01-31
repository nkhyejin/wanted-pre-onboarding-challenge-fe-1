import axios, { AxiosError } from 'axios';
import { RegisterInfo, ResponseType, UserInfo } from '../types/user';
import { axiosInstance } from './axiosInstance';

export const requestLogin = async (info: UserInfo) => {
  try {
    const { status, data } = await axiosInstance.post('/users/login', info);
    console.log(status, data);
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

export const requestRegister = async (info: RegisterInfo) => {
  try {
    const { status, data } = await axiosInstance.post('/users/create', info);
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
