import { Routes, Route} from "react-router-dom";
import './App.css'
// import HomePage from './pages/HomePage/HomePage'
// import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
// import MovieCast from './components/MovieCast/MovieCast';
// import MovieReviews from './components/MovieReviews/MovieReviews';
// import Navigation from './components/Navigation/Navigation'
// import MoviesPage from './pages/MoviesPage/MoviesPage';
// import NotFound from './pages/NotFoundPage/NotFoundPage'
import { Suspense, lazy } from "react";
import Loader from "./components/Loader/Loader";
const Navigation = lazy(() => import("./components/Navigation/Navigation"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage/MovieDetailsPage"));
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("./components/MovieReviews/MovieReviews"));
const NotFound = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

function App() {

  return (
    <div className="App">
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/movies" element={<MoviesPage/>}/>
            <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} > 
              <Route path="cast" element={<MovieCast/>}/>
              <Route path="reviews" element={<MovieReviews />} />
            </Route>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
