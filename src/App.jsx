import { useState } from 'react'
import { Routes, Route, NavLink } from "react-router-dom";
import './App.css'
import HomePage from './pages/HomePage/HomePage'
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';

function App() {

  return (
    <div>

      <Routes>
          <Route path="/" element={<HomePage />}/>
          {/* <Route path="/movies" element={<MoviesPage/>}/> */}
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
          {/* <Route path="/movcast" element={<MovieCast/>}/> */}
          {/* <Route path="/movreviews" element={<MovieReviews />} />           */}
          {/* <Route path="*" element={<NotFound/>}/> */}
      </Routes>
    </div>
  )
}

export default App
