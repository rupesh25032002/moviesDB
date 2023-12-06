import React from 'react'
import styled from 'styled-components'
const Castcard = (props) => {
    const { name, character, profile_path } = props?.castData;
    return (
        <Wrapper>
            <div>
                <img src={profile_path ? `https://image.tmdb.org/t/p/w500/${profile_path}` : "../profilepic.jpg"} alt={name} />
            </div>
            <p>{name}</p>
            <p>Character : {character === "" ? "Not Known" : character}</p>
        </Wrapper>
    )
}
export default Castcard

const Wrapper = styled.div`
width: 300px;
margin: 0 5px;
border-radius: 5px;
padding: 5px;
p{
    margin: 0;
    font-size: 16px;
    &:nth-child(2){
        font-weight: bold;
        font-size: 18px;
    }
    &:last-child{
        font-weight: bold;
        font-size: 16px;
        color: grey;
    }
}
    img{
        width: 100%;
    }

    &:hover{
        background-color: #dbd9d9;
    }
    `;