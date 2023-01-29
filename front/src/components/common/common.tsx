/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

interface Props {
  children: React.ReactNode;
}
export const Wrapper = ({ children }: Props) => {
  return <div css={wrapperStyle}>{children}</div>;
};

export const RowBox = ({ children }: Props) => {
  return <div css={rowStyle}>{children}</div>;
};

export const ColBox = ({ children }: Props) => {
  return <div css={colStyle}>{children}</div>;
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

const rowStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const colStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
