import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled, { ThemeProvider } from "styled-components"
import Volvo from "./components/Volvo/Volvo";
import { lightTheme, darkTheme, GlobalStyles } from './components/theme';
import Header from "./components/Header/Header";
import { Theme } from "./services/context/Theme"
import { Language } from "./services/context/Language";

const StyleApp = styled.div`
  color: ${(props) => props.theme.text}
`

function App() {
  const [theme, setTheme] = useState("dark")
  return (
    <Theme>
      <Language>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <GlobalStyles />
          <StyleApp>
            <Header setTheme= {setTheme}/>
            <Volvo />
          </StyleApp>
        </ThemeProvider>
      </Language>
    </Theme>
  )
}

export default App;
