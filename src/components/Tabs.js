import React, { useState, useEffect } from 'react'
import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'

const Tabs = ({ mode }) => {
  return (
    <TabsBox mode={mode}>
      <a href="#about">
        <FormattedMessage id="navbar.about" />
      </a>
      <a href="#speakers">
        <FormattedMessage id="navbar.speakers" />
      </a>
      <a href="#sponsors">
        <FormattedMessage id="navbar.sponsors" />
      </a>
      <a href="#venue">
        <FormattedMessage id="navbar.venue" />
      </a>
      <a href="#schedule">
        <FormattedMessage id="navbar.schedule" />
      </a>
      <a href="#theOtherSide">
        Side events
      </a>
      <a href="#faqs">
        <FormattedMessage id="navbar.faqs" />
      </a>
    </TabsBox>
  )
}

const TabsBox = styled.div`
  display: ${props => (props.mode == 'large' ? 'flex' : 'block')};
  margin: 0 auto;
  text-align: center;
  a {
    font-family: 'Helvetica';
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    text-transform: uppercase;
    text-decoration: none;
    color: #4d4d4d;
    text-align: left;
    padding: ${props => (props.mode == 'large' ? '0 10px' : '25px 0')};
    background: transparent;
    border: 0px solid;
    display: block;
    margin: auto;
    height: 38px;
    display: flex;
    align-items: center;
    &:hover,
    &:active,
    &:focus {
      border-bottom: solid 4px #80ff9f;
    }
  }
`

export default Tabs
