import Faq from 'react-faq-component'
import styled from 'styled-components'
import background from '../assets/where-background.svg'
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl'
import location from '../assets/location.svg'

export default function App() {
  return (
    <WhereSection>
      <Container>
        <img src={location} />
        <h1>
        <FormattedHTMLMessage id="venue.title" />
        </h1>
        <h2><FormattedHTMLMessage id="venue.address" /></h2>
        <a href="https://google.com"><FormattedHTMLMessage id="venue.link" /></a>
      </Container>
    </WhereSection>
  )
}

const WhereSection = styled.section`
  background: #e3e3e3;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: right;
  color: white;
  text-align: center;
  height: auto;
  height: 800px;
  h1 {
    font-family: 'Helvetica';
    font-weight: 400;
    font-size: 72px;
    line-height: 64px;
    text-transform: uppercase;
    color: #0b0c0d;
    position: relative;
    margin-top: 45px;
    margin-bottom: 32px;
  }
  span.pixel {
    font-family: 'Pixel';
  }
  a {
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #0b0c0d;
    text-decoration: none;
  }
  h2 {
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #737373;
    margin-bottom: 260px;
  }
`

const Container = styled.div`
  max-width: 1440px;
  padding: 100px 40px;
  @media only screen and (min-width: 1440px) {
    margin: 0 auto;
  }
  text-align: left;
  padding-bottom: 80px;
`
