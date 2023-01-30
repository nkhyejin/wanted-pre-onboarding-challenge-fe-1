/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const menus = ['todo', 'mypage'];
  const navigation = useNavigate();
  return (
    <ul css={ulStyle}>
      {menus.map((menu) => (
        <li key={menu} onClick={() => navigation(`/${menu}`)}>
          {menu}
        </li>
      ))}
    </ul>
  );
};
export default Navbar;

const ulStyle = css`
  display: flex;
  gap: 30px;
`;
