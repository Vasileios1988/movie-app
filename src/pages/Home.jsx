import MovieCard from "../components/MovieCard.jsx";
import {useState} from "react";

export default function Home(){
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id:1, title:"Titanic",releaseDate:"1997"},
        {id:2, title:"Frozen",releaseDate:"2000"},
        {id:3, title:"Dracula",releaseDate:"1986"},
        {id:4, title:"All of us Strangers",releaseDate:"2024"},
    ];

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery);
    }
    return (
        <div className="Home"  >

            <form onSubmit={handleSearch} className="search-form">
                <input type="text"
                       placeholder="Search Movies"
                       className="search-input"
                       value={searchQuery}
                       onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-btn">Search</button>
            </form>
            <div className="movies-grid">
                {movies.map(movie =>
                    movie.title.toLowerCase().startsWith(searchQuery)
                    && (<MovieCard movie={movie} key={movie.id}/>))}
            </div>
        </div>
    )
}