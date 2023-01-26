/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import AuthArea from './authArea';
import Navbar from './navbar';

const Header = () => {
  return (
    <header css={headerStyle}>
      <a css={logoStyle}>wanted</a>
      <Navbar />
      <AuthArea />
    </header>
  );
};

const logoStyle = css`
  margin: 0 20px;
  padding: 0 5px;
  font-size: 30px;
  font-weight: 800;
`;

const headerStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  position: fixed;
  color: white;
  background-color: #ccccb2;
`;

export default Header;
