import React from 'react'
import {Route,Routes} from "react-router-dom"
import { Header } from './component/Header'
import Home from './pages/Home'
import TopRated from './pages/TopRated'
import Upcoming from './pages/Upcoming'
import { useSelector } from 'react-redux'
import MovieDetail from './component/MovieDetail'
import SearchPage from './pages/SearchPage'

const App = () => {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/top-rated" element={<TopRated/>}/>
      <Route path="/upcoming" element={<Upcoming/>}/>
      <Route path="/movie-detail/:id" element={<MovieDetail/>}/>
      <Route path="/searched-movies" element={<SearchPage/>}/>
    </Routes>
    </>
  )
}

export default App