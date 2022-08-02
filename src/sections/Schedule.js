import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FormattedHTMLMessage } from 'react-intl'
import background from '../assets/Mask.svg'

import evan from '../assets/speakers2/evan.jpeg'
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
import jose from '../assets/speakers2/jose.jpg'
import marcelo from '../assets/speakers2/marcelo.jpg'
import sebastian from '../assets/speakers2/sebastian.jpeg'
import nicolas from '../assets/speakers2/nicolas.jpeg'
import julien from '../assets/speakers2/julien.jpeg'
import fernanda from '../assets/speakers2/fernanda.jpeg'
import alejo from '../assets/speakers2/alejo.jpeg'
import patricioW from '../assets/speakers2/patricioW.jpg'
import skeletor from '../assets/speakers2/skeletor.jpeg'
import aya from '../assets/speakers2/aya.jpeg'
import arjun from '../assets/speakers2/arjun.jpeg'
import rodrigo from '../assets/speakers2/rodrigo.jpg'
import manuel from '../assets/speakers2/manuel.jpg'
import nahuel from '../assets/speakers2/nahuel.JPG'

import harsh from '../assets/speakers2/harsh.jpeg'
import julian from '../assets/speakers2/julian.jpg'
import matiasN from '../assets/speakers2/matiasN.jpg'
import oli from '../assets/speakers2/oli.jpeg'
import antonela from '../assets/speakers2/antonela.png'
import vicky from '../assets/speakers2/vicky.jpeg'
import gino from '../assets/speakers2/gino.jpeg'
import adrian from '../assets/speakers2/adrian.jpeg'
import diego from '../assets/speakers2/diego.jpeg'

import evin from '../assets/speakers2/evin.jpg'
import will from '../assets/speakers2/will.png'
import wade from '../assets/speakers2/wade.jpeg'
import sxysun from '../assets/speakers2/sxysun.jpg'
import shannon from '../assets/speakers2/shannon.jpeg'

