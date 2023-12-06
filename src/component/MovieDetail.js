import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import  axios  from 'axios'
import styled from 'styled-components'
import Castcard from './Castcard'
import Loader from './Loader'
const MovieDetail = () => {
 const {id}=useParams()
 const [singleData,setSingleData]=useState()
 const [castDetail,setCastDetail]=useState()
 const [isLoad,setIsLoad]=useState(false)
 const getSingleMovieData=async()=>{
  try{
      setIsLoad(false)
     const allMovies=await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`);
     const allCast=await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`);
      setIsLoad(true)
     setSingleData(allMovies?.data)
     setCastDetail(allCast?.data?.cast)
  }
  catch(err){
      console.log("error")
}
}
 useEffect(()=>{
  getSingleMovieData()
 },[])

 useEffect(()=>{
 console.log(singleData)
 console.log(castDetail)
 },[singleData])
  return (
    <>
    {isLoad
    ?
    <>
    <Wrapper backgroundPoster={`https://image.tmdb.org/t/p/w500/${singleData?.backdrop_path}`}>
      <div>
           <div className='poster-container'>
            <div className='poster-image'>
              <img src={`https://image.tmdb.org/t/p/w500/${singleData?.poster_path}`} alt=''/>
            </div>
            <div className='poster-detail'>
              <h2 className='title'>{singleData?.original_title}</h2>
              <p>Rating : {singleData?.vote_average}</p>
              <div className='duration'>
                <p className='duration-time'>{singleData?.runtime} min</p>
                <p className='movietypes'>{singleData?.genres?.map((val)=>{
                  return `${val?.name} , `
                })}</p>
                </div>
              <p>Released Date : {singleData?.release_date}</p>
            </div>
           </div>
           <div className='overview'>
            <h3>OVERVIEW</h3>
            <p>{singleData?.overview}</p>
           </div>
      </div>
    </Wrapper>
      <CastWrapper >
        
        <div className='cast-title'><h2>CAST</h2></div>
        <div className='cast-container'>
        {
          castDetail?.map((val)=>{
            return <Castcard castData={val}/>
          })
        }
        </div>
      </CastWrapper>
      </>
      :
      <Loader/>
    }
    </>
  )
}

export default MovieDetail

const Wrapper=styled.div`
max-width: 1800px;
margin: auto;
padding: 10px;
height: 400px;
/* border: 2px solid red; */
background:  ${({backgroundPoster})=>`url(${backgroundPoster})`}   top center repeat-y;
background-size: cover;
background-position:50% 50%;
transition:all 1s ease;
position:relative;

&::before{
  content:"";
  position:absolute;
  height:100%;
  width:100%;
  top:0px;
  left:0px;
  /* border:3px solid green; */
  background-color:black;
  opacity:0.5;
}
.poster-container{
  position:absolute;
  display:flex;
.poster-image{
  width:120px;
  img{
    width:100%;
  }
}
.poster-detail{
  padding:0 8px;
  display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: white;
  h2,p{
    margin: 0;
  }
  .duration{
    display:flex;
    .duration-time{
    background-color: rgba(0,0,0,0.3);
    padding: 3px;
    border-radius: 5px;
    font-size: 14px;
    }
    .movietypes{
      margin-left:8px;
    }
  }
}
}
.overview{
  position: absolute;
    bottom: 120px;
  h3,p{
    margin:0;
    color:white;
  }
}

@media (max-width:970px) {
  .overview{
    bottom: 57px;
  }
}
@media (max-width:500px) {
  overflow:hidden;
  .overview{
    bottom: 30px;
  }
}
@media (max-width:400px) {
  .poster-container{
    flex-direction:column;
  }
  .overview{
    display:none;
  }
}
;`

const CastWrapper=styled.div`
max-width:1800px;
padding-bottom: 30px;
margin: auto;
.cast-title{
  margin: 10px 0;
text-align: center;
font-size: 25px;
color: black;
font-weight: bold;
color: black;
}
.cast-container{
  display: flex;
  flex-wrap: wrap;
  gap:5px;
  justify-content: space-around;
  align-items: center;
}
`;