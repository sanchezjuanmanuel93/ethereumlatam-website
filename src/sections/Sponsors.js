import React from 'react'
import styled from 'styled-components'
import { FormattedHTMLMessage } from 'react-intl'

import ethereumFoundation from '../assets/sponsors2/ethereumFoundation.svg'
import buenosAiresCiudad from '../assets/sponsors2/buenosAiresCiudad.svg'

import ripio from '../assets/sponsors2/ripio.svg'
import thinkandDev from '../assets/sponsors2/ThinkandDev.png'
import belo from '../assets/sponsors2/belo.svg'
import argent from '../assets/sponsors2/Argent.svg'
import maker from '../assets/sponsors2/Maker.svg'
import starkware from '../assets/sponsors2/starkware.png'
import wink from '../assets/sponsors2/wink.svg'

import theGraph from '../assets/sponsors2/TheGraph.svg'
import exactly from '../assets/sponsors2/Exactly.jpg'
import lens from '../assets/sponsors2/lens.svg'
import lemon from '../assets/sponsors2/lemon.svg'
import scroll from '../assets/sponsors2/Scroll.svg'

const Sponsors = () => (
  <SponsorsSection id="sponsors">
    <Container>
      <h1>
        <FormattedHTMLMessage id="sponsors.title" />
      </h1>
      <Row>
        <BoxItem className="tierOne">
          <BoxInfo>
            <img src={ripio} width="280"/>
          </BoxInfo>
        </BoxItem>
        <BoxItem className="tierOne">
          <BoxInfo>
          <img src={buenosAiresCiudad} width="350"/>
          </BoxInfo>
        </BoxItem>
        <BoxItem className="tierOne">
          <BoxInfo>
            <img src={thinkandDev} height="180"/>
          </BoxInfo>
        </BoxItem>
      </Row>
      <Row>
        <BoxItem className="tierTwo">
          <BoxInfo>
            <img width="270" src={belo} />
          </BoxInfo>
        </BoxItem>
        <BoxItem className="tierTwo">
          <BoxInfo>
            <img width="170" src={argent} />
          </BoxInfo>
        </BoxItem>
        <BoxItem className="tierTwo">
          <BoxInfo>
            <img width="300" src={ethereumFoundation} />
          </BoxInfo>
        </BoxItem>
          <BoxItem className="tierTwo" />
    </Row>
    <Row>
        <BoxItem className="tierTwo" >
          <BoxInfo>
            <img width="210" src={maker} />
          </BoxInfo>
        </BoxItem>
        <BoxItem className="tierTwo">
          <BoxInfo>
            <img width="220" src={starkware} />
          </BoxInfo>
        </BoxItem>
        <BoxItem className="tierTwo">
          <BoxInfo>
            <img width="200" src={wink} />
          </BoxInfo>
        </BoxItem>
        
        
      </Row>
      <Row>
        <BoxItem className="tierThree" />
        <BoxItem className="tierThree">
          <BoxInfo>
            <img src={theGraph} />
          </BoxInfo>
        </BoxItem>
        <BoxItem className="tierThree">
          <BoxInfo>
            <img className="lens" src={lens} />
          </BoxInfo>
        </BoxItem>
        <BoxItem className="tierThree">
          <BoxInfo>
            <img width="120" src={exactly} />
          </BoxInfo>
        </BoxItem>
        <BoxItem className="tierThree">
          <BoxInfo>
            <img src={lemon} />
          </BoxInfo>
        </BoxItem>
        <BoxItem className="tierThree">
          <BoxInfo>
            <img width="130" src={scroll} />
          </BoxInfo>
        </BoxItem>
      </Row>
    </Container>
  </SponsorsSection>
)

const SponsorsSection = styled.section`
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
      margin-bottom: 73px;
    }
  }
  span.pixel {
    font-family: 'Pixel';
  }
`

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  outline: 1px solid white;
  max-width: 1134px;
  @media only screen and (max-width: 700px) {
    max-width: 360px;
    width: 360px;
  }
  @media only screen and (min-width: 701px) and (max-width: 1230px) {
    max-width: 600px;
    width: 600px;
  }
  margin-right: 0;
  margin-left: auto;
  margin-bottom: 1px;
  flex-wrap: wrap;
`

const BoxInfo = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const BoxItem = styled.div`
  background: #0b0c0d;
  width: 100%;
  display: inline-block;
  margin: 0;
  text-align: center;
  outline: 1px solid white;
  img {
    overflow: hidden;
  }
  &.tierZero {
    height: 250px;
    width: 567px;
    @media only screen and (max-width: 700px) {
      width: 360px;
    }
    @media only screen and (min-width: 701px) and (max-width: 1230px) {
      width: 600px;
    }
    .div {
      height: 290px;
      width: 560px;
    }
  }
  &.tierOne {
    height: 220px;
    width: 378px;
    @media only screen and (max-width: 700px) {
      width: 360px;
    }
    @media only screen and (min-width: 701px) and (max-width: 1230px) {
      width: 600px;
    }
    .div {
      height: 216px;
      width: 374px;
    }
  }
  &.tierTwo {
    height: 110px;
    width: 283.5px;
    @media only screen and (max-width: 700px) {
      width: 180px;
    }
    @media only screen and (min-width: 701px) and (max-width: 1230px) {
      width: 300px;
    }

    .div {
      height: 106px;
      width: 279px;
    }
  }
  &.tierThree {
    height: 88px;
    width: 189px;
    @media only screen and (max-width: 700px) {
      width: 120px;
    }
    @media only screen and (min-width: 701px) and (max-width: 1230px) {
      width: 200px;
    }

    .div {
      height: 84px;
      width: 185px;
    }
    img {
      max-width: 80%;
      &.lens {
        max-height: 100%;
      }
    }
  }
`

const Container = styled.div`
  max-width: 1440px;
  padding: 0 40px 160px 40px;
  @media only screen and (max-width: 700px) {
    padding: 0 15px 80px 15px;
  }
  @media only screen and (min-width: 1440px) {
    margin: 0 auto;
  }
  text-align: left;
  padding-bottom: 160px;
`

// const Line = styled.div`
//   position: relative;
//   z-index: 1;
//   left: -9px;
//   width: 208px;
//   top: 44px;
//   height: 1px;
//   background-color: white;
//   transform: rotate(25deg);
//   @media only screen and (max-width: 700px) {
//     left: -14px;
//     width: 147px;
//     top: 43px;
//     transform: rotate(36deg);
//   }
// `

export default Sponsors