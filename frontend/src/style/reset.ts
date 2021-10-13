import { css } from "@emotion/react";
import { colors, fontFamily } from "./theme";

export const resetCSS = () => css`
  html {
    height: 100%;
    box-sizing: border-box;
    font-size: 100%;
  }

  body {
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: ${colors.grey50};
    color: ${colors.grey400};
    font-family: ${fontFamily};
    font-size: 1rem;
    font-weight: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
    vertical-align: top;
  }

  p {
    margin-top: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  button {
    line-height: 1;
    border: 0;
    -webkit-appearance: none;
    font-size: 1rem;
    font-weight: normal;
  }

  textarea,
  input,
  button,
  select {
    font-family: inherit;
  }

  ul,
  li {
    margin: 0;
  }

  b {
    font-weight: bold;
  }

  button {
    -webkit-appearance: none;
  }

  fieldset {
    border: none;
    margin: 0;
    padding: 0;
  }
`;
