import React from 'react'
import styled from "styled-components"
import { NavLink } from 'react-router-dom';
const Moviecard = (props) => {
    const {original_title,vote_average,poster_path,id}=props?.movieDetail;
    // console.log(props)
  return (
   <Wrapper>
    <NavLink to={{
        pathname: `/movie-detail/${id}`,
        state: { data: {name:"ram"} }
      }}>
    <div className='img-container'>
    <img src={"https://image.tmdb.org/t/p/w500"+poster_path} alt=''/>
    </div>
    <p className='title'>{original_title}</p>
    <p className='rating'>{vote_average.toFixed(1)}</p>
    </NavLink>
   </Wrapper>

  )
}

export default Moviecard

const Wrapper=styled.div`
box-shadow: 1px 1px 5px white;
a{
    text-decoration: none;
}
/* border: 2px solid; */
max-width: 300px;
min-width: 300px;
min-height: 560px;
margin: 10px 0;
padding: 5px ;
.img-container{
    min-height:400px;
    img{
        width: 100%;
        object-fit: cover;
    }
}
.title{
  font-size: 18px;
  margin: 0;
  text-decoration:none;
  color: #9a13a3;
    font-weight: bold;
}
.rating{
  font-size: 16px;
  margin: 0;
  text-decoration:none;
  color: #967a97;
    font-weight: bold;
}
@media (max-width:450px) {
    max-width: 270px;
    min-width: 270px;   
}
`;