import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import media from "src/config/media"

const Wrapper = styled.div`
  padding: 10px 0;
  h2 {
    margin: 0;
  }
`
const SmallText = styled.p`
  padding-top: 5px;
  color: ${({ theme }) => theme.color.infoText};
  font-size: 10px;
  line-height: 10px;
  text-align: center;
  max-width: 400px;
  margin: 0 auto;

  ${media.tablet`
  font-size: 12px;
  line-height: 14px;
  `}
`

const InfoHeadText = ({ title, info }) => {
  return (
    <Wrapper>
      <h2>{title}</h2>
      <SmallText>{info}</SmallText>
    </Wrapper>
  )
}

InfoHeadText.propTypes = {
  title: PropTypes.string,
  info: PropTypes.string,
}

InfoHeadText.defaultProps = {
  title: `Please insert a ...title... prop`,
  info: `Please insert a ...info... prop`,
}

export default InfoHeadText
