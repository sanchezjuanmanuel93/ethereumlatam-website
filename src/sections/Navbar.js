import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import logo from '../assets/navbar-logo.svg'

const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [])
  const medium = 700
  return (
    <NavbarSection>
      <Container>
        <img alt="img" src={logo} />
        {width >= medium && <p>Menu</p>}
        <GreenButton href="https://google.com" target="_blank">
          Get Tickets!
        </GreenButton>
      </Container>
    </NavbarSection>
  )
}

const NavbarSection = styled.section`
  background: #faf7f5;
  margin: auto;
  width: 100%;
  position: relative;
  text-align: center;
`

const Container = styled.div`
  max-width: 1440px;
  padding: 0 0 0 40px;
  @media only screen and (min-width: 1440px) {
    margin: 0 auto;
  }
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const GreenButton = styled.a`
  background: #80ff9f;
  font-family: 'Pixel';
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 0 32px;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  text-transform: uppercase;
  color: #000000;
`

export default Navbar
