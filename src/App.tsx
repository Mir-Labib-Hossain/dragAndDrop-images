import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Gallery from "./components/Gallery";
import { ThemeToggler } from "./styles/common.styled";
import GlobalStyle from "./styles/global.styled";
import { ITheme } from "./types/theme";
function App() {
  const light: ITheme = {
    primary: "#53E762",
    primaryBg: "#FFF",
    secondaryBg: "#EDF1F7",
    addBtnBg: "#FAFAFA",
    primaryText: "#000",
    error: "#EA3A30", // ScreenShot's 'Delete' text color
  };

  const dark: ITheme = {
    primary: "#53E762",
    primaryBg: "#161A1D",
    secondaryBg: "#22272B",
    addBtnBg: "#2C333A",
    primaryText: "#FFF",
    error: "#EA3A30", // ScreenShot's 'Delete' text color
  };
  const [isLight, setIsLight] = useState(true);

  return (
    <ThemeProvider theme={isLight ? light : dark}>
      <GlobalStyle />
      <ThemeToggler onClick={() => setIsLight((prev) => !prev)}>{isLight ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}</ThemeToggler>
      <Gallery />
    </ThemeProvider>
  );
}

export default App;
