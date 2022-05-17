import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import background from '../assets/speakers-line.svg'
import elipse from '../assets/elipse.svg'
import arrow from '../assets/arrow-down.svg'
import alisha from '../assets/speakers/alisha.png'
import alejo from '../assets/speakers/alejo.png'
import vitalik from '../assets/speakers/vitalik.png'
import jinglan from '../assets/speakers/jinglan.png'
import mariano from '../assets/speakers/mariano.png'
import aya from '../assets/speakers/aya.png'
import pplpleasr from '../assets/speakers/pplpleasr.png'
import stani from '../assets/speakers/stani.png'
import camila from '../assets/speakers/camila.png'
import austin from '../assets/speakers/austin.png'
import arjun from '../assets/speakers/arjun.png'
import facu from '../assets/speakers/facu.png'
import scott from '../assets/speakers/scott.png'
import dennison from '../assets/speakers/dennison.png'
import steven from '../assets/speakers/steven.png'
import shannon from '../assets/speakers/shannon.png'
import ken from '../assets/speakers/ken.png'
import manasi from '../assets/speakers/manasi.png'
import skylar from '../assets/speakers/skylar.png'
import nadia from '../assets/speakers/nadia.png'
import simona from '../assets/speakers/simona.png'
import superphiz from '../assets/speakers/superphiz.png'
import linda from '../assets/speakers/linda.png'
import julia from '../assets/speakers/julia.png'
import brian from '../assets/speakers/brian.png'
import min from '../assets/speakers/min.png'
import mikhail from '../assets/speakers/mikhail.png'
import patricio from '../assets/speakers/patricio.png'
import kelvin from '../assets/speakers/kelvin.png'
import kartik from '../assets/speakers/kartik.png'
import sandeep from '../assets/speakers/sandeep.png'
import ivangbi from '../assets/speakers/ivangbi.png'
import pedro from '../assets/speakers/pedro.png'
import eric from '../assets/speakers/eric.png'
import evan from '../assets/speakers/evan.png'
import anna from '../assets/speakers/anna.png'
import ed from '../assets/speakers/ed.png'
import eva from '../assets/speakers/eva.png'
import jake from '../assets/speakers/jake.png'
import liam from '../assets/speakers/liam.png'

