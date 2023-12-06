import { createSlice } from '@reduxjs/toolkit'
const initialState={
    popularMovies:{
        page:0,
        results:[],
        total_pages:0,
        total_results:0
    },
    topRatedMovie:{
        page:0,
        results:[],
        total_pages:0,
        total_results:0
    },
    upComingMovie:{
        page:0,
        results:[],
        total_pages:0,
        total_results:0
    },
    searchMovie:{
      page:0,
      results:[],
      total_pages:0,
      total_results:0
    },
    searchedValue:"",
}
export const getMoviesSlice = createSlice({
    name: 'getMovies',
    initialState,
    reducers: {
      getPopularMovie:(state,action)=>{
        console.log(action.payload)
        return{
            ...state,
         popularMovies:{
            ...state.popularMovies,
            page:action?.payload?.page,
            results:[...action?.payload?.results],
            total_pages:action?.payload?.total_pages,
            total_results:action?.payload?.total_results
         }
        }
      },
      getTopRatedMovie:(state,action)=>{
        console.log(action.payload)
        return{
            ...state,
         topRatedMovie:{
            ...state.topRatedMovie,
            page:action?.payload?.page,
            results:[...action?.payload?.results],
            total_pages:action?.payload?.total_pages,
            total_results:action?.payload?.total_results
         }
        }
      },
      getUpComingMovie:(state,action)=>{
        console.log(action.payload)
        return{
            ...state,
         upComingMovie:{
            ...state.upComingMovie,
            page:action?.payload?.page,
            results:[...action?.payload?.results],
            total_pages:action?.payload?.total_pages,
            total_results:action?.payload?.total_results
         }
        }
      },
      getSearchedMovie:(state,action)=>{
        console.log(action.payload)
        return{
            ...state,
         searchMovie:{
            ...state.searchMovie,
            page:action?.payload?.page,
            results:[...action?.payload?.results],
            total_pages:action?.payload?.total_pages,
            total_results:action?.payload?.total_results
         }
        }
      },
      getSearchedValue:(state,action)=>{
        console.log(action.payload);
        return {
          ...state,
          searchedValue:action.payload
        }
      }
    },
  })

  export default getMoviesSlice.reducer
  export const { getPopularMovie,getTopRatedMovie,getUpComingMovie,getSearchedValue,getSearchedMovie} = getMoviesSlice.actions