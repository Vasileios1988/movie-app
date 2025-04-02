import "./css/App.css";
import Favourites from "./pages/Favourites";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./context/MovieContext";
import NavBar from "./components/NavBar";

function App() {
    return (
        <MovieProvider>
            <NavBar />
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/favorites" element={<Favourites />} />
                </Routes>
            </main>
        </MovieProvider>
    );
}

export default App;