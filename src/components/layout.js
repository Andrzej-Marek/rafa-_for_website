import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import { ThemeProvider } from "styled-components"
import { theme } from "src/config/theme"
import { GlobalStyle } from "src/assets/css/GlobalStyle"

import Footer from "./Footer/Footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <main>{children}</main>
        <Footer />
      </Wrapper>
    </ThemeProvider>
  )
}

const Wrapper = styled.div`
  main {
    overflow-x: hidden;
  }
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
