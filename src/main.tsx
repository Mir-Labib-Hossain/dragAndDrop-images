import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App.tsx";
import GlobalStyle from "./styles/global.styled.tsx";
import { ITheme } from "./types/theme.ts";

const theme = {
  primaryBg: "#FFF",
  secondaryBg: "#EDF1F7",
  primaryText: "#000",
  error: "#EA3A30", // ScreenShots delete text color
} as ITheme;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
