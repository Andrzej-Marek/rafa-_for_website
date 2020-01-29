import React from "react"
import styled from "styled-components"
import media from "src/config/media"
import NavBar from "./custom/NavBar"
import PropTypes from "prop-types"
import headImage from "src/assets/images/headImage.jpg"

const Header = ({ siteTitle, big }) => {
  return (
    <HeaderWrapper big={big}>
      <NavBar />
      <TextWrapper>{/* <h1>PROJEKTY BUDOWLANE</h1> */}</TextWrapper>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  position: relative;
  background: url(${headImage}) no-repeat center center;
  background-size: cover;
  height: ${({ big }) => (big ? "50vh" : "300px")};

  ${media.tablet`
  height: ${({ big }) => (big ? "70vh" : "300px")};
  `}
`
const TextWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    text-align: center;
    color: ${({ theme }) => theme.color.white};
    font-size: 6vw;
    margin: 0;
    width: 100%;
  }

  ${media.phone`
  font-size: 6vw;
  `}
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
