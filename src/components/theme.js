import { createGlobalStyle } from "styled-components"

export const lightTheme = {
    body: '#fff',
    text: '#363537',
    toggleBorder: '#FFF',
    gradient: 'linear-gradient(#39598A, #79D7ED)'
}

export const darkTheme = {
    body: '#363537',
    text: '#FAFAFA',
    toggleBorder: '#6B8096',
    gradient: 'linear-gradient(#091236, #1E215D)',
}

export const GlobalStyles = createGlobalStyle`

*,
*::after,
*::before {
  box-sizing: border-box;
}

body {
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  transition: all 0.25s linear;
}

`