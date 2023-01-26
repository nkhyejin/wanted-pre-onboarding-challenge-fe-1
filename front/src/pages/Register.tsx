/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import LoginForm from '../components/auth/loginForm';
import RegisterForm from '../components/auth/registerForm';
import { Wrapper } from '../components/common/common';

const Register = () => {
  return (
    <Wrapper>
      <RegisterForm />
    </Wrapper>
  );
};

export default Register;
