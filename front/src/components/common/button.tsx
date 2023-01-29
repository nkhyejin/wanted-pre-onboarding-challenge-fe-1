/** @jsxImportSource @emotion/react */
import React, { ButtonHTMLAttributes } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface ButtonProps {
  width?: string;
  height?: string;
  textColor?: string;
}

export const Button = styled.button<ButtonProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export const NoneStyleButton = styled.button<ButtonProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: ${(props) => props.textColor};

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
