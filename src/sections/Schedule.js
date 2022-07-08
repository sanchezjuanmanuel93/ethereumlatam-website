import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FormattedHTMLMessage } from 'react-intl'
import background from '../assets/Mask.svg'
import alan from '../assets/speakers2/alan.jpg'
import santiago from '../assets/speakers2/santiago.jpeg'


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
    <ScheduleSection id="media" locale={locale}>
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
              <Hours>11:30 - 12:00</Hours>
              <div>
                <h3>Welcome & registration</h3>
              </div>
            </Entry>
            <Entry>
              <Hours>11:30 - 12:00</Hours>
              <div>
                <h3>Building a Basic Inncome Token with Polygon</h3>
                <p>
                  <img src={alan} />
                  <img src={santiago} />
                  Patricio Palladino, Austin Griffith
                </p>
              </div>
            </Entry>
            <Entry>
              <Hours>11:30 - 12:00</Hours>
              <div>
                <h3>Building a Basic Inncome Token with Polygon</h3>
                <p>Patricio Palladino, Austin Griffith</p>
              </div>
            </Entry>
            <Entry>
              <Hours>11:30 - 12:00</Hours>
              <div>
                <h3>Building a Basic Inncome Token with Polygon</h3>
                <p>Patricio Palladino, Austin Griffith</p>
              </div>
            </Entry>
            <Entry>
              <Hours>11:30 - 12:00</Hours>
              <div>
                <h3>Building a Basic Inncome Token with Polygon</h3>
                <p>Patricio Palladino, Austin Griffith</p>
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
              <Hours>11:30 - 12:00</Hours>
              <div>
                <h3>Building a Basic Inncome Token with Polygon</h3>
                <p>Patricio Palladino, Austin Griffith</p>
              </div>
            </Entry>
            <Entry>
              <Hours>11:30 - 12:00</Hours>
              <div>
                <h3>Building a Basic Inncome Token with Polygon</h3>
                <p>Patricio Palladino, Austin Griffith</p>
              </div>
            </Entry>
            <Entry>
              <Hours>11:30 - 12:00</Hours>
              <div>
                <h3>Building a Basic Inncome Token with Polygon</h3>
                <p>Patricio Palladino, Austin Griffith</p>
              </div>
            </Entry>
            <Entry>
              <Hours>11:30 - 12:00</Hours>
              <div>
                <h3>Building a Basic Inncome Token with Polygon</h3>
                <p>Patricio Palladino, Austin Griffith</p>
              </div>
            </Entry>
            <Entry>
              <Hours>11:30 - 12:00</Hours>
              <div>
                <h3>Building a Basic Inncome Token with Polygon</h3>
                <p>Patricio Palladino, Austin Griffith</p>
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
              <Hours>11:30 - 12:00</Hours>
              <div>
                <h3>Building a Basic Inncome Token with Polygon</h3>
                <p>Patricio Palladino, Austin Griffith</p>
              </div>
            </Entry>
            <Entry>
              <Hours>11:30 - 12:00</Hours>
              <div>
                <h3>Building a Basic Inncome Token with Polygon</h3>
                <p>Patricio Palladino, Austin Griffith</p>
              </div>
            </Entry>
            <Entry>
              <Hours>11:30 - 12:00</Hours>
              <div>
                <h3>Building a Basic Inncome Token with Polygon</h3>
                <p>Patricio Palladino, Austin Griffith</p>
              </div>
            </Entry>
            <Entry>
              <Hours>11:30 - 12:00</Hours>
              <div>
                <h3>Building a Basic Inncome Token with Polygon</h3>
                <p>Patricio Palladino, Austin Griffith</p>
              </div>
            </Entry>
            <Entry>
              <Hours>19:00</Hours>
              <div>
                <h3>After Party</h3>
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
    @media only screen and (max-width: 700px) {
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
`

const Hours = styled.p`
  width: 160px;
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

const Day = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  outline: 1px solid #4d4d4d;
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
  margin-bottom: 100px;
  flex-wrap: wrap;
`
const Entry = styled.div`
  padding: 24px;
  display: flex;
  border-bottom: 1px solid #4d4d4d;
  img {
    width: 20px;
    height: 20px;
    border-radius: 100px;
    object-fit: cover;
    margin-right: 7px;
  }
  p {
    font-family: 'Helvetica';
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #8c8c8c;
    margin: 0;
  }
  h3 {
    font-family: 'Helvetica-Bold';
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #e3e3e3;
    margin-top: 0;
    margin-bottom: 10px;
  }
`

const Date = styled.div`
  width: 226px;
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
