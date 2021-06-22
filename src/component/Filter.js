import React from 'react';
import Rate from './Rate';

const SearchMovie = ({ setSearchMovie, ratingSearch, setRatingSearch }) => {
    return (
    <div  className='search-section'>
        <input
        type='text'
        placeholder='Search movie with title'
        onChange={(e)=> setSearchMovie(e.target.value)}
        />
        <br></br>
        <h2>Search with rating</h2>
        <Rate  
        rating={ratingSearch} setRatingSearch={setRatingSearch}
        />
    </div>
    );
};
export default SearchMovie;