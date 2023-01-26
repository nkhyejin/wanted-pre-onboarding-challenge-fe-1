/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../common/button';

const AuthArea = () => {
  const navigate = useNavigate();

  return (
    <div css={authWrapStyle}>
      <Button
        onClick={() => {
          navigate(`/auth/login`);
        }}
        width="80px"
        height="30px"
        css={css`
          margin-right: 10px;
        `}
      >
        로그인
      </Button>
      <Button
        width="80px"
        height="30px"
        onClick={() => {
          navigate(`/auth/register`);
        }}
      >
        회원가입
      </Button>
    </div>
  );
};

const authWrapStyle = css`
  padding: 0 20px;
  /* &:first-child {
    background-color: white;
  } */
`;

export default AuthArea;
