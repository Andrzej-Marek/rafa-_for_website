import React from "react"
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
      font-weight: bold;
      display: block;
      text-align: center;
      margin-bottom: 20px;
      font-size: 22px;
    }
  }
`
const PolitykaPrywatnosci = ({ location }) => {
  return (
    <Layout>
      <SEO title="Polityka prywatności" />
      <Header />
      <Container>
        <ContentWrapper>
          <h2>Polityka prywatności</h2>
          <p>
            <span> INFORMACJA O PRZETWARZANIU DANYCH:</span>
            Zgodnie z art. 13 ust. 1 i ust. 2 rozporządzenia Parlamentu
            Europejskiego i Rady (UE) 2016/679 z 27 kwietnia 2016 r. w sprawie
            ochrony osób fizycznych w związku z przetwarzaniem danych osobowych
            i w sprawie swobodnego przepływu takich danych oraz uchylenia
            dyrektywy 95/46/WE (RODO), informujemy, iż: Administratorem
            Pani/Pana danych osobowych jest: Diseno.5 Rafał Forreiter, ul.
            Wyzwolenia 184, 43-265 Kryry
          </p>
          <p>
            Przetwarzanie Pani/Pana danych osobowych będzie się odbywać na
            podstawie art. 6 ust. 1 lit. b RODO. Pani/Pana dane osobowe będą
            przechowywane do momentu upływu wszelkich roszczeń z tytułu
            wykonania umowy. Posiada Pani/Pan prawo dostępu do treści swoich
            danych osobowych, prawo do ich sprostowania, usunięcia, jak również
            prawo do ograniczenia ich przetwarzania, prawo do cofnięcia zgody,
            prawo do przenoszenia danych, prawo do wniesienia sprzeciwu wobec
            przetwarzania Pani/Pana danych osobowych. Przysługuje Pani/Panu
            prawo wniesienia skargi do organu nadzorczego, jeśli Pani/Pana
            zdaniem, przetwarzanie danych osobowych Pani/Pana – narusza przepisy
            unijnego rozporządzenia RODO. Podanie przez Panią/Pana danych
            osobowych jest wymogiem ustawowym / umownym / warunkiem wykonania
            zlecenia. Brak podania danych osobowych będzie skutkowało
            niewykonaniem zlecenia. Informujemy, iż Pani/Pana dane osobowe nie
            będą przekazywane żadnym odbiorcom danych. Pani/Pana dane osobowe
            nie będą przetwarzane w sposób zautomatyzowany i nie będą
            profilowane.
          </p>
        </ContentWrapper>
      </Container>
    </Layout>
  )
}

export default PolitykaPrywatnosci
