import React from 'react'
import { FormattedMessage } from 'react-intl'
import background from '../assets/hero-line.svg'
import styled from 'styled-components'
import Loop from '../components/Loop'
import image from '../assets/carousel.png'
import logo from '../assets/logo.svg'

const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <Box>
          <p>
            <FormattedMessage id="hero.month" />
            <br />
            <FormattedMessage id="hero.date" />
            <br />
            <FormattedMessage id="hero.year" />
          </p>
          <img alt="img" src={logo} />
          <p className="green">
            @BuenosAires
            <br />
            >> Argentina
          </p>
        </Box>
        <div className="streaming-buttons">
          <Button href="https://youtu.be/wfh0qbgi6Dw" target="_blank">
            Streaming Stage 1
          </Button>
          <Button href="https://youtu.be/3Cdsll-zVUE" target="_blank">
            Streaming Stage 2
          </Button>
        </div>
      </Container>
      <Loop reverse={true} content={<img alt="img" src={image} />} />
    </HeroSection>
  )
}

const HeroSection = styled.section`
  background: #0b0c0d;
  color: white;
  text-align: center;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center bottom;
  padding-bottom: 50px;
  height: auto;
  p {
    font-family: 'Pixel';
    font-weight: 400;
    font-size: 32px;
    line-height: 32px;
    text-transform: uppercase;
    color: #b3b3b3;
    &.green {
      color: #80ff9f;
    }
  }
  .streaming-buttons {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const Container = styled.div`
  max-width: 1440px;
  padding: 0 40px;
  @media only screen and (max-width: 700px) {
    padding: 0 15px 160px 15px;
  }
  @media only screen and (min-width: 1440px) {
    margin: 0 auto;
  }
  text-align: center;
  padding-bottom: 160px;
`
const Box = styled.div`
  padding-top: 160px;
  padding-bottom: 115px;
  display: flex;
  height: auto;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 700px) {
    padding-top: 70px;
    flex-direction: column;
    img {
      max-width: 90%;
      padding: 60px 0;
    }
  }
`

const Button = styled.a`
  background: transparent;
  font-family: 'Pixel';
  height: 40px;
  margin: 72px 20px 100px 20px;
  text-decoration: none;
  padding: 18px 36px;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  text-transform: uppercase;
  color: #faf7f5;
  border: 3px solid #faf7f5;
  box-sizing: border-box;
  box-shadow: -6px 6px 0px 1px #faf7f5;
  display: block;
  width: 315px;
  height: 61px;
  @media only screen and (max-width: 870px) {
    display: block;
    width: 254px;
    height: 82px;
    margin: 72px auto 50px auto;
  }
  @media only screen and (max-width: 700px) {
    &.spanish {
      padding: 0;
      border: 0;
      box-shadow: 0 0 0 0 transparent;
    }
  }
`

export default Hero
