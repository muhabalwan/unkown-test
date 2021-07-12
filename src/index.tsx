import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "antd/dist/antd.css";

import styled from "styled-components";

const StyledApp = styled(App)`
  .root {
    height: 100%
  }
`;


ReactDOM.render(
  <React.StrictMode>
    <StyledApp />
  </React.StrictMode>,
  document.getElementById("root")
);
