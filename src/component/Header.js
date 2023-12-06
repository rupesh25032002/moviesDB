import React from 'react'
import { Navbar } from './Navbar'
import styled from 'styled-components'

export const Header = () => {
  return (
    <Wrapper>
        <Navbar/>
    </Wrapper>
  )
}

const Wrapper=styled.header`
background-color: #190f4f;
max-width: 1800px;
margin: auto;
position: relative;
z-index: 111;
`
