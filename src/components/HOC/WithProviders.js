import React from "react";
import { ThemeProvider } from "styled-components";

import theme from '../../assets/styles/theme'

const Providers = props => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default Providers;
