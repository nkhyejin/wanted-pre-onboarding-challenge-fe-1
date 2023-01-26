/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import AuthInput from '../components/auth/Input';
import LoginForm from '../components/auth/loginForm';
import { Button } from '../components/common/button';
import { Wrapper } from '../components/common/common';

const Login = () => {
  return (
    <Wrapper>
      <LoginForm />
    </Wrapper>
  );
};

export default Login;
