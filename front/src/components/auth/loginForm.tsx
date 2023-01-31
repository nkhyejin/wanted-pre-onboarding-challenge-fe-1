/** @jsxImportSource @emotion/react */
import { Button } from '../common/button';
import AuthInput from './Input';
import { useForm, SubmitHandler } from 'react-hook-form';
import { css } from '@emotion/react';
import { requestLogin } from '../../apis/userApi';
import { ResponseType, UserInfo } from '../../types/user';
import { useNavigate } from 'react-router-dom';

//util에 빼기?
const Regex = {
  email: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
  // password: ,
};

const LoginForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserInfo>();

  const onSubmit: SubmitHandler<UserInfo> = async (data) => {
    const receiveData: ResponseType | undefined = await requestLogin(data);

    alert(receiveData && receiveData.message);
    if (receiveData?.status === 200) {
      reset();
      navigate('/todo');
    }
  };

  const emailRegister = register('email', {
    required: { value: true, message: '이메일을 입력해주세요.' },
    pattern: { value: Regex.email, message: '이메일 형식을 입력해주세요.' },
  });
  const passwordRegister = register('password', {
    required: true,
    minLength: { value: 8, message: '비밀번호 6자리 이상 입력해주세요.' },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} css={formStyle}>
      <AuthInput
        type="email"
        placeholder="이메일을 입력해주세요"
        errorMessage={errors?.email?.message}
        {...emailRegister}
      />
      <AuthInput
        type="password"
        placeholder="비밀번호를 입력해주세요"
        errorMessage={errors?.password?.message}
        {...passwordRegister}
      />
      <Button
        width="80px"
        height="30px"
        type="submit"
        css={{ alignSelf: 'center' }}
      >
        로그인
      </Button>
    </form>
  );
};
const formStyle = css`
  width: 50%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #ffffea;
  box-shadow: #ccccb2 0px 6px 12px -2px, rgba(0, 0, 0, 0.1) 0px 3px 7px -3px;
`;

export default LoginForm;
