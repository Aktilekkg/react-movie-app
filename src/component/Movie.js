import React from "react";

const IMG_URL = 'https://image.tmdb.org/t/p/w1280'

function Movie({poster_path, title, name, vote_average, overview}){
    const setColor=(num)=>{
        if(num >=8){
            return 'red'
        }else{
            return ''
        }
    }
    return(
        <div class="card">
            <img className="image" src={IMG_URL+poster_path}/>
            <div className="info">
                <h1 className="name">{name || title}</h1>
                <p className="overview">{overview.slice(0,200)}...</p>
                <span className={`rate ${setColor(vote_average)}`} >{vote_average}</span>
            </div>
        </div>
        
    )
}
export default Movie