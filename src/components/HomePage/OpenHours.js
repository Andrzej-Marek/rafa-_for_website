import React from "react"
import styled from "styled-components"
import media from "src/config/media"
import city from "src/assets/images/city.jpg"

const Wrapper = styled.div`
  background: url(${city}) no-repeat center center;
  background-size: cover;
  height: 300px;

  ${media.laptop`
  background-attachment: fixed;
  height: 450px;

  `}
`

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  color: ${({ theme }) => theme.color.white};

  h2 {
    margin-bottom: 10px;
  }
  p {
    padding: 5px 0;
    span {
      font-weight: 700;
    }
  }

  ${media.tablet`
  p {
      font-size: 18px;
  }
  `}
`
const OpenHours = () => {
  return (
    <Wrapper>
      <TextWrapper>
        <h2>GODZINY OTWARCIA:</h2>
        <p>
          {" "}
          <span>Poniedziałek - Piątek </span>
        </p>
        <p>7:30 - 15:30</p>

        <p>
          <span> Sobota</span>
        </p>
        <p>7:30 - 14:00</p>
      </TextWrapper>
    </Wrapper>
  )
}

export default OpenHours
