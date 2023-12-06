 import React, { useEffect,useState } from 'react'
 import axios from "axios"
 import {useDispatch,useSelector} from "react-redux";
 import { getTopRatedMovie } from '../slice/getmovies';
 import styled from 'styled-components';
 import Moviecard from '../component/Moviecard';
 import Loader from '../component/Loader';
 const withEnhancement = (WrappedComponent,currentPageData,apiWord,reducerFunction) => {
    return (props)=>{
   const [currentPage,setCurrentPage]=useState(currentPageData);
     const [isLoad,setIsLoad]=useState(false);
    const dispatch=useDispatch();
   const fetchMovieData=async()=>{
         try{
             setIsLoad(false)
            const allMovies=await axios.get(`https://api.themoviedb.org/3/movie/${apiWord}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=${currentPage}`);
             dispatch(reducerFunction(allMovies?.data))
             setIsLoad(true)
         }
         catch(err){

       }
     }

     const incrementCurrentPage=()=>{
         setCurrentPage(currentPage+1)
     }
     const decrementCurrentPage=()=>{
         setCurrentPage(currentPage-1)
     }
     useEffect(()=>{
         fetchMovieData();
     },[])

     useEffect(()=>{
         fetchMovieData();
     },[currentPage])

   return <WrappedComponent {...props} 
   currentPage={currentPage}
   isLoad={isLoad}
   incrementCurrentPage={incrementCurrentPage}
   decrementCurrentPage={decrementCurrentPage}
   />
     }
 }

 export default withEnhancement

