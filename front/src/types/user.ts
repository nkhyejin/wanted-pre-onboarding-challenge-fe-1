export interface UserInfo {
  email: string;
  password: string;
}

export interface RegisterInfo extends UserInfo {
  confirmPassword?: string;
}

export type ResponseType = {
  status: number;
  message: string;
};
