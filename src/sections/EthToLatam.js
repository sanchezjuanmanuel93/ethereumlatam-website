import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl'
import Loop from '../components/Loop'
import date1 from '../assets/date11.svg'
import date2 from '../assets/date22.svg'
import underline from '../assets/latam-underline.svg'
import arrow from '../assets/arrow.svg'

const EthToLatam = () => {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [])
  const medium = 700
  const locale = localStorage.getItem('locale')

  return (
    <EthToLatamSection id="about">
      <Container>
        <h1>
          <FormattedHTMLMessage id="ethtolatam.title" />
          {width < medium &&  locale != 'en' && <br />}
          <Arrow src={arrow} />
          {width >= medium && <br />}
          <Green>
            <FormattedHTMLMessage id="ethtolatam.title2" />
            <Underline src={underline} />
          </Green>
        </h1>
        <TextBox>
          <FormattedHTMLMessage id="ethtolatam.paragraph1" />
          <FormattedHTMLMessage id="ethtolatam.paragraph2" />
        </TextBox>
      </Container>
      <Loop reverse content={<img src={date1} />} />
      <Loop content={<img src={date2} />} />
    </EthToLatamSection>
  )
}

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
    @media only screen and (max-width: 700px) {
      font-size: 44px;
      line-height: 45px;
    }
  }
  span.pixel {
    font-family: 'Pixel';
  }
`

const Green = styled.span`
  color: #80ff9f;
  padding-left: 434px;
  position: absolute;
  @media only screen and (max-width: 700px) {
    padding-left: 0px;
  }
`

const Underline = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  @media only screen and (max-width: 700px) {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 208px;
  }
`

const Arrow = styled.img`
  padding-left: 60px;
  padding-bottom: 11px;
  @media only screen and (max-width: 700px) {
    padding-left: 0;
    padding-bottom: 0px;
    padding-right: 54px;
    height: 20px;
  }
`

const TextBox = styled.div`
  padding: 123px 0 0 434px;
  @media only screen and (max-width: 700px) {
    padding: 25px 0 0 74px;
  }
  p {
    font-family: 'Helvetica';
    font-weight: 400;
    font-size: 22px;
    line-height: 32px;
    color: #737373;
    span {
      color: #faf7f5;
    }
    @media only screen and (max-width: 700px) {
      font-size: 18px;
      line-height: 24px;
    }
  }
`

const Container = styled.div`
  max-width: 1440px;
  padding: 110px 40px 160px 40px;
  @media only screen and (min-width: 1440px) {
    margin: 0 auto;
  }
  @media only screen and (max-width: 700px) {
  }
  text-align: left;
  padding-bottom: 160px;
`

export default EthToLatam
