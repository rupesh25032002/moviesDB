import React from 'react'
import styled from 'styled-components'

const Loader = () => {
  return (
    <Wrapper>
        <div>Loading...</div>
    </Wrapper>
  )
}

export default Loader

const Wrapper=styled.div`
display: flex;
justify-content: center;
align-items: center;
font-size: 25px;
background-color: #060619;
color: white;
height: 90vh;
`