import { Global, css } from '@emotion/react';

const style = css`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    box-sizing: border-box;
    height: 100vh;
    background-color: black;
  }
  ul {
    list-style: none;
    cursor: pointer;
  }
  a {
    text-decoration: none;
    cursor: pointer;
  }
  input {
    border: none;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    /* &:invalid {
      box-shadow: 0 0 10px red;
    } */
    &:focus {
      outline: none;
      border-color: #bcbda9;
      box-shadow: 0 0 10px #bcbda9;
      /* border-color: bcbda9; */
    }
  }
  button {
    border: none;
    padding: 5px;
    border-radius: 5px;
    background-color: white;
    box-shadow: 2px 2px 2px #bcbda9;

    font-size: 14px;
    font-weight: 600;

    &:hover {
      background-color: #efefdb;
      cursor: pointer;
    }
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
