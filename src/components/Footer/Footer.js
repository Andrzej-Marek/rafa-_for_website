import React from "react"
import styled from "styled-components"
import media from "src/config/media"
import { Container, Grid } from "@material-ui/core"
import phone from "src/assets/images/phone.svg"
import mail from "src/assets/images/mail.svg"
import localization from "src/assets/images/localization.svg"
const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
`

const ContentWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
`
const ContactInfoWrapper = styled.div`
  div {
    display: flex;
    align-items: center;
    padding: 10px 0;

    p {
      margin: 0;
      padding-left: 20px;

      span {
        display: block;
      }
    }

    img {
      height: 50px;
      width: 50px;
    }
  }

  ${media.tablet`
  padding-left: 40px;
  `}
`

const MapWrapper = styled.div`
  display: flex;
  justify-content: center;
`
const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <ContentWrapper>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} spacing={3}>
              <h3>Kontakt</h3>
              <ContactInfoWrapper>
                <div>
                  <img src={phone} alt="" />
                  <p>+48 697 261 062</p>
                </div>
                <div>
                  <img src={mail} alt="" />
                  <p>diseno.5@wp.pl</p>
                </div>
                <div>
                  <img src={localization} alt="" />
                  <p>
                    ul. Wyzwolenia 184 <span>43-265 Kryry</span>
                  </p>
                </div>
              </ContactInfoWrapper>
            </Grid>
            <Grid item xs={12} sm={6} spacing={3}>
              <h3>Mapa</h3>
              <MapWrapper>
                <iframe
                  width="300"
                  height="200"
                  src="https://maps.google.com/maps?q=Kryry&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                />
              </MapWrapper>
            </Grid>
          </Grid>
        </ContentWrapper>
      </Container>
    </Wrapper>
  )
}

export default Footer