const Schedule = () => {
  const locale =
    typeof window.localStorage !== 'undefined'
      ? localStorage.getItem('locale')
      : 'en'
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [])
  const medium = 700

  return (
    <ScheduleSection id="agenda" locale={locale}>
      <Container>
        <h1>
          <FormattedHTMLMessage id="schedule.title" />
        </h1>
        <Day>
          <Date className="one">
            <h2>
              /<span className="pixel">01</span>
            </h2>
            <h3>Thursday</h3>
            <h3>11th</h3>
          </Date>
          <Talks>
            <Entry>
              <Hours>9:15 - 9:30</Hours>
              <div>
                <h3>Opening Ceremony</h3>
                <p>
                  <img src={evan} />
                  Evan Van Ness
                </p>
              </div>
            </Entry>
            <Entry>
              <Hours>9:30 - 9.55</Hours>
              <div>
                <h3>TBD</h3>
                <p>
                  <img src={aya} />
                  Aya Miyaguchi - Ethereum Foundation
                </p>
              </div>
            </Entry>
            <Entry>
              <Hours>10:00 - 10:25</Hours>
              <div>
                <h3>TBD</h3>
                <p>Skylar - Ethereum Foundation</p>
              </div>
            </Entry>
            <Entry>
              <Hours>10:30-10:55</Hours>
              <div>
                <h3>Entering the era of Web3 Social </h3>
                <p>
                  <img src={stani} />
                  Stani Kulechov - Lens
                </p>
              </div>
            </Entry>
            <Entry>
              <Hours>11:00 - 11:25</Hours>
              <div className="twoColumns">
                <div>
                  <p>Stage 1</p>
                  <h3>Identidad digital autosoberana</h3>
                  <p>
                    <img src={diego} /> Diego Fernández - GCBA
                  </p>
                </div>
                <div>
                  <p>Stage 2</p>
                  <h3>Producto y comunidad: evolución hacia web3</h3>
                  <p>
                    <img src={vicky} /> Vicky Guareschi - Lemon
                  </p>
                </div>
              </div>
            </Entry>
            <Entry>
              <Hours>11:30 -12:00</Hours>
              <div className="twoColumns">
                <div>
                  <p>Stage 1</p>
                  <h3>Legal Challenges for Web 3 projects</h3>
                  <p>Juan Manuel Campos Álvarez</p>
                </div>
                <div>
                  <p>Stage 2</p>
                  <h3>UNO: The future is multichain farming</h3>
                  <p>
                    <img src={adrian} /> Adrián Addesso - PieDAO
                  </p>
                </div>
              </div>
            </Entry>
            <Entry>
              <Hours>12:00 - 13:30</Hours>
              <div>
                <h3>
                  <FormattedHTMLMessage id="schedule.break" />
                </h3>
              </div>
            </Entry>
            <Entry>
              <Hours>13:30 -13:55</Hours>
              <div className="twoColumns">
                <div>
                  <p>Stage 1</p>
                  <h3>Panel: Crypto adoption in Latam</h3>
                  <p>
                    Marcelo Cavazzoli - Lemon / Manuel Beaudroit - Belo / Santos
                    Barrios - Letsbit / Julián Colombo - Bitso. <br /> Mod:
                    Olivia Goldschmidt
                  </p>
                </div>
                <div>
                  <p>Stage 2</p>
                  <h3>
                    Payroll y Treasury management: Los problemas de llevar las
                    finanzas en una compañía web3.0
                  </h3>
                  <p>Demian Drabyk - Wink</p>
                </div>
              </div>
            </Entry>
            <Entry>
              <Hours>14:00 - 14:25</Hours>
              <div className="twoColumns">
                <div>
                  <p>Stage 1</p>
                  <h3>It's web3 bitch</h3>
                  <p>
                    <img src={sebastian} />
                    Sebastián Serrano - Ripio
                  </p>
                </div>
                <div>
                  <p>Stage 2</p>
                  <h3>
                    Fundraising: No hay una sola forma de levantar capital
                  </h3>
                  <p>Juan Ignacio Gallo - Fund.it</p>
                </div>
              </div>
            </Entry>
            <Entry>
              <Hours>14:30- 14:55</Hours>
              <div className="twoColumns">
                <div>
                  <p>Stage 1</p>
                  <h3>TBD</h3>
                  <p>
                    <img src={will} /> Will Villanueva - Element Finance
                  </p>
                </div>
                <div>
                  <p>Stage 2</p>
                  <h3>Liquidity Mining, staking y lágrimas</h3>
                  <p>
                    <img src={nicolas} /> Nicolás Venturo - Balancer
                  </p>
                </div>
              </div>
            </Entry>
            <Entry>
              <Hours>15:00 -15:25</Hours>
              <div className="twoColumns">
                <div>
                  <p>Stage 1</p>
                  <h3>The Key to Fun: Identity & Reputation in Web3</h3>
                  <p>
                    <img src={evin} /> Evin Mc Mullen - Disco
                  </p>
                </div>
                <div>
                  <p>Stage 2</p>
                  <h3>
                    Squeeth Conmigo: Como Podemos Crear DeFi-native derivatives
                  </h3>
                  <p>
                    <img src={wade} /> Wadé - Opyn
                  </p>
                </div>
              </div>
            </Entry>
            <Entry>
              <Hours>15:30 - 15:55</Hours>
              <div className="twoColumns">
                <div>
                  <p>Stage 1</p>
                  <h3>Decentralizing the time value of money</h3>
                  <p>
                    <img src={gabriel} />
                    Gabriel Gruber - Exactly
                  </p>
                </div>
                <div>
                  <p>Stage 2</p>
                  <h3>Vyper + DeFi = 💘</h3>
                  <p>
                    <img src={gerrit} /> Gerrit - Vyper
                  </p>
                </div>
              </div>
            </Entry>
            <Entry>
              <Hours>16:00 - 16:25</Hours>
              <div className="twoColumns">
                <div>
                  <p>Stage 1</p>
                  <h3>Router proxies</h3>
                  <p>
                    <img src={alejandro} /> Alejandro Santander - Synthetix
                  </p>
                </div>
                <div>
                  <p>Stage 2</p>
                  <h3>
                    How to transition to Web3: why, what does it take, and how?
                  </h3>
                  <p>Renat Khasanshyn - Protofire</p>
                </div>
              </div>
            </Entry>
            <Entry>
              <Hours>16:30 -17:00</Hours>
              <div>
                <h3>TBD</h3>
                <p>
                  <img src={mariano} />
                  Mariano Conti
                </p>
              </div>
            </Entry>
          </Talks>
        </Day>
        <Day>
          <Date className="two">
            <h2>
              /<span className="pixel">02</span>
            </h2>
            <h3>Friday</h3>
            <h3>12th</h3>
          </Date>
          <Talks>
            <Entry>
              <Hours>10:30-11:00</Hours>
              <div className="twoColumns">
                <div>
                  <p>Stage 1</p>
                  <h3>Stablecoins: algorithms vs collateral</h3>
                  <p>
                    Mariano Di Pietrantonio - MakerDao / Benjamin - Qidao /
                    Stani Kulechov - Aave
                  </p>
                </div>
                <div>
                  <p>Stage 2</p>
                  <h3>Kleros</h3>
                  <p>Jean - Kleros</p>
                </div>
              </div>
            </Entry>
            <Entry>
              <Hours>11:00 - 11:25</Hours>
              <div className="twoColumns">
                <div>
                  <p>Stage 1</p>
                  <h3>
                    Hacks, rugs, lack of accountability, broken DAOs, and more.
                    How do we fix it?
                  </h3>
                  <p>
                    <img src={matiasN} /> Matías Niesenson - DeFi Wonderland
                  </p>
                </div>
                <div>
                  <p>Stage 2</p>
                  <h3>Descentralizando la sociedad</h3>
                  <p>
                    <img src={jose} />
                    José Alfonso Fabregas - Metis
                  </p>
                </div>
              </div>
            </Entry>
            <Entry>
              <Hours>11:30 -12:00</Hours>
              <div className="twoColumns">
                <div>
                  <p>Stage 1</p>
                  <h3>Identidad digital con Web3</h3>
                  <p>
                    <img src={damian} />
                    <img src={matias} />
                    Damian Schenkelman, Matias Woloski - Auth0
                  </p>
                </div>
                <div>
                  <p>Stage 2</p>
                  <h3>
                    Riesgos y seguridad en Crypto: análisis y plan de acción
                  </h3>
                  <p>Pablo Sabatella</p>
                </div>
              </div>
            </Entry>
            <Entry>
              <Hours>12:00 - 13:30</Hours>
              <div>
                <h3>
                  <FormattedHTMLMessage id="schedule.break" />
                </h3>
              </div>
            </Entry>
            <Entry>
              <Hours>13:30 -13:55</Hours>
              <div className="twoColumns">
                <div>
                  <p>Stage 1</p>
                  <h3>
                    Foundations for a New Internet: Why Web3 Infrastrucutre
                    Matters
                  </h3>
                  <p>
                    <img src={shannon} />
                    Shannon Wells - Livepeer
                  </p>
                </div>
                <div>
                  <p>Stage 2</p>
                  <h3>Privacy by design</h3>
                  <p>Tiago Sada - Worldcoin</p>
                </div>
              </div>
            </Entry>
            <Entry>
              <Hours>14:00 - 14:25</Hours>
              <div className="twoColumns">
                <div>
                  <p>Stage 1</p>
                  <h3>Building xChain Applications with Connext</h3>
                  <p>
                    <img src={arjun} />
                    Arjun - Connext
                  </p>
                </div>
                <div>
                  <p>Stage 2</p>
                  <h3>Oracles (Ke3per Network)</h3>
                  <p>
                    <img src={skeletor} />
                    Skeletor Spaceman - Defi Wonderland
                  </p>
                </div>
              </div>
            </Entry>
            <Entry>
              <Hours>14:30- 14:55</Hours>
              <div className="twoColumns">
                <div>
                  <p>Stage 1</p>
                  <h3>Why Web3 Communication Matters</h3>
                  <p>
                    <img src={harsh} /> Harsh Rajat - EPNS
                  </p>
                </div>
                <div>
                  <p>Stage 2</p>
                  <h3>Usable security in web3</h3>
                  <p>
                    <img src={antonela} /> Antonela Debiasi - Metamask
                  </p>
                </div>
              </div>
            </Entry>
            <Entry>
              <Hours>15:00 -15:25</Hours>
              <div className="twoColumns">
                <div>
                  <p>Stage 2</p>
                  <h3>
                    Nobody can handle the 24 words - A case for contract wallets
                  </h3>
                  <p>Agusx1211 - Horizon</p>
                </div>
              </div>
            </Entry>
            <Entry>
              <Hours>15:30 - 15:55</Hours>
              <div className="twoColumns">
                <div>
                  <p>Stage 1</p>
                  <h3>
                    Building the infrastructure for secure web3 operations
                  </h3>
                  <p>
                    <img src={santiago} />
                    Santiago Palladino - OpenZeppelin
                  </p>
                </div>
                <div>
                  <p>Stage 2</p>
                  <h3>TBD</h3>
                  <p>Brian - The Graph</p>
                </div>
              </div>
            </Entry>
            <Entry>
              <Hours>16:00 - 16:25</Hours>
              <div className="twoColumns">
                <div>
                  <p>Stage 1</p>
                  <h3>Past, Present, and Future of MEV</h3>
                  <p>
                    <img src={alejo} /> Alejo Salles - Flashbots
                  </p>
                </div>
                <div>
                  <p>Stage 2</p>
                  <h3>
                    Lessons learned running a validator in LATAM outside AWS
                  </h3>
                  <p>
                    <img src={rodrigo} />
                    Rodrigo Benzaquen - Sensei Node
                  </p>
                </div>
              </div>
            </Entry>
            <Entry>
              <Hours>16:30 -17:00</Hours>
              <div className="twoColumns">
                <div>
                  <p>Stage 1</p>
                  <h3>Slang: un nuevo compilador de Solidity</h3>
                  <p>
                    <img src={patricio} /> Patricio Palladino - Nomic Foundation
                  </p>
                </div>
                <div>
                  <p>Stage 2</p>
                  <h3>Relieving Moloch’s Curse</h3>
                  <p>
                    <img src={sxysun} /> Xinyuan Sun - Flashbots
                  </p>
                </div>
              </div>
            </Entry>
          </Talks>
        </Day>
        <Day>
          <Date className="three">
            <h2>
              /<span className="pixel">03</span>
            </h2>
            <h3>Saturday</h3>
            <h3>13th</h3>
          </Date>
          <Talks>
            <Entry>
              <Hours>13:30 -13:55</Hours>
              <div className="twoColumns">
                <div>
                  <p>Stage 1</p>
                  <h3>TBD</h3>
                  <p>
                    <img src={gino} />
                    Gino Cingolani Trucco - Decentraland
                  </p>
                </div>
                <div>
                  <p>Stage 2</p>
                  <h3>Exprésate! Identidad evolutiva on-chain y NFTs para atraer a la próxima generación de usuarios a Web3</h3>
                  <p>Nahuel Burbach - Zerion</p>
                </div>
              </div>
            </Entry>
            <Entry>
              <Hours>14:00 - 14:25</Hours>
              <div className="twoColumns">
                <div>
                  <p>Stage 1</p>
                  <h3>
                    Fireside Chat Game Disease: Explorá la verdadera naturaleza
                    del universo NFT
                  </h3>
                  <p>
                    <img src={siesta} />
                    Frenetik Void, Milton Sanz, Siesta
                  </p>
                </div>
                <div>
                  <p>Stage 2</p>
                  <h3>
                    Exprésate! Identidad evolutiva on-chain y NFTs para atraer a
                    la próxima generación de usuarios a Web3
                  </h3>
                  <p>
                    <img src={nahuel} />
                    Nahuel Burbach - Zerion
                  </p>
                </div>
              </div>
            </Entry>
            <Entry>
              <Hours>14:30- 14:55</Hours>
              <div className="twoColumns">
                <div>
                  <p>Stage 1</p>
                  <h3>
                    Axie Infinity revoluciona el metaverso: NFTs, Web3 y Play&Earn
                  </h3>
                  <p>
                    <img src={fernanda} /> Fernanda Dixon - Axie
                  </p>
                </div>
                <div>
                  <p>Stage 2</p>
                  <h3>Panel: Music NFTs</h3>
                  <p>Enigma / sweetman.eth / Nicolás Madoery / Sebas</p>
                </div>
              </div>
            </Entry>
            <Entry>
              <Hours>15:00 -15:25</Hours>
              <div className="twoColumns">
                <div>
                  <p>Stage 1</p>
                  <h3>
                    The Infinite Machine Movie: la intersección de Hollywood y
                    NFTs
                  </h3>
                  <p>
                    <img src={camilaR} />
                    Camila Russo - The Defiant
                  </p>
                </div>
                <div>
                  <p>Stage 2</p>
                  <h3>
                    What it means to have a digital web3 identity: doxxed, anon
                    or a mix.
                  </h3>
                  <p>White Chocolate - Hashmasks</p>
                </div>
              </div>
            </Entry>
            <Entry>
              <Hours>15:30 - 15:55</Hours>
              <div className="twoColumns">
                <div>
                  <p>Stage 1</p>
                  <h3>4 años minteando soulbound tokens</h3>
                  <p>
                    <img src={patricioW} />
                    Patricio Worthalter - POAP
                  </p>
                </div>
                <div>
                  <p>Stage 2</p>
                  <h3>Play-and-Earn Gaming in the Hispanic markets</h3>
                  <p>Martin Blaquier</p>
                </div>
              </div>
            </Entry>
            <Entry>
              <Hours>16:00 - 16:25</Hours>
              <div className="twoColumns">
                <div>
                  <p>Stage 1</p>
                  <h3>Ethereum Q&A</h3>
                  <p>TBC</p>
                </div>
                <div>
                  <p>Stage 2</p>
                  <h3>
                    Mint your first music NFT with Zora V3, 0xSplits & Lens
                    Protocol
                  </h3>
                  <p>sweetman.eth - Mintsongs</p>
                </div>
              </div>
            </Entry>
            <Entry>
              <Hours>16:30 -17:00</Hours>
              <div className="twoColumns">
                <div>
                  <p>Stage 1</p>
                  <h3>Cierre</h3>
                </div>
              </div>
            </Entry>
          </Talks>
        </Day>
      </Container>
    </ScheduleSection>
  )
}

