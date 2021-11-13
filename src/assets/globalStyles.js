import {createGlobalStyle} from 'styled-components'



export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *::selection {
    background: #ecd3a540;
    
  }

  body {
    font-size: 1.181vw;
    overflow-x: hidden;
    font-family: Roboto, sans-serif;

  }

  .padding-9vw {
    padding: 9.722vw;
  }




`
