/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

interface inputProps {
  type: string;
  name: string;
  placeholder: string;
  errorMessage?: string;
}

export const AuthInput = React.forwardRef<HTMLInputElement, inputProps>(
  ({ type, name, placeholder, errorMessage, ...etc }, ref) => {
    return (
      <div css={inputWrapStyle}>
        <label htmlFor={name} css={labelStyle}>
          {name.toUpperCase()}
        </label>
        <input
          css={inputStyle}
          id={name}
          type={type}
          name={name}
          placeholder={placeholder}
          ref={ref}
          {...etc}
        />
        {errorMessage && <ErrorMessage content={errorMessage}></ErrorMessage>}
      </div>
    );
  },
);
const ErrorMessage = ({ content }: { content: string | undefined }) => {
  return <p css={messageStyle}>{content}</p>;
};

const labelStyle = css`
  font-size: 14px;
`;

const inputWrapStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  margin-bottom: 20px;
`;

const inputStyle = css`
  border: none;
  width: 300px;
  height: 40px;
  border-radius: 10px;
  background-color: white;
  padding-left: 10px;
`;
const messageStyle = css`
  font-size: 8px;
  color: brown;
  align-self: flex-end;
`;

export default AuthInput;
