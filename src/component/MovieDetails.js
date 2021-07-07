 
import React from "react";
import { useParams } from "react-router-dom"; 
import {data} from './MoviesData'
import Rate from "./Rate";
import { Link} from "react-router-dom";


const MovieDetails=() =>  {

    const { id } = useParams();
    const movie = data[id];
    const {title, description, rate, youtube} = movie;
     
    return (
        <div className="container bg-white">  
            <h3 className="text-center titre-desc"> {title}</h3>
            <iframe width="100%" height="500"  src={youtube} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p className="mt-4"><span class="badge bg-warning">Description :</span> {description}</p>
            <br/>
            <Rate rating= {rate}/>
            <br/>
            <Link className="button" to={'/'}  > Back To Home </Link>
          
        </div>
    );  
}
export default MovieDetails
