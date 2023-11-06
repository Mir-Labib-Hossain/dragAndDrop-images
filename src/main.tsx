import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App.tsx";
import GlobalStyle from "./styles/global.styled.tsx";
import { ITheme } from "./types/theme.ts";

const theme:ITheme = {
  primary: "#53E762",
  primaryBg: "#FFF",
  secondaryBg: "#EDF1F7",
  addBtnBg:"#FAFAFA",
  primaryText: "#000",
  error: "#EA3A30", // ScreenShot's 'Delete' text color
} ;

const x= {
  
  
    primary: "#53E762",
    primaryBg: "#161A1D",
    secondaryBg: "#22272B",
    addBtnBg:"#2C333A",
    primaryText: "#FFF",
    error: "#EA3A30", // ScreenShot's 'Delete' text color
  
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={x}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
