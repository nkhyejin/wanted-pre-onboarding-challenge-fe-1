/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const Navbar = () => {
  const menus = ['todo', 'mypage'];

  return (
    <ul css={ulStyle}>
      {menus.map((menu) => (
        <li key={menu}>{menu}</li>
      ))}
    </ul>
  );
};
export default Navbar;

const ulStyle = css`
  display: flex;
  gap: 30px;
`;
