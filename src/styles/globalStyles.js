import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: Oswald, serif;
  }
  
  svg {
    width: 100%;
    height: 100%;
  }
`
