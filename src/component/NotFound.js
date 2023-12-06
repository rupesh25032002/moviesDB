import React from 'react'
import styled from 'styled-components'
const NotFound = () => {
  return (
    <Wrapper>
     <h2>No Movie Available</h2>
    </Wrapper>
  )
}

export default NotFound

const Wrapper=styled.div`
display: flex;
justify-content: center;
align-items: center;
font-size: 25px;
background-color: #060619;
color: white;
height: 90vh;
`;