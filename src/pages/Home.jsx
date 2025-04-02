import MovieCard from "../components/MovieCard.jsx";
import {useState, useEffect} from "react";
import {searchMovies, getPopularMovies} from "../services/api.js";

export default function Home(){
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try{
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            }catch(error){
                console.log(error);
                setError("failed to load movies");
            }
            finally{
                setLoading(false);
            }
        }
        loadPopularMovies();
    }, []);

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