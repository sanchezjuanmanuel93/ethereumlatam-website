import React from 'react'
import styled from 'styled-components'
import Loop from '../components/Loop'
import date1 from '../assets/date1.svg'
import date2 from '../assets/date2.svg'
import underline from '../assets/latam-underline.svg'
import arrow from '../assets/arrow.svg'

const EthToLatam = () => (
  <EthToLatamSection>
    <Container>
      <h1>
        B<span className="pixel">r</span>
        ingin
        <span className="pixel">g E</span>
        TH <Arrow src={arrow} />
        <br />
        <Green>
          t<span className="pixel">o</span> L<span className="pixel">a</span>
          tam
          <Underline src={underline} />
        </Green>
      </h1>
      <TextBox>
        <p>
          The ETH Latam conference builds upon the work of the local pioneers
          that laid the foundations for a <span>vibrant community</span> that
          made crypto mainstream in one of the countries where it’s most needed.
        </p>
        <p>
          In Latin America{' '}
          <span>
            the possibilities enabled by Ethereum are not an option, but the
            alternative
          </span>{' '}
          for individuals to build a new system where no one is left behind. ETH
          Latam brings together the global community of builders with one of the
          most vibrant crypto communities on earth, who use Ethereum protocols
          in their everyday lives.{' '}
        </p>
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
