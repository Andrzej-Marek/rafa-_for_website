import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import media from "src/config/media"

const InfoTile = ({ img, text }) => {
  return (
    <Wrapper>
      <img src={img} alt="" />
      <p>{text}</p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 20px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10px;
  height: 120px;
  width: 230px;

  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.29);

  img {
    height: 50px;
    width: auto;
    margin-bottom: 20px;
  }
  p {
    text-align: center;
    font-size: 14px;
    min-height: 60px;
  }

  ${media.tablet`
  height: 150px;
  width: 250px;
  `}
`

InfoTile.propTypes = {
  img: PropTypes.string,
  text: PropTypes.string,
}

InfoTile.defaultProps = {
  text: "Please insert ...text... prop",
}

export default InfoTile