const Speakers = () => {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [])
  const medium = 700
  return (
    <SpeakersSection id="speakers">
      <Container>
        <h1>
          <span className="pixel">S</span>
          pe
          <span className="pixel">
            ak
            <Elipse src={elipse} />
          </span>
          ers {width >= medium && <Arrow src={arrow} />}
        </h1>
        <BoxWrapper>
          <BoxItem className="normal">
            <Content className="normalContent">
              <img src={alisha} />
              <div>
                <h1>ALISHA.ETH</h1>
                <h2>ENS</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="normal">
            <Content className="normalContent">
              <img src={camila} />
              <div>
                <h1>CAMILA RUSSO</h1>
                <h2>The Defiant</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="normal">
            <Content className="normalContent">
              <img src={austin} />
              <div>
                <h1>AUSTIN GRIFFITH</h1>
                <h2>Ethereum Foundation</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="vip">
            <Content className="vipContent">
              <img src={vitalik} />
              <div>
                <h1>Vitalik Buterin</h1>
                <h2>Ethereum</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="normal">
            <Content className="normalContent">
              <img src={arjun} />
              <div>
                <h1>Arjun Bhuptani</h1>
                <h2>Connext</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="normal">
            <Content className="normalContent">
              <img src={facu} />
              <div>
                <h1>Facu Ameal</h1>
                <h2>Yearn</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content className="importantPersonContent">
              <img src={mariano} />
              <div>
                <h1>Mariano Conti</h1>
                <h2>pleasrDAO</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content className="importantPersonContent">
              <img src={aya} />
              <div>
                <h1>Aya Miyaguchi</h1>
                <h2>Ethereum Foundation</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="normal">
            <Content className="normalContent">
              <img src={scott} />
              <div>
                <h1>Scott Moore</h1>
                <h2>Gitcoin</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="normal">
            <Content className="normalContent">
              <img src={dennison} />
              <div>
                <h1>Dennison b.</h1>
                <h2>Tally</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="normal">
            <Content className="normalContent">
              <img src={steven} />
              <div>
                <h1>Steven Gilbert</h1>
                <h2>Ethereum Foundation</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="normal">
            <Content className="normalContent">
              <img src={shannon} />
              <div>
                <h1>Shannon Wells</h1>
                <h2>Livepeer</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="normal">
            <Content className="normalContent">
              <img src={ken} />
              <div>
                <h1>Ken Ng</h1>
                <h2>Uniswap Grants Program</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="normal">
            <Content className="normalContent">
              <img src={manasi} />
              <div>
                <h1>Manasi Vora</h1>
                <h2>Komorebi Collective</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="normal">
            <Content className="normalContent">
              <img src={skylar} />
              <div>
                <h1>Skylar Weaver</h1>
                <h2>Ethereum Foundation</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="normal">
            <Content className="normalContent">
              <img src={nadia} />
              <div>
                <h1>Nadia Alvarez</h1>
                <h2>MakerDAO</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="normal">
            <Content className="normalContent">
              <img src={simona} />
              <div>
                <h1>Simona Pop</h1>
                <h2>Status.im</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="normal">
            <Content className="normalContent">
              <img src={superphiz} />
              <div>
                <h1>Superphiz</h1>
                <h2>EthStaker</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="normal">
            <Content className="normalContent">
              <img src={linda} />
              <div>
                <h1>Linda Xie</h1>
                <h2>Scalar Capital</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="normal">
            <Content className="normalContent">
              <img src={julia} />
              <div>
                <h1>Julia R.</h1>
                <h2>Orca Protocol</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="normal">
            <Content className="normalContent">
              <img src={brian} />
              <div>
                <h1>Brian Flynn</h1>
                <h2>RabbitHole</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="vip">
            <Content className="vipContent">
              <img src={jinglan} />
              <div>
                <h1>Jinglan Wang</h1>
                <h2>Optimism</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="normal">
            <Content className="normalContent">
              <img src={min} />
              <div>
                <h1>Min Teo</h1>
                <h2>Ethereal Ventures</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="normal">
            <Content className="normalContent">
              <img src={mikhail} />
              <div>
                <h1>Mikhail L.</h1>
                <h2>Gearbox</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="normal">
            <Content className="normalContent">
              <img src={patricio} />
              <div>
                <h1>Patricio p.</h1>
                <h2>Nomic Foundation</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content className="importantPersonContent">
              <img src={pplpleasr} />
              <div>
                <h1>pplpleasr</h1>
                <h2>pleasrDAO</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="normal">
            <Content className="normalContent">
              <img src={kelvin} />
              <div>
                <h1>Kelvin Fichter</h1>
                <h2>Optimism</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="normal">
            <Content className="normalContent">
              <img src={kartik} />
              <div>
                <h1>Kartik Talwar</h1>
                <h2>ETHGlobal</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="normal">
            <Content className="normalContent">
              <img src={sandeep} />
              <div>
                <h1>Sandeep</h1>
                <h2>Polygon</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="normal">
            <Content className="normalContent">
              <img src={ivangbi} />
              <div>
                <h1>ivangbi</h1>
                <h2>Gearbox</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="normal">
            <Content className="normalContent">
              <img src={pedro} />
              <div>
                <h1>Pedro Gomes</h1>
                <h2>WalletConnect</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content className="importantPersonContent">
              <img src={alejo} />
              <div>
                <h1>Alejo Salles</h1>
                <h2>Flashbots</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="normal">
            <Content className="normalContent">
              <img src={eric} />
              <div>
                <h1>Eric Tang</h1>
                <h2>Livepeer</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="normal">
            <Content className="normalContent">
              <img src={evan} />
              <div>
                <h1>Evan Van Ness</h1>
                <h2>Starbloom Ventures</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="normal">
            <Content className="normalContent">
              <img src={anna} />
              <div>
                <h1>Anna Rose</h1>
                <h2>Zero Knowledge Podcast</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="normal">
            <Content className="normalContent">
              <img src={ed} />
              <div>
                <h1>Ed Felten</h1>
                <h2>Offchain Labs</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content className="importantPersonContent">
              <img src={stani} />
              <div>
                <h1>Stani Kulechov</h1>
                <h2>Aave Companies</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="normal">
            <Content className="normalContent">
              <img src={eva} />
              <div>
                <h1>Eva Beylin</h1>
                <h2>The Graph Foundation</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="normal">
            <Content className="normalContent">
              <img src={jake} />
              <div>
                <h1>Jake Brukhman</h1>
                <h2>CoinFund</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="normal">
            <Content className="normalContent">
              <img src={liam} />
              <div>
                <h1>Liam Horne</h1>
                <h2>Optimism</h2>
              </div>
            </Content>
          </BoxItem>
        </BoxWrapper>
      </Container>
    </SpeakersSection>
  )
}

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
    @media only screen and (min-width: 701px) and (max-width: 1135px) {
      font-size: 50px;
    }
    @media only screen and (max-width: 700px) {
      font-size: 44px;
      line-height: 45px;
      margin-bottom: 73px;
    }
  }
  span.pixel {
    font-family: 'Pixel';
    position: relative;
  }
