import React from 'react';
import MovieCard from './MovieCard';  

 const MoviesList = ({ moviesList, searchMovie, ratingSearch }) => {
     
     return (
        <div className="container"  >
            <div className="row">
                {moviesList
                    .filter(
                    (e) =>
                        e.title.toLowerCase().includes(searchMovie.toLowerCase().trim()) &&
                        e.rate >= ratingSearch
                    )
                    .map((e, i) => (
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-4"> 
                        <MovieCard  movie={e} />
                        </div>
                    ) )
                }
            </div>
        </div>
    );
} 
 

export default MoviesList;