import React from "react"
import styled from "styled-components"
import InfoHeadText from "src/components/custom/InfoHeadText"
import InfoTile from "src/components/custom/InfoTile"
import handIcon from "src/assets/images/icons/hand.svg"
import computerIcon from "src/assets/images/icons/computer.svg"
import documentIcon from "src/assets/images/icons/document.svg"
import pencilIcon from "src/assets/images/icons/pencil.svg"
import toolsIcon from "src/assets/images/icons/tools.svg"
import manIcon from "src/assets/images/icons/man.svg"

const Wrapper = styled.div`
  padding: 20px 0;
`
const InfoTilesWrapper = styled.div`
  padding: 20px 0;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

const AboutUs = () => {
  return (
    <Wrapper>
      <InfoHeadText
        title="Czym się zajmujemy"
        info="Firma DISENO.5 Rafał Forreiter świadczy usługi w zakresie nadzoru budowlanego, projektowania budowlanego oraz projektowania wykonawczego."
      />

      <InfoTilesWrapper>
        <InfoTile img={documentIcon} text="Projekty budowlane, wykonawcze." />
        <InfoTile
          img={manIcon}
          text="Nadzór budowlany, kierowanie robotami budowlanymi."
        />
        <InfoTile
          img={handIcon}
          text="Projekty przy budynkach wpisanych do rejestru zabytków."
        />
        <InfoTile
          img={toolsIcon}
          text="Zgłoszenie budowy, remontów, rozbiórek, oczyszczalnie ścieków."
        />
        <InfoTile
          img={computerIcon}
          text="Analiza możliwości zabudowy działek, geodezja."
        />

        <InfoTile
          img={pencilIcon}
          text="TEXT MISSING ADD ONE MORE TEXT TO TILE"
        />
      </InfoTilesWrapper>
    </Wrapper>
  )
}

export default AboutUs
