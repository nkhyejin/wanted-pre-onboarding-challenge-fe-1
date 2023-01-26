/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '../common/button';
import AuthInput from './Input';

interface FormValue {
  id: string;
  password: string;
  confirmPassword?: string;
}

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
    getValues,
  } = useForm<FormValue>();

  const Regex = {
    email: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
    // password: ,
  };

  const emailRegister = register('id', {
    required: { value: true, message: '이메일을 입력해주세요.' },
    pattern: { value: Regex.email, message: '이메일 형식을 입력해주세요.' },
  });
  const passwordRegister = register('password', {
    required: true,
    minLength: { value: 8, message: '비밀번호 8자리 이상 입력해주세요.' },
  });

  const passwordConfirmRegiser = register('confirmPassword', {
    required: true,
    minLength: { value: 8, message: '비밀번호 8자리 이상 입력해주세요.' },
    validate: {
      matchesPassword: (value) =>
        value === getValues('password') || '비밀번호가 일치하지 않습니다.',
    },
  });

  const onSubmit: SubmitHandler<FormValue> = async (data) => {
    delete data.confirmPassword;
    console.log(data);

    //await api 호출

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} css={formStyle}>
      <AuthInput
        type="email"
        placeholder="이메일을 입력해주세요"
        errorMessage={errors?.id?.message}
        {...emailRegister}
      />
      <AuthInput
        type="password"
        placeholder="비밀번호를 입력해주세요"
        errorMessage={errors?.password?.message}
        {...passwordRegister}
      />
      <AuthInput
        type="password"
        placeholder="비밀번호를 확인해주세요"
        errorMessage={errors?.confirmPassword?.message}
        {...passwordConfirmRegiser}
      />
      <Button
        width="100px"
        height="30px"
        type="submit"
        css={{ alignSelf: 'center' }}
      >
        회원가입
      </Button>
    </form>
  );
};
const formStyle = css`
  width: 50%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #ffffea;
  box-shadow: #ccccb2 0px 6px 12px -2px, rgba(0, 0, 0, 0.1) 0px 3px 7px -3px;
`;

export default RegisterForm;
