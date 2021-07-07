import React, { useState } from 'react';
import SearchMovie from '../component/Filter';
import MoviesList from '../component/MovieList'; 
import AddMovie from '../component/AddMovie';
import { data } from '../component/MoviesData';

function Home() {
    const [moviesList, setMoviesList] = useState(data);
    const [searchMovie, setSearchMovie] = useState('');
    const [ratingSearch, setRatingSearch] = useState(1);

    const addMovie = (newMovie) => setMoviesList([...moviesList, newMovie]);
 
    return (
        <div className='container my-5'>
            <h1 className="app-title">React Router Checkpoint (Movies App +) </h1>
            <a href="https://github.com/brahimezzdini/React-Router-Checkpoint.git"><h3 style={{textAlign:'center',marginTop:'20px'}}>Show source code on github</h3></a>
           
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
    )
}

export default Home