`

const Elipse = styled.img`
  position: absolute;
  @media only screen and (min-width: 701px) and (max-width: 1135px) {
    bottom: -15px;
    right: -111px;
    width: 280px;
  }
  @media only screen and (max-width: 700px) {
    bottom: -12px;
    right: -97px;
    width: 246px;
  }
  bottom: -22px;
  right: -183px;
`

const BoxWrapper = styled.div`
  column-count: 5;
  @media only screen and (max-width: 1135px) {
    column-count: 2;
  }
  column-gap: 0px;
  max-width: 1135px;
  @media only screen and (max-width: 1135px) {
    max-width: 435px;
  }
  outline: 1px solid white;
  margin-right: 0;
  margin-left: auto;
`

const BoxItem = styled.div`
  background: #0b0c0d;
  width: 100%;
  display: inline-block;
  margin-bottom: 0px;
  margin-top: 0px;
  font-family: 'Helvetica';
  font-weight: 400;
  outline: 1px solid white;
  &.vip {
    height: 228px;
  }
  &.importantPerson {
    height: 152px;
  }
  &.normal {
    height: 76px;
  }
`
const Content = styled.div`
  overflow: hidden;

  @media only screen and (min-width: 701px) {
    width: 227px;
  }
  div {
    max-width: 100%;
  }
  img {
    height: 44px;
    padding: 16px;
    @media only screen and (max-width: 1135px) {
      padding: 13px;
    }
  }
  &.normalContent {
    display: flex;
    align-items: center;
    img {
      height: 44px;
      padding: 14px 16px;
      @media only screen and (max-width: 1135px) {
        padding: 11px 13px;
      }
    }
  }

  h1 {
    font-size: 16px;
    line-height: 19px;
    text-transform: uppercase;
    color: #faf7f5;
    margin: 0;
    @media only screen and (max-width: 1135px) {
      font-size: 12px;
    }
  }
  h2 {
    font-size: 12px;
    line-height: 14px;
    color: #737373;
    margin: 0;
    @media only screen and (max-width: 1135px) {
      font-size: 9px;
    }
  }
  &.vipContent {
    display: inline-block;
    h1,
    h2 {
      padding-left: 16px;
    }
    @media only screen and (max-width: 1135px) {
      width: 100%;
    }
    img {
      height: 147px;
      @media only screen and (max-width: 1135px) {
        width: calc(100% - 26px);
        object-fit: cover;
      }
    }
  }
  &.importantPersonContent {
    display: inline-block;
    h1,
    h2 {
      padding-left: 16px;
    }
    @media only screen and (max-width: 1135px) {
      width: 100%;
    }
    img {
      height: 71px;
      @media only screen and (max-width: 1135px) {
        width: calc(100% - 26px);
        object-fit: cover;
      }
    }
  }
`

const Arrow = styled.img`
  padding-left: 100px;
  padding-bottom: 11px;
`

const Container = styled.div`
  max-width: 1440px;
  padding: 160px 40px 320px 40px;
  @media only screen and (max-width: 1135px) {
    padding: 80px 15px 150px 15px;
  }
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: right bottom;
  @media only screen and (min-width: 1440px) {
    margin: 0 auto;
  }
  text-align: left;
`

export default Speakers
