import React from 'react'; 
import Rate from './Rate';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie: {id, title, posterUrl,rate } }) => {
  return (
      <div className="post-listing">
        <div className="card">
            <img className="card-img-top" src={posterUrl} alt=""/>
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
            </div>
            <Rate rating={rate}/>
            <Link className="button" to={'/movie/'+id }  > Watch Movie </Link>
        </div> 
    </div>  
  );
};

export default MovieCard;