const ScheduleSection = styled.section`
  background: #0b0c0d;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: 40% 0%;
  color: #4d4d4d;
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
    @media only screen and (max-width: 1100px) {
      font-size: ${props => (props.locale == 'pt' ? '40px' : '44px')};
      line-height: 45px;
      margin-bottom: 73px;
    }
  }
  span.pixel {
    font-family: 'Pixel';
  }
`

const Talks = styled.div`
  width: calc(100% - 226px);
  background: #0b0c0d;
  @media only screen and (max-width: 1100px) {
    width: 100%;
  }
`

const Hours = styled.p`
  width: 160px;
  min-width: 160px;
  @media only screen and (max-width: 1100px) {
    padding-bottom: 30px;
  }
`

const Container = styled.div`
  max-width: 1440px;
  padding: 0 40px 160px 40px;
  @media only screen and (max-width: 1100px) {
    padding: 0 15px 80px 15px;
  }
  @media only screen and (min-width: 1440px) {
    margin: 0 auto;
  }
  text-align: left;
  padding-bottom: 160px;
`

const Day = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  outline: 1px solid #4d4d4d;
  max-width: 1222px;
  @media only screen and (max-width: 1100px) {
    max-width: 90%;
    flex-direction: column;
  }

  margin-right: 0;
  margin-left: auto;
  margin-bottom: 100px;
  flex-wrap: wrap;
