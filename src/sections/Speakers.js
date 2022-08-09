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
import jose from '../assets/speakers2/jose.jpg'
import marcelo from '../assets/speakers2/marcelo.jpg'
import sebastian from '../assets/speakers2/sebastian.jpeg'
import nicolas from '../assets/speakers2/nicolas.jpg'
import julien from '../assets/speakers2/julien.jpeg'
import fernanda from '../assets/speakers2/fernanda.jpeg'
import alejo from '../assets/speakers2/alejo.jpeg'
import alejoL from '../assets/speakers2/alejoL.jpg'
import patricioW from '../assets/speakers2/patricioW.jpg'
import skeletor from '../assets/speakers2/skeletor.jpg'
import aya from '../assets/speakers2/aya.jpeg'
import arjun from '../assets/speakers2/arjun.jpeg'
import rodrigo from '../assets/speakers2/rodrigo.jpg'
import manuel from '../assets/speakers2/manuel.jpg'
import nahuel from '../assets/speakers2/nahuel.JPG'
import demianD from '../assets/speakers2/demianD.jpg'
import harsh from '../assets/speakers2/harsh.jpeg'
import julian from '../assets/speakers2/julian.jpg'
import matiasN from '../assets/speakers2/matiasN.jpg'
import oli from '../assets/speakers2/oli.jpeg'
import antonela from '../assets/speakers2/antonela.png'
import vicky from '../assets/speakers2/vicky.jpeg'
import gino from '../assets/speakers2/gino.jpeg'
import adrian from '../assets/speakers2/adrian.jpeg'
import diego from '../assets/speakers2/diego.jpeg'
import juanManuel from '../assets/speakers2/juanManuel.png'
import evin from '../assets/speakers2/evin.jpg'
import henry from '../assets/speakers2/henry.jpg'
import wade from '../assets/speakers2/wade.jpeg'
import sxysun from '../assets/speakers2/sxysun.jpg'
import shannon from '../assets/speakers2/shannon.jpeg'
import pablo from '../assets/speakers2/pablo.jpg'
import agusx1211 from '../assets/speakers2/agusx1211.jpg'
import renat from '../assets/speakers2/renat.jpg'
import lucas from '../assets/speakers2/lucas.jpg'
import cristian from '../assets/speakers2/cristian.jpg'
import juani from '../assets/speakers2/juani.jpg'
import maxi from '../assets/speakers2/maxi.jpeg'
import patricioM from '../assets/speakers2/patricioM.jpg'
import wei3erHase from '../assets/speakers2/wei3erHase.jpg'
import skylar from '../assets/speakers2/skylar.jpg'
import santos from '../assets/speakers2/santos.jpg'
import ohad from '../assets/speakers2/ohad.jpg'
import evan from '../assets/speakers2/evan.jpeg'
import whiteChocolate from '../assets/speakers2/whiteChocolate.png'

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
          <BoxItem className="vip">
            <Content
              target="_blank"
              href="https://twitter.com/AyaMiyagotchi"
              className="vipContent"
            >
              <img src={aya} style={{ objectPosition: '100% 20%' }} />
              <div>
                <h1>Aya Miyaguchi</h1>
                <h2>Ethereum Foundation</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="vip">
            <Content
              target="_blank"
              href="https://twitter.com/worthalter"
              className="vipContent"
            >
              <img style={{ objectPosition: '100% 20%' }} src={patricioW} />
              <div>
                <h1>Patricio Worthalter</h1>
                <h2>POAP</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/jnptzl"
              className="importantPersonContent"
            >
              <img src={oxjean} />
              <div>
                <h1>0XJEAN.ETH</h1>
                <h2>Kleros</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/CamiRusso"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 20%' }} src={camilaR} />
              <div>
                <h1>CAMILA RUSSO</h1>
                <h2>The Defiant</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/OhadBarta"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 36%' }} src={ohad} />
              <div>
                <h1>Ohad Barta</h1>
                <h2>Starkware</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/DemianDrabyk"
              className="importantPersonContent"
            >
              <img src={demianD} />
              <div>
                <h1>Demian Drabyk</h1>
                <h2>Wink</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://www.linkedin.com/company/think-and-dev-llc/about/"
              className="importantPersonContent"
            >
              <img src={lucas} />
              <div>
                <h1>Lucas Marc</h1>
                <h2>Think and Dev</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/donosonaumczuk"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 36%' }} src={alan} />
              <div>
                <h1>Alan Donoso Naumczuk</h1>
                <h2>Aave Companies</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/mrnventuro"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 70%' }} src={nicolas} />
              <div>
                <h1>Nicolas Venturo</h1>
                <h2>Balancer</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/santos_barrio"
              className="importantPersonContent"
            >
              <img  src={santos} />
              <div>
                <h1>Santos Barrios</h1>
                <h2>Letsbit</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/nad8802"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 20%' }} src={nadia} />
              <div>
                <h1>Nadia Alvarez</h1>
                <h2>MakerDAO</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/the_ethernaut"
              className="importantPersonContent"
            >
              <img src={alejandro} />
              <div>
                <h1>Alejandro Santander</h1>
                <h2>Synthetix</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/dschenkelman"
              className="importantPersonContent"
            >
              <img src={damian} />
              <div>
                <h1>Damian Schenkelman</h1>
                <h2>Auth0</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/frenetikvoid"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 40%' }} src={siesta} />
              <div>
                <h1>Frenetik Void</h1>
                <h2>Game Disease</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/rbenzaquen"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 30%' }} src={rodrigo} />
              <div>
                <h1>Rodrigo Benzaquen</h1>
                <h2>Sensei Node</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/camiinthisthang"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 40%' }} src={camila} />
              <div>
                <h1>Camila Ramos</h1>
                <h2>Edge&Node</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="vip">
            <Content
              target="_blank"
              href="https://twitter.com/skylar_eth"
              className="vipContent"
            >
              <img src={skylar} style={{ objectPosition: '100% 40%' }} />
              <div>
                <h1>Skylar</h1>
                <h2>Ethereum Foundation</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/alcuadrado"
              className="importantPersonContent"
            >
              <img src={patricio} />
              <div>
                <h1>Patricio Palladino</h1>
                <h2>Nomic Foundation</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/martriay"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 60%' }} src={martin} />
              <div>
                <h1>Martín Triay</h1>
                <h2>OpenZeppelin</h2>
              </div>
            </Content>
          </BoxItem>

          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/cryptochica_arg"
              className="importantPersonContent"
            >
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
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/mbeaudroit"
              className="importantPersonContent"
            >
              <img src={manuel} />
              <div>
                <h1>Manuel Beaudroit</h1>
                <h2>Belo</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="vip">
            <Content
              target="_blank"
              href="https://twitter.com/StaniKulechov"
              className="vipContent"
            >
              <img style={{ objectPosition: '100%' }} src={stani} />
              <div>
                <h1>Stani Kulechov</h1>
                <h2>Aave Companies</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="vip">
            <Content
              target="_blank"
              href="https://twitter.com/nanexcool"
              className="vipContent"
            >
              <img src={mariano} />
              <div>
                <h1>Mariano Conti</h1>
                <h2>Good Guy</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/GabrielGruber"
              className="importantPersonContent"
            >
              <img src={gabriel} />
              <div>
                <h1>Gabriel Gruber</h1>
                <h2>Exactly Finance</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="vip">
            <Content
              target="_blank"
              href="https://twitter.com/sserrano44"
              className="vipContent"
            >
              <img src={sebastian} />
              <div>
                <h1>Sebastián Serrano</h1>
                <h2>Ripio</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/lemoncheli"
              className="importantPersonContent"
            >
              <img src={marcelo} />
              <div>
                <h1>Marcelo Cavazzoli</h1>
                <h2>Lemon</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="vip">
            <Content
              target="_blank"
              href="https://twitter.com/fernandezdiego"
              className="vipContent"
            >
              <img src={diego} style={{ objectPosition: '100% 33%' }}/>
              <div>
                <h1>Diego Fernandez</h1>
                <h2>Ciudad de Buenos Aires</h2>
              </div>
            </Content>
          </BoxItem>

          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/FernandaDixon3"
              className="importantPersonContent"
            >
              <img src={fernanda} />
              <div>
                <h1>Fernanda Dixon</h1>
                <h2>Axie Infinity</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/wei3erHase"
              className="importantPersonContent"
            >
              <img src={wei3erHase} />
              <div>
                <h1>Wei3erHase</h1>
                <h2>Defi Wonderland</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/fiiiu_"
              className="importantPersonContent"
            >
              <img src={alejo} />
              <div>
                <h1>Alejo Salles</h1>
                <h2>Flashbots</h2>
              </div>
            </Content>
          </BoxItem>

          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/josefabregab"
              className="importantPersonContent"
            >
              <img  src={jose} />
              <div>
                <h1>José Alfonso Fabrega</h1>
                <h2>Metis</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/bneiluj"
              className="importantPersonContent"
            >
              <img src={julien} />
              <div>
                <h1>Julien Bouteloup</h1>
                <h2>Rekt</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/woloski"
              className="importantPersonContent"
            >
              <img src={matias} />
              <div>
                <h1>Matias Woloski</h1>
                <h2>Auth0</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/nahbur"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 20%' }} src={nahuel} />
              <div>
                <h1>Nahuel Burbach</h1>
                <h2>Zerion</h2>
              </div>
            </Content>
          </BoxItem>

          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/arjunbhuptani"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 40%' }} src={arjun} />
              <div>
                <h1>Arjun Bhuptani</h1>
                <h2>Connext</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/WhiteChocoHashy"
              className="importantPersonContent"
            >
              <img src={whiteChocolate} />
              <div>
                <h1>White Chocolate</h1>
                <h2>Hashmasks</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/Skeletor_Space"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 40%' }} src={skeletor} />
              <div>
                <h1>Skeletor Spaceman</h1>
                <h2>Wonderland</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="vip">
            <Content
              target="_blank"
              href="https://twitter.com/smpalladino"
              className="vipContent"
            >
              <img src={santiago} />
              <div>
                <h1>Santiago Palladino</h1>
                <h2>OpenZeppelin</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/harshrajat"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 40%' }} src={harsh} />
              <div>
                <h1>Harsh Rajat</h1>
                <h2>EPNS</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/holantonela"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 40%' }} src={antonela} />
              <div>
                <h1>Antonela Debiasi</h1>
                <h2>Metamask</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/julian_colombo"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 40%' }} src={julian} />
              <div>
                <h1>Julián Colombo</h1>
                <h2>Bitso</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="vip">
            <Content
              target="_blank"
              href="https://twitter.com/ginocingolani"
              className="vipContent"
            >
              <img style={{ objectPosition: '100% 40%' }} src={gino} />
              <div>
                <h1>Gino Cingolani Trucco</h1>
                <h2>Decentraland</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/oligold_"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 20%' }} src={oli} />
              <div>
                <h1>Olivia Goldschmidt</h1>
                <h2>Periodista</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/AddessoAdrian"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 40%' }} src={adrian} />
              <div>
                <h1>Adrián Addesso</h1>
                <h2>PieDAO</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/vickyguareschi"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 40%' }} src={vicky} />
              <div>
                <h1>Vicky Guareschi</h1>
                <h2>Lemon</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/MatiasNisenson"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 20%' }} src={matiasN} />
              <div>
                <h1>Matias Nisenson</h1>
                <h2>Wonderland</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/provenauthority"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 20%' }} src={evin} />
              <div>
                <h1>Evin Mc Mullen</h1>
                <h2>Disco</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/wadepros"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 20%' }} src={wade} />
              <div>
                <h1>Wadé</h1>
                <h2>Opyn</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/shanvasion"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 20%' }} src={shannon} />
              <div>
                <h1>Shannon Wells</h1>
                <h2>Livepeer</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/henrydpalacios"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 20%' }} src={henry} />
              <div>
                <h1>Henry Palacios</h1>
                <h2>Protofire</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/sxysun1"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 20%' }} src={sxysun} />
              <div>
                <h1>Xinyuan Sun</h1>
                <h2>Flashbots</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/PabloSabbatella"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 50%' }} src={pablo} />
              <div>
                <h1>Pablo Sabbatella</h1>
                <h2>Defy Education</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="vip">
            <Content
              target="_blank"
              href="https://mobile.twitter.com/evan_van_ness"
              className="vipContent"
            >
              <img src={evan} style={{ objectPosition: '100% 30%' }} />
              <div>
                <h1>Evan Van Ness</h1>
                <h2>Starbloom</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/agusx1211"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 50%' }} src={agusx1211} />
              <div>
                <h1>Agusx1211</h1>
                <h2>Horizon</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/renatco"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 50%' }} src={renat} />
              <div>
                <h1>Renat</h1>
                <h2>Protofire</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://www.linkedin.com/in/juan-manuel-campos-alvarez-syls/"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 20%' }} src={juanManuel} />
              <div>
                <h1>Juan Manuel Campos A</h1>
                <h2>Salaberren y Lopez Sanson</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/maxidbustos"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 50%' }} src={maxi} />
              <div>
                <h1>Maxi Bustos</h1>
                <h2>Futureswap</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/patriciomolina"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 50%' }} src={patricioM} />
              <div>
                <h1>Patricio Molina</h1>
                <h2>Exactly</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://www.linkedin.com/company/think-and-dev-llc/about/"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 50%' }} src={alejoL} />
              <div>
                <h1>Alejo Lovallo</h1>
                <h2>Think and Dev</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/JuaniGallo"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 30%' }} src={juani} />
              <div>
                <h1>Juani Gallo</h1>
                <h2>Fund.it</h2>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/CristianMalfesi"
              className="importantPersonContent"
            >
              <img  src={cristian} />
              <div>
                <h1>Cristian Malfesi</h1>
                <h2>Protofire</h2>
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
  outline: 1px solid #4d4d4d;
  margin-right: 0;
  margin-left: auto;
  column-count: 4;
  max-width: 1040px;
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
  outline: 1px solid #4d4d4d;
  &.vip1 {
    height: 228px;
  }
  &.vip {
    height: 152px;
  }
  &.importantPerson {
    height: 76px;
  }
`
const Content = styled.a`
  overflow: hidden;
  text-decoration: none;
  @media only screen and (min-width: 701px) {
    width: 260px;
  }
  div {
    max-width: 100%;
  }
  img {
    height: 44px;
    padding: 16px;
    object-fit: cover;
    @media only screen and (max-width: 1135px) {
      padding: 13px;
    }
    @media only screen and (max-width: 540px) {
      padding: 13px;
    }
  }
  &.importantPersonContent {
    display: flex;
    align-items: center;
    img {
      height: 44px;
      width: 44px;
      object-fit: cover;
      object-position: center;
      padding: 14px 16px;
      @media only screen and (max-width: 540px) {
        padding: 11px 13px;
      }
    }
  }
  &.vip1Content {
    display: inline-block;
    h1,
    h2 {
      padding-left: 16px;
    }
    @media only screen and (max-width: 540px) {
      width: 100%;
    }
    img {
      height: 147px;
      @media only screen and (max-width: 540px) {
        width: calc(100% - 26px);
        object-fit: cover;
        object-position: 50% 20%;
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
      height: 71px;
      width: 228px;
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
