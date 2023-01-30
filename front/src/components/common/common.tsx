/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const Wrapper = ({ children }: Props) => {
  return <div css={wrapperStyle}>{children}</div>;
};

// export const RowBox = ({ children }: Props) => {
//   return <div css={rowStyle}>{children}</div>;
// };

interface RowProps {
  backgroundColor?: string;
}
export const RowBox = styled.div<RowProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.backgroundColor && props.backgroundColor};
`;

// export function ErrorMessage({ children }: Props) {
//   return <p css={{ color: 'red', fontWeight: 'bold' }}>{children}</p>;
// }

// // `fontSize: '1.5rem'` is passed down to the ErrorMessage component via the
// // className prop, so ErrorMessage must accept a className prop for this to
// // work!
// export function LargeErrorMessage({ children }: Props) {
//   return <ErrorMessage css={{ fontSize: '50px' }}>{children}</ErrorMessage>;
// }

// export const ColBox = ({ children }: Props) => {
//   return <div css={colStyle}>{children}</div>;
// };
export const ColBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

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
