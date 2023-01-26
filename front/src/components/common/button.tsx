/** @jsxImportSource @emotion/react */
import React, { ButtonHTMLAttributes } from 'react';
import { css } from '@emotion/react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  width?: string;
  height?: string;
}

export const Button = ({ children, width, height, ...props }: ButtonProps) => {
  return (
    <button css={{ width, height }} {...props}>
      {children}
    </button>
  );
};