`
const Entry = styled.div`
  padding: 24px;
  display: flex;
  @media only screen and (max-width: 1100px) {
    padding: 15px;
    flex-direction: column;
  }
  border-bottom: 1px solid #4d4d4d;
  img {
    width: 20px;
    height: 20px;
    border-radius: 100px;
    object-fit: cover;
    margin-right: 7px;
  }
  .twoColumns {
    display: grid;
    width: calc(100% - 160px);
    grid-template-columns: 50% 50%;
    column-gap: 30px;
    @media only screen and (max-width: 1100px) {
      grid-template-columns: 100%;
      width: 100%;
      row-gap: 30px;
    }
  }
  p {
    font-family: 'Helvetica';
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #8c8c8c;
    margin: 0;
    padding-right: 5px;
  }
  h3 {
    font-family: 'Helvetica-Bold';
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #e3e3e3;
    margin-top: 0;
    margin-bottom: 10px;
    padding-right: 5px;
  }
`

const Date = styled.div`
  width: 226px;
  @media only screen and (max-width: 1100px) {
    width: 100%;
  }
  @media only screen and (max-width: 900px) {
    padding-bottom: 15px;
  }
  background: #3388ff;
  &.one {
    background: #e573e5;
  }
  &.three {
    background: #80ff9f;
  }
  color: #0b0c0d;
  h2 {
    font-family: Helvetica;
    font-size: 120px;
    line-height: 144px;
    padding: 16px;
    margin: 24px auto 0 auto;
    text-transform: uppercase;
    span.pixel {
      font-family: 'Pixel';
    }
    @media only screen and (max-width: 900px) {
      font-size: 60px;
      line-height: 45px;
      margin: 15px auto 0 auto;
    }
  }
  h3 {
    font-family: 'Helvetica-Bold';
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    text-transform: uppercase;
    margin: 0;
    padding-left: 16px;

  }
`

export default Schedule
