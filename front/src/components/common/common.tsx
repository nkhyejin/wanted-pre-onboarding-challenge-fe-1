/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

interface WrapperProps {
  children: React.ReactNode;
}
export const Wrapper = ({ children }: WrapperProps) => {
  return <div css={wrapperStyle}>{children}</div>;
};

const wrapperStyle = css`
  background-color: white;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 60px; ;
`;
