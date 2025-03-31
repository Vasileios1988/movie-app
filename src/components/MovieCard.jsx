import '../css/MovieCard.css'
export default function MovieCard({movie}){

     function onFaveClick(){
         alert("fave btn is clicked");
     }
    return(
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.poster} alt={movie.title}/>
                <div className="movie-overlay">
                    <button className="favorite-btn" onClick={ onFaveClick}>♡</button>

                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.info}</p>
                <p>{movie.releaseDate}</p>
            </div>
        </div>
    )
}