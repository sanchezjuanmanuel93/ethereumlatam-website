import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import background from '../assets/speakers-line.svg'
import elipse from '../assets/elipse.svg'
import arrow from '../assets/arrow-down.svg'

import oxjean from '../assets/speakers2/0xjean.jpeg'
import alan from '../assets/speakers2/alan.jpg'
import alejandro from '../assets/speakers2/alejandro.png'
import camila from '../assets/speakers2/camila.jpeg'
import damian from '../assets/speakers2/damian.png'
import camilaR from '../assets/speakers2/camilaR.jpeg'
import cryptoChica from '../assets/speakers2/cryptoChica.png'
import matias from '../assets/speakers2/matias.png'
import gabriel from '../assets/speakers2/gabriel.jpeg'
import mariano from '../assets/speakers2/mariano.jpeg'
import martin from '../assets/speakers2/martin.jpeg'
import nadia from '../assets/speakers2/nadia.jpeg'
import stani from '../assets/speakers2/stani.png'
import patricio from '../assets/speakers2/patricio.jpeg'
import santiago from '../assets/speakers2/santiago.jpeg'
import siesta from '../assets/speakers2/siesta.png'
import georgios from '../assets/speakers2/georgios.jpeg'
import gerrit from '../assets/speakers2/gerrit.jpg'
import jose from '../assets/speakers2/jose.jpeg'
import marcelo from '../assets/speakers2/marcelo.jpg'
import sebastian from '../assets/speakers2/sebastian.jpeg'
import nicolas from '../assets/speakers2/nicolas.jpeg'
import julien from '../assets/speakers2/julien.jpeg'
import fernanda from '../assets/speakers2/fernanda.jpeg'
import alejo from '../assets/speakers2/alejo.jpeg'

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
          <BoxItem className="importantPerson">
            <Content target="_blank" href="https://twitter.com/jnptzl"  className="importantPersonContent">
              <img src={oxjean} />
              <div>
                <h1>0XJEAN.ETH</h1>
                <h2>Kleros</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content target="_blank" href="https://twitter.com/CamiRusso" className="importantPersonContent">
              <img style={{ objectPosition: '100% 20%' }} src={camilaR} />
              <div>
                <h1>CAMILA RUSSO</h1>
                <h2>The Defiant</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content target="_blank" href="https://twitter.com/donosonaumczuk" className="importantPersonContent">
              <img style={{ objectPosition: '100% 36%' }} src={alan} />
              <div>
                <h1>Alan Donoso Naumczuk</h1>
                <h2>Aave Companies</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content target="_blank" href="https://twitter.com/mrnventuro" className="importantPersonContent">
              <img src={nicolas} />
              <div>
                <h1>Nicolas Venturo</h1>
                <h2>Balancer</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content target="_blank" href="https://twitter.com/nad8802" className="importantPersonContent">
              <img style={{ objectPosition: '100% 20%' }} src={nadia} />
              <div>
                <h1>Nadia Alvarez</h1>
                <h2>MakerDAO</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content target="_blank" href="https://twitter.com/the_ethernaut" className="importantPersonContent">
              <img src={alejandro} />
              <div>
                <h1>Alejandro Santander</h1>
                <h2>Synthetix</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content target="_blank" href="https://twitter.com/dschenkelman" className="importantPersonContent">
              <img src={damian} />
              <div>
                <h1>Damian Schenkelman</h1>
                <h2>Auth0</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content target="_blank" href="https://twitter.com/frenetikvoid" className="importantPersonContent">
              <img style={{ objectPosition: '100% 40%' }} src={siesta} />
              <div>
                <h1>Frenetik Void</h1>
                <h2>Game Disease</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="vip">
            <Content target="_blank" href="https://twitter.com/smpalladino" className="vipContent">
              <img src={santiago} />
              <div>
                <h1>Santiago Palladino</h1>
                <h2>Open Zeppelin</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="vip">
            <Content target="_blank" href="https://twitter.com/StaniKulechov" className="vipContent">
              <img style={{ objectPosition: '100%' }} src={stani} />
              <div>
                <h1>Stani Kulechov</h1>
                <h2>Aave Companies</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content target="_blank" href="https://twitter.com/camiinthisthang" className="importantPersonContent">
              <img style={{ objectPosition: '100% 40%' }} src={camila} />
              <div>
                <h1>Camila Ramos</h1>
                <h2>Edge&Node</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content target="_blank" href="https://twitter.com/alcuadrado" className="importantPersonContent">
              <img src={patricio} />
              <div>
                <h1>Patricio Palladino</h1>
                <h2>Nomic Foundation</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content target="_blank" href="https://twitter.com/martriay" className="importantPersonContent">
              <img style={{ objectPosition: '100% 60%' }} src={martin} />
              <div>
                <h1>Martín Triay</h1>
                <h2>Open Zeppelin</h2>
              </div>
            </Content>
          </BoxItem>

          <BoxItem className="importantPerson">
            <Content target="_blank" href="https://twitter.com/cryptochica_arg" className="importantPersonContent">
              <img src={cryptoChica} />
              <div>
                <h1>Romina Sejas</h1>
                <h2>Defi Latam</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content target="_blank" className="importantPersonContent">
              <img src={gerrit} />
              <div>
                <h1>Gerrit Hall</h1>
                <h2>Curve</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="vip">
            <Content target="_blank" href="https://twitter.com/nanexcool" className="vipContent">
              <img src={mariano} />
              <div>
                <h1>Mariano Conti</h1>
                <h2>Good Guy</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content target="_blank" href="https://twitter.com/GabrielGruber" className="importantPersonContent">
              <img src={gabriel} />
              <div>
                <h1>Gabriel Gruber</h1>
                <h2>Exactly Finance</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="vip">
            <Content target="_blank" href="https://twitter.com/sserrano44" className="vipContent">
              <img src={sebastian} />
              <div>
                <h1>Sebastián Serrano</h1>
                <h2>Ripio</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content target="_blank" href="https://twitter.com/lemoncheli" className="importantPersonContent">
              <img src={marcelo} />
              <div>
                <h1>Marcelo Cavazzoli</h1>
                <h2>Lemon</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="vip">
            <Content target="_blank" href="https://twitter.com/gakonst" className="vipContent">
              <img src={georgios} />
              <div>
                <h1>Georgios Konstantopoulos</h1>
                <h2>Paradigm</h2>
              </div>
            </Content>
          </BoxItem>

          <BoxItem className="importantPerson">
            <Content target="_blank" href="https://twitter.com/FernandaDixon3" className="importantPersonContent">
              <img src={fernanda} />
              <div>
                <h1>Fernanda Dixon</h1>
                <h2>Axie Infinity</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="vip">
            <Content target="_blank" href="https://twitter.com/fiiiu_" className="vipContent">
              <img src={alejo} />
              <div>
                <h1>Alejo Salles</h1>
                <h2>Flashbots</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content target="_blank" href="https://twitter.com/josefabregab" className="importantPersonContent">
              <img src={jose} />
              <div>
                <h1>José Alfonso Fabrega</h1>
                <h2>Metis</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content target="_blank" href="https://twitter.com/bneiluj" className="importantPersonContent">
              <img src={julien} />
              <div>
                <h1>Julien Bouteloup</h1>
                <h2>Rekt</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content target="_blank" href="https://twitter.com/woloski" className="importantPersonContent">
              <img src={matias} />
              <div>
                <h1>Matias Woloski</h1>
                <h2>Auth0</h2>
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
  text-align: top;
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
  column-gap: 0px;
  outline: 1px solid #4D4D4D;
  margin-right: 0;
  margin-left: auto;
  column-count: 4;
  max-width: 1080px;
  @media only screen and (max-width: 1100px) {
    max-width: 540px;
    column-count: 2;
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
`

const BoxItem = styled.div`
  background: #0b0c0d;
  width: 100%;
  display: inline-block;
  margin-bottom: 0px;
  margin-top: 0px;
  font-family: 'Helvetica';
  font-weight: 400;
  outline: 1px solid #4D4D4D;
  &.vip {
    height: 245px;
  }
  &.importantPerson {
    height: 163px;
  }
  &.normal {
    height: 76px;
  }
`
const Content = styled.a`
  overflow: hidden;
  text-decoration: none;
  @media only screen and (min-width: 701px) {
    width: 268px;
  }
  div {
    max-width: 100%;
  }
  img {
    height: 44px;
    padding: 16px;
    object-fit: cover;
    @media only screen and (max-width: 540px) {
      padding: 13px;
    }
  }
  &.normalContent {
    display: flex;
    align-items: top;
    img {
      height: 44px;
      padding: 14px 16px;
      @media only screen and (max-width: 540px) {
        padding: 11px 13px;
      }
    }
  }
  &.vipContent {
    display: inline-block;
    h1,
    h2 {
      padding-left: 16px;
    }
    @media only screen and (max-width: 540px) {
      width: 100%;
    }
    img {
      height: 157px;
      width: 238px;
      @media only screen and (max-width: 540px) {
        width: calc(100% - 26px);
        object-fit: cover;
        object-position: 50% 20%;
      }
    }
  }
  &.importantPersonContent {
    display: inline-block;
    h1,
    h2 {
      padding-left: 16px;
    }
    @media only screen and (max-width: 540px) {
      width: 100%;
    }
    img {
      height: 84px;
      width: 236px;
      object-fit: cover;
      object-position: center;
      @media only screen and (max-width: 540px) {
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
  @media only screen and (max-width: 1100px) {
    padding: 80px 15px 150px 15px;
  }
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: 92% 100%;
  @media only screen and (min-width: 1440px) {
    margin: 0 auto;
  }
  text-align: left;
`

export default Speakers
