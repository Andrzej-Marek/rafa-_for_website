import React from "react"
import media from "src/config/media.js"
import Layout from "src/components/layout"
import styled from "styled-components"
import Header from "src/components/header"
import { Container } from "@material-ui/core"
import SEO from "src/components/seo"

const ContentWrapper = styled.div`
  padding: 20px 0;
  p {
    padding: 20px 30px;
    line-height: 22px;
    span {
      font-style: italic;
      font-weight: bold;
    }
  }

  .downInfo {
    display: flex;
    flex-direction: column;
    p {
      max-width: 400px;
      span {
        display: block;
      }
    }
  }

  ${media.tablet`
  .downInfo {
    flex-direction: row;
  }
  `}
`
const Onas = () => {
  return (
    <Layout>
      <SEO title="O nas" />
      <Header />
      <Container>
        <ContentWrapper>
          <h2>O nas</h2>
          <p>
            Młoda dynamiczna która powstała od 2019 roku wykonuje projekty
            budowlane i wykonawcze budynków mieszkalnych, usługowych i innych,
            oraz projekty infrastruktury związanej z budynkami na działkach
            budowlanych.
          </p>
          <p>
            Projektujemy budynki nowe, przebudowy i rozbudowy budynków
            istniejących, jak również opracowujemy inwentaryzacje i oceny
            techniczne stanu istniejącego budynków.
          </p>
          <p>
            Przy opracowywaniu projektów naszą doktryną jest Art. 4. Prawa
            Budowlanego{" "}
            <span>
              {" "}
              "Każdy ma prawo zabudowy nieruchomości gruntowej, jeżeli wykaże
              prawo do dysponowania nieruchomością na cele budowlane, pod
              warunkiem zgodności zamierzenia budowlanego z przepisami".
            </span>
          </p>
          <p>
            Integralność rozwiązań architektonicznych i konstrukcyjnych z
            równoczesnym uwzględnieniem optymalizacji sposobu wykonania
            (materiały, technologia i koszty budowy).
          </p>
          <p>
            Załatwiamy wszystkie formalności związane z uzyskaniem pozwolenia na
            budowę oraz formalności związane z zakończeniem budowy i oddaniem
            budynku do użytkowania.
          </p>
          <div className="downInfo">
            <p>
              <span> Z wyrazami szacunku: </span>
              mgr inż. Rafał Forreiter - uprawnienia w specjalności
              konstrukcyjno-budowlanej do projektowania i kierowania robotami
              budowlanymi bez ograniczeń nr SLK/8355/PWBKb/19, członek ŚOIIB w
              Katowicach.
            </p>
            <p>
              <span> Dane do faktury:</span>
              Diseno.5 Rafał Forreiter <br />
              ul. Wyzwolenia 184 <br />
              43-265 Kryry <br />
              NIP:638-169-30-31
            </p>
          </div>
        </ContentWrapper>
      </Container>
    </Layout>
  )
}

export default Onas
