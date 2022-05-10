import React from 'react'
import styled from 'styled-components'
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl'
import Loop from '../components/Loop'
import date1 from '../assets/date1.svg'
import date2 from '../assets/date2.svg'
import underline from '../assets/latam-underline.svg'
import arrow from '../assets/arrow.svg'

const EthToLatam = () => (
  <EthToLatamSection>
    <Container>
      <h1>
        <FormattedHTMLMessage
          id="ethtolatam.title"
        />
        <Arrow src={arrow} />
        <br />
        <Green>
          <FormattedHTMLMessage id="ethtolatam.title2" />
          <Underline src={underline} />
        </Green>
      </h1>
      <TextBox>
        <FormattedMessage id="ethtolatam.paragraph1" />
        <FormattedMessage id="ethtolatam.paragraph2" />
      </TextBox>
    </Container>
    <Loop reverse content={<img src={date1} />} />
    <Loop content={<img src={date2} />} />
  </EthToLatamSection>
)

const EthToLatamSection = styled.section`
  background: #0b0c0d;
  color: white;
  text-align: center;
  height: auto;
  h1 {
    font-family: 'Helvetica';
    font-weight: 400;
    font-size: 88px;
    line-height: 106px;
    text-transform: uppercase;
    color: #faf7f5;
    position: relative;
  }
  span.pixel {
    font-family: 'Pixel';
  }
`

const Green = styled.span`
  color: #80ff9f;
  padding-left: 434px;
  position: absolute;
`

const Underline = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
`

const Arrow = styled.img`
  padding-left: 60px;
  padding-bottom: 11px;
`

const TextBox = styled.div`
  padding: 123px 0 0 434px;
  p {
    font-family: 'Helvetica';
    font-weight: 400;
    font-size: 22px;
    line-height: 32px;
    color: #737373;
    span {
      color: #faf7f5;
    }
  }
`

const Container = styled.div`
  max-width: 1440px;
  padding: 160px 40px;
  @media only screen and (min-width: 1440px) {
    margin: 0 auto;
  }
  text-align: left;
  padding-bottom: 160px;
`

export default EthToLatam
