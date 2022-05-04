import React from 'react'
import styled from 'styled-components'
import arrow from '../assets/arrow-down.svg'

const Speakers = () => (
  <SpeakersSection>
    <Container>
      <h1>
        <span className="pixel">S</span>
        pe
        <span className="pixel">ak</span>
        ers <Arrow src={arrow} />
      </h1>
    </Container>
  </SpeakersSection>
)

const SpeakersSection = styled.section`
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

const Underline = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
`

const Arrow = styled.img`
  padding-left: 100px;
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

export default Speakers
