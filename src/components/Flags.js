import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import arg from '../assets/arg.svg'
import brz from '../assets/brz.svg'
import bog from '../assets/colombia.svg'
import eeuu from '../assets/eeuu.svg'

const GetTickets = () => {
  const changeLanguage = lang => {
    if (typeof window.localStorage !== 'undefined') {
      localStorage.setItem('locale', lang)
    }
    window.location.reload()
  }
  const edition = localStorage.getItem('edition')

  const locale =
    typeof window.localStorage !== 'undefined'
      ? localStorage.getItem('locale')
      : 'en'

  return (
    <FlagBox>
      <FlagButton
        className={locale == 'es' ? 'active' : ''}
        onClick={() => {
          changeLanguage('es')
        }}
      >
        <img src={edition === 'bogota' ? bog : arg} />
      </FlagButton>
      <FlagButton
        className={locale == 'pt'  ? 'active' : ''}
        onClick={() => {
          changeLanguage('pt')
        }}
      >
        <img src={brz} />
      </FlagButton>
      <FlagButton
        className={locale == 'en'  ? 'active' : ''}
        onClick={() => {
          changeLanguage('en')
        }}
      >
        <img src={eeuu} />
      </FlagButton>
    </FlagBox>
  )
}

const FlagButton = styled.button`
  border: 0px solid;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 0;
  border-bottom: 4px solid transparent;
  img {
    height: 36px;
  }
  &.active {
    border-bottom: 4px solid #80ff9f;
  }
`

const FlagBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`

export default GetTickets
