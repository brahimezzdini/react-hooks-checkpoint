import React from 'react'; 
import Rate from './Rate';

const MovieCard = ({ movie: { title, posterUrl, description, rate } }) => {
  return (
      


   
    <div className="card">
        <img className="card-img-top" src={posterUrl} alt=""/>
        
        <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{description}</p>
        </div>
        <Rate rating={rate}/>
        
    </div>  
  );
};



export default MovieCard;