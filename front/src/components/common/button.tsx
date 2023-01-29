/** @jsxImportSource @emotion/react */
import React, { ButtonHTMLAttributes } from 'react';
import { css } from '@emotion/react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  width?: string;
  height?: string;
  textColor?: string;
}

export const Button = ({ children, width, height, ...props }: ButtonProps) => {
  return (
    <button css={{ width, height }} {...props}>
      {children}
    </button>
  );
};

export const NoneStyleButton = ({
  children,
  width,
  height,
  textColor,
  ...props
}: ButtonProps) => {
  return (
    <button css={{ width, height, textColor, ...noneStyle }} {...props}>
      {children}
    </button>
  );
};

const noneStyle = css`
  border: none;
  padding: 5px;
  box-shadow: none;
  border-radius: 0px;
  background-color: white;

  font-size: 14px;

  &:hover {
    background-color: white;
    opacity: 0.5;
    cursor: pointer;
  }
`;
