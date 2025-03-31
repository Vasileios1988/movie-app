
import './css/App.css'
import MovieCard from './components/MovieCard.jsx'
import Home from './pages/Home.jsx'
import {Routes, Route} from "react-router";
import Favourites from "./pages/Favourites.jsx";
import NavBar from "./components/NavBar.jsx"

function App() {


  return (
    <>
        <div>
            <NavBar />
            <mnain className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/favourites" element={<Favourites />} />
                </Routes>
            </mnain>
        </div>

    </>
  )
}

export default App
