import React from "react"
import styled from "styled-components"
import media from "src/config/media"
import Layout from "src/components/layout"
import SEO from "src/components/seo"
import AboutUs from "src/components/HomePage/AboutUs"
import MoreAboutUs from "src/components/HomePage/MoreAboutUs"
import OpenHours from "src/components/HomePage/OpenHours"
import ContactForm from "src/components/HomePage/ContactForm"
import Header from "src/components/header"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header big />
    <Container>
      <AboutUs />
      <MoreAboutUs />
    </Container>
    <OpenHours />
    <Container>
      <ContactForm />
    </Container>
  </Layout>
)

const Container = styled.div`
  max-width: 996px;
  padding: 0 15px;
  margin: 0 auto;

  ${media.tablet`
  padding: 0 24px;
  `}
  ${media.laptop`
  padding: 0 32px;
  `}
`
export default IndexPage
