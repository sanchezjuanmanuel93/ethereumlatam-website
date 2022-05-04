import React from 'react'
import styled from 'styled-components'
import Loop from '../components/Loop'
import image from '../assets/carousel.png'
import logo from '../assets/logo.svg'

const Hero = () => (
  <HeroSection>
    <Container>
      <Box>
        <p>
          August
          <br />
          11-12-13-14
          <br />
          2022
        </p>
        <img alt="img" src={logo} />
        <p className="green">
          @BuenosAires
          <br />
          >> Argentina
        </p>
      </Box>
      <Button href="https://google.com" target="_blank">
        get tickets!
      </Button>
    </Container>
    <Loop reverse={true} content={<img alt="img" src={image} />} />
  </HeroSection>
)

const HeroSection = styled.section`
  background: #0b0c0d;
  color: white;
  text-align: center;
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
`

const Container = styled.div`
  max-width: 1440px;
  padding: 0 40px;
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
`

const Button = styled.a`
  background: transparent;
  font-family: 'Pixel';
  height: 40px;
  margin: 72px auto 100px auto;
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
`

export default Hero
