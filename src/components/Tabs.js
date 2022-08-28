import React, { useState, useEffect } from 'react'
import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'
import Dropdown from 'react-dropdown'

const Tabs = ({ mode }) => {
  
  const [isDropDownOpen, setIsDropDownOpen] = useState(false)
  const [subDropDown, setSubDropDown] = useState(false)
  const showDropDown = () => {
    setIsDropDownOpen(true)
  }

  const hideDropDown = () => {
    if (subDropDown) {
      setIsDropDownOpen(true)
    } else {
      setIsDropDownOpen(false)
    }
  }


  const _onSelect = (option) => {
    console.log('You selected ', option.label)
    this.setState({selected: option})
  }
  const setAllStateToFalse = () => {
    setIsDropDownOpen(false)
    setSubDropDown(false)
  }
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
      <a href="#agenda">
        <FormattedMessage id="navbar.schedule" />
      </a>
      <a href="#theOtherSide">Side events</a>
      <a href="#faqs">
        <FormattedMessage id="navbar.faqs" />
      </a>
    

      <a
        onMouseOver={() => showDropDown()}
        onMouseLeave={() => hideDropDown()}
      >
        <span>Editions</span>
      </a>
      {isDropDownOpen && (
        <div
          className="dropdown-div"
          onMouseEnter={() => setSubDropDown(true)}
          onMouseLeave={() => setAllStateToFalse()}
        >
          <a href="/buenos-aires">Buenos Aires</a>
          <a href="/">Bogotá</a>
        </div>
      )}
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
    padding: ${props => (props.mode == 'large' ? '0 13px' : '20px 0')};
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

  .dropdown-div {
    position: 'fixed';
    margin-top: 15%;
    margin-left: -14%;
  }

  .dropdown-div > a {
    color: white !important;
  }
`

export default Tabs
