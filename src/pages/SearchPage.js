import React from 'react'
import axios from 'axios';
import styled from 'styled-components';
import Moviecard from '../component/Moviecard';
import Loader from '../component/Loader';
import { getSearchedMovie } from '../slice/getmovies';
import { useState,useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import NotFound from '../component/NotFound';
const SearchPage = () => {
    const [currentPage,setCurrentPage]=useState(1);
    const [isLoad,setIsLoad]=useState(false);
   const dispatch=useDispatch();
   const serachedMoviesData=useSelector((state)=>state?.moviesData?.searchMovie)
   const serachedValue=useSelector((state)=>state?.moviesData?.searchedValue)
  const fetchMovieData=async()=>{
        try{
            setIsLoad(false)
           const allMovies=await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&query=${serachedValue}`);
            dispatch(getSearchedMovie(allMovies?.data))
            setIsLoad(true)
           console.log(allMovies?.data)
        }
        catch(err){
            console.log("error")
      }
    }

    const incrementCurrentPage=()=>{
        setCurrentPage(currentPage+1)
    }
    const decrementCurrentPage=()=>{
        setCurrentPage(currentPage-1)
    }

//      useEffect(()=>{
//  setCurrentPage(currentPage+1)
//      },[])
    useEffect(()=>{
        fetchMovieData();
       //  console.log(moviesData);
    },[])

   //  useEffect(() => {
   //      console.log(moviesData);
   //    }, [moviesData]);

    useEffect(()=>{
        fetchMovieData();
    },[currentPage,serachedValue])

    return (
        <Wrapper>
            {
                isLoad
                    ?
                    <>
                        <div className='movie-heading'><h2>SEARCHED MOVIES</h2></div>
                        {serachedMoviesData?.results?.length>0
                        ?
                        <>
                        <div className='cards'>
                            {
                                serachedMoviesData?.results.map((val) => {
                                    return <Moviecard movieDetail={val} />
                                })
                            }
                        </div>
                        <div className='pagination'>
                            {currentPage > 1
                                ?
                                <button className='prev' onClick={() => decrementCurrentPage()}>PREV</button>
                                :
                                null
                            }
                            {currentPage < serachedMoviesData?.total_pages
                                ?
                                <button className='next' onClick={() => incrementCurrentPage()}>NEXT</button>
                                :
                                null
                            }
                        </div>
                        </>
                        :
                        <NotFound/>
                        }
                    </>
                    :
                    <Loader />
            }
        </Wrapper>
    )
}

export default SearchPage;

const Wrapper = styled.div`
max-width: 1800px;
background-color: #060619;
color: white;
padding: 13px;
margin: auto;
.movie-heading{
text-align: center;
font-size: 25px;
color: black;
font-weight: bold;
color: white;
}
.cards{
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
}
.pagination{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 13px;
    button{
        padding: 10px;
        border-radius:3px;
        background-color: #190f4f;
        color: white;
        cursor: pointer;
        border: 2px solid #190f4f;
        &:hover{
            transform: scale(1.1);
        }
    }
}

@media (max-width:450px) {
    .movie-heading{
        font-size: 20px;
    }

}
`;