import React, { useState } from 'react';

import { data } from './component/MoviesData';
import SearchMovie from './component/Filter';
import MoviesList from './component/MovieList'; 
import AddMovie from './component/AddMovie';

import './App.css';


function App() {
const [moviesList, setMoviesList] = useState(data);
const [searchMovie, setSearchMovie] = useState('');
const [ratingSearch, setRatingSearch] = useState(1);

 
const addMovie = (newMovie) => setMoviesList([...moviesList, newMovie]);
    return (
      <div className='container my-5'>
        <h1 className="app-title">React Hooks Checkpoint (Movies App) </h1>
        <a href="https://github.com/brahimezzdini/react-hooks-checkpoint.git"><h3 style={{textAlign:'center',marginTop:'20px'}}>Show source code on github</h3></a>
        <SearchMovie
          setSearchMovie={setSearchMovie}
          ratingSearch={ratingSearch}
          setRatingSearch={setRatingSearch}
        /> 
        <AddMovie handleAdd={addMovie} />
        <MoviesList
          moviesList={moviesList}
          searchMovie={searchMovie}
          ratingSearch={ratingSearch}
        />
        
      </div>
    );
}

export default App;