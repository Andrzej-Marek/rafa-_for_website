import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  padding: 50px 0;

  :before {
    content: "";
    position: absolute;
    top: 0px;
    left: -200vw;
    height: 100%;
    width: 400vw;
    z-index: 0;
    overflow: hidden;
    background: ${({ theme }) => theme.color.primary};
  }
`

const ContentWrapper = styled.div`
  z-index: 1;
  position: relative;
`

const ContentLeft = styled.div`
  display: flex;
  justify-content: center;
`
const ContentRight = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.color.white};

  p {
    font-size: 14px;
    font-weight: 300;
    max-width: 450px;
    margin: 0 auto;
  }
`

const MoreAboutUs = () => {
  return (
    <StaticQuery
      query={query}
      render={data => (
        <Wrapper>
          <ContentWrapper>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <ContentLeft>
                  <Img fixed={data.file.childImageSharp.fixed} alt="" />
                </ContentLeft>
              </Grid>
              <Grid item xs={12} sm={6}>
                <ContentRight>
                  <h2>Więcej o nas</h2>
                  <p>
                    Firma współpracuje ze stałą grupą projektantów, geodetami
                    oraz rzeczoznawcami. Projekty powstają w ścisłej współpracy
                    z inwestorem.
                  </p>
                  <p>
                    Wieloletnie doświadczenie gwarantuje wykonanie projektów na
                    wysokim poziomie technicznym, spełniających wszystkie
                    wymagania i oczekiwania naszych Klientów.
                  </p>
                </ContentRight>
              </Grid>
            </Grid>
          </ContentWrapper>
        </Wrapper>
      )}
    />
  )
}

export const query = graphql`
  query {
    file(relativePath: { regex: "/aboutUsSectionImage/" }) {
      childImageSharp {
        fixed(width: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default MoreAboutUs
