import { configureStore } from '@reduxjs/toolkit'
import getMoviesReducer from '../slice/getmovies'

export const store = configureStore({
  reducer: 
  {
    moviesData:getMoviesReducer
  },
})


