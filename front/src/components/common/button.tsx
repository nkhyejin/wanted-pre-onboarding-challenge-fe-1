/** @jsxImportSource @emotion/react */
import React, { ButtonHTMLAttributes } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

type Varient = 'default' | 'danger' | 'normal';

interface ButtonProps {
  width?: string;
  height?: string;
  varient?: Varient;
}

export const Button = styled.button<ButtonProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

type colorType = {
  [key in Varient]: string;
};
const colors: colorType = {
  default: 'rgb(36, 41, 47)',
  danger: 'rgb(207, 34, 46)',
  normal: 'rgb(9, 105, 218)',
};

export const NoneStyleButton = styled.button<ButtonProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: ${(props) =>
    props.varient ? colors[props?.varient] : colors['default']};

  border: none;
  padding: 5px;
  box-shadow: none;
  border-radius: 0px;
  background-color: #ffffea;

  &:hover {
    background-color: #ffffea;
    opacity: 0.7;
    cursor: pointer;
  }
`;
