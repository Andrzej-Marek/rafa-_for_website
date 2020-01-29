import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "src/components/layout"
import styled from "styled-components"
import Header from "src/components/header"
import { Container } from "@material-ui/core"
import Img from "gatsby-image"
import SEO from "src/components/seo"

const ContentWrapper = styled.div`
  p {
    padding: 5px 0;
    line-height: 22px;
  }
  padding: 20px 0;
`

const ImageSliderWrapper = styled.div`
  .gatsby-image-wrapper {
    margin: 0 auto;
    max-width: 600px;
    height: auto;
  }
`

const LittleImagesLegend = styled.div`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  padding: 10px 0;
  div {
    width: 100px !important;
    margin: 5px 3px !important;
    cursor: pointer;
  }
`

const Oferta = () => {
  const [index, setIndex] = useState(0)
  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(
          sort: { fields: name, order: DESC }
          filter: { relativeDirectory: { eq: "slides" } }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    `
  )

  const length = allFile.edges.length - 1

  const selectImage = id => {
    setIndex(id)
  }

  // const showImagesLegend = () => {
  //   return allFile.edges.map((el, i) => (
  //     <div onClick={() => selectImage(i)} key={el.node.id}>
  //       <Img
  //         fluid={el.node.childImageSharp.fluid}
  //         key={el.node.id}
  //         alt={el.node.name.replace(/-/g, " ").substring(2)}
  //       />
  //     </div>
  //   ))
  // }

  // const { node } = allFile.edges[index]
  return (
    <Layout>
      <SEO title="Oferta" />
      <Header />
      <Container>
        <ContentWrapper>
          <h2>Oferta</h2>

          <p>
            Projekty architektoniczno - budowlane wszystkich kategorii budynków
          </p>
          <p>
            Pomoc w postępowaniach prowadzonych przed organami administracji
            państwowej
          </p>
          <p>Kompleksowy nadzór budowlany, kierowanie robotami budowlanymi</p>
          <p>Obsługa prawna przy współpracy z prawnikiem </p>
          <p>Obsługa geodezyjna przy współpracy z geodetami </p>
          <p>
            Przeprowadzanie okresowych kontroli stanu technicznego budynków
            zgodnie z ustawą Prawo budowlane{" "}
          </p>
          <p>Uzgodnienia branżowe z rzeczoznawcami </p>
          <p>Prowadzenie książki obiektu budowlanego </p>
          <p>Ekspertyzy techniczne </p>

          {/* <ImageSliderWrapper>
            <Img
              fluid={node.childImageSharp.fluid}
              key={node.id}
              alt={node.name.replace(/-/g, " ").substring(2)}
            />
            <LittleImagesLegend>{showImagesLegend()}</LittleImagesLegend>
          </ImageSliderWrapper> */}
        </ContentWrapper>
      </Container>
    </Layout>
  )
}

export default Oferta
