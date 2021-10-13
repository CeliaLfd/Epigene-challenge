import { Global } from "@emotion/react";
import React from "react";
import { resetCSS } from "./reset";

export const GlobalStyle = () => <Global styles={resetCSS} />;
