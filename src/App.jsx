import { useState } from 'react'
import { Routes, Route, NavLink } from "react-router-dom";
import './App.css'
import HomePage from './pages/HomePage/HomePage'
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
import MovieCast from './components/MovieCast/MovieCast';
import MovieReviews from './components/MovieReviews/MovieReviews';
import Navigation from './components/Navigation/Navigation'

function App() {

  return (
    <div className="App">
      <Navigation />
      <Routes>
          <Route path="/" element={<HomePage />}/>
          {/* <Route path="/movies" element={<MoviesPage/>}/> */}
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} > 
            <Route path="cast" element={<MovieCast/>}/>
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          {/* <Route path="/movcast" element={<MovieCast/>}/> */}
          {/* <Route path="/movreviews" element={<MovieReviews />} />           */}
          {/* <Route path="*" element={<NotFound/>}/> */}
      </Routes>
    </div>
  )
}

export default App
