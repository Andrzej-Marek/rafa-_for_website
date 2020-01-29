import React, { useState } from "react"
import styled from "styled-components"
import media from "src/config/media"
import { Link } from "gatsby"
import MenuIcon from "@material-ui/icons/Menu"
import logo from "src/assets/images/logo.png"
import { useSpring, animated, interpolate } from "react-spring"
import { Container } from "@material-ui/core"
import phoneIcon from "src/assets/images/icons/phone.svg"

const AppBar = styled.div`
  background: ${({ theme }) => theme.color.white};
`
const ContentWrapper = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  img {
    height: 60px;
    width: auto;
    margin: 0;
    z-index: 999;
  }

  .MuiSvgIcon-root {
    height: 40px;
    width: auto;
  }
  h2 {
    margin: 0;
  }

  ${media.laptop`
  .MuiSvgIcon-root {
    display: none;
  }
`}
`

const NavItemsWrapper = styled(animated.div)`
  background: ${({ theme }) => theme.color.white};
  overflow: hidden;

  ${media.laptop`
  display: none;
  `}
`

const CustomUl = styled.ul`
  list-style: none;
  height: 100%;
  li {
    padding: 5px 0;
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.color.black};
      display: flex;
      align-items: center;
      :hover {
        text-decoration: underline;
      }

      img {
        height: 30px;
        width: auto;
        margin-right: 10px;
      }
    }
  }

  ${media.laptop`
    display: flex;
    align-items: center;
    li {
      margin: 0 10px;
      a {
      img {
        height: 40px
      }
      }
    }
  `}
`

const DesktopNav = styled.div`
  display: none;

  ${media.laptop`
  display: block;
  `}
`

const NavBar = () => {
  const [navBarShow, toggleNavBarShow] = useState(false)

  const { x } = useSpring({
    x: navBarShow ? 180 : 0,
  })
  return (
    <>
      <AppBar>
        <Container>
          <ContentWrapper>
            <img className="logo" src={logo} alt="logo" />
            <DesktopNav>
              <CustomUl>
                <li>
                  <Link to="/">Strona główna</Link>
                </li>
                <li>
                  <Link to="/o-nas">O nas</Link>
                </li>
                <li>
                  <Link to="/oferta">Oferta</Link>
                </li>
                <li>
                  <Link to="/polityka-prywatnosci">Polityka prywatności</Link>
                </li>
                <li className="withIcon">
                  <a href="tel:+48697261062">
                    <img src={phoneIcon} alt="Tel:" /> +48 697 261 062
                  </a>
                </li>
              </CustomUl>
            </DesktopNav>

            <MenuIcon onClick={() => toggleNavBarShow(!navBarShow)} />
          </ContentWrapper>
        </Container>
      </AppBar>
      <NavItemsWrapper style={{ height: x.interpolate(x => x) }}>
        <CustomUl>
          <li>
            <Link to="/">Strona główna</Link>
          </li>
          <li>
            <Link to="/o-nas">O nas</Link>
          </li>
          <li>
            <Link to="/oferta">Oferta</Link>
          </li>
          <li>
            <Link to="/polityka-prywatnosci">Polityka prywatności</Link>
          </li>
          <li className="withIcon">
            <a href="tel:+48697261062">
              <img src={phoneIcon} alt="Tel:" /> +48 697 261 062
            </a>
          </li>
        </CustomUl>
      </NavItemsWrapper>
    </>
  )
}

export default NavBar
