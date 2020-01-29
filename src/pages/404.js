import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import styled from "styled-components"

const ContentWrapper = styled.div`
  padding: 50px 0;
  text-align: center;
`
const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <ContentWrapper>
      <h1>Przepraszamy, ta strona nie instnieje</h1>
      <p>
        <Link to="/">Wróć do strony głównej</Link>
      </p>
    </ContentWrapper>
  </Layout>
)

export default NotFoundPage
