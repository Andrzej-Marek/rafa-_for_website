import { createGlobalStyle } from "styled-components"
import media from "src/config/media"

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700|Roboto:300,400,500,700&display=swap&subset=cyrillic-ext');
* {
  font-family: ${({ theme }) => theme.font.mont}, sans-serif !important;
  p {
    margin: 0;
  }

}
body {  
  margin: 0;
  overflow-x: hidden;
  background: ${({ theme }) => theme.color.background};
  h2 {
    font-size: 27px;
    text-align: center;
  }
  h3 {
    font-size: 23px;
    text-align: center;
  }

  h5 {
    margin: 0;
  }

  ${media.tablet`
  h2 {
    font-size: 37px;
  }
  h3 {
    font-size: 28px;
  }

  `}
  ${media.laptop`
  h2 {
    font-size: 45px;
  }
  h3 {
    font-size: 36px;
  }
  `}
}

`
