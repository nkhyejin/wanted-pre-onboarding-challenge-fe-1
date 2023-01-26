/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Button } from '../common/button';

const AuthArea = () => {
  return (
    <div css={authWrapStyle}>
      <Button
        width="80px"
        height="30px"
        css={css`
          margin-right: 10px;
        `}
      >
        로그인
      </Button>
      <Button width="80px" height="30px">
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
