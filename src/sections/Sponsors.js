import React from 'react'
import styled from 'styled-components'
import { FormattedHTMLMessage } from 'react-intl'
import ethereumFoundation from '../assets/sponsors/ethereumFoundation.svg'
import yearn from '../assets/sponsors/yearn.svg'
import buenosAiresCiudad from '../assets/sponsors/buenosAiresCiudad.svg'
import theGraph from '../assets/sponsors/theGraph.svg'
import connext from '../assets/sponsors/connext.svg'
import uniswap from '../assets/sponsors/uniswap.svg'
import elementFi from '../assets/sponsors/elementFi.svg'
import livepeer from '../assets/sponsors/livepeer.svg'
import optimism from '../assets/sponsors/optimism.svg'
import gearBox from '../assets/sponsors/gearBox.svg'
import chainlink from '../assets/sponsors/chainlink.svg'
import maker from '../assets/sponsors/maker.svg'
import aave from '../assets/sponsors/aave.svg'
import ripio from '../assets/sponsors/ripio.svg'
import belo from '../assets/sponsors/belo.svg'

const Sponsors = () => (
  <SponsorsSection id="sponsors">
    <Container>
      <h1>
        <FormattedHTMLMessage id="sponsors.title" />
      </h1>
      <Row>
        <BoxItem className="tierOne">
          <BoxInfo>
            <img src={ethereumFoundation} />
          </BoxInfo>
        </BoxItem>
        <BoxItem className="tierOne">
          <BoxInfo>
            <img src={yearn} />
          </BoxInfo>
        </BoxItem>
        <BoxItem className="tierOne">
          <BoxInfo>
            <img src={buenosAiresCiudad} />
          </BoxInfo>
        </BoxItem>
      </Row>
      <Row>
        <BoxItem className="tierTwo">
          <BoxInfo>
            <img src={theGraph} />
          </BoxInfo>
        </BoxItem>
        <BoxItem className="tierTwo">
          <BoxInfo>
            <img src={connext} />
          </BoxInfo>
        </BoxItem>
        <BoxItem className="tierTwo">
          <BoxInfo>
            <img src={uniswap} />
          </BoxInfo>
        </BoxItem>
        <BoxItem className="tierTwo">
          <BoxInfo>
            <img src={elementFi} />
          </BoxInfo>
        </BoxItem>
      </Row>
      <Row>
        <BoxItem className="tierTwo">
          <BoxInfo>
            <img src={livepeer} />
          </BoxInfo>
        </BoxItem>
        <BoxItem className="tierTwo">
          <BoxInfo>
            <img src={optimism} />
          </BoxInfo>
        </BoxItem>
        <BoxItem className="tierTwo">
          <BoxInfo>
            <img src={gearBox} />
          </BoxInfo>
        </BoxItem>
        <BoxItem className="tierTwo" />
      </Row>
      <Row>
        <BoxItem className="tierThree" />
        <BoxItem className="tierThree">
          <BoxInfo>
            <img src={chainlink} />
          </BoxInfo>
        </BoxItem>
        <BoxItem className="tierThree">
          <BoxInfo>
            <img src={maker} />
          </BoxInfo>
        </BoxItem>
        <BoxItem className="tierThree">
          <BoxInfo>
            <img src={aave} />
          </BoxInfo>
        </BoxItem>
        <BoxItem className="tierThree">
          <BoxInfo>
            <img src={ripio} />
          </BoxInfo>
        </BoxItem>
        <BoxItem className="tierThree">
          <BoxInfo>
            <img src={belo} />
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
