import Navbar from "./components/navBar.jsx";
import Home from "./pages/Home.jsx";
import { MovieProvider } from "./contexts/MovieContexts.jsx";
import Favorites from "./pages/favourites.jsx";
import { Routes, Route } from "react-router";
import "./css/App.css";
function Text({ text }) {
  return <p>{text}</p>;
}
export default function App() {
  return (
    <>
      <MovieProvider>
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/favourites" element={<Favorites />}></Route>
          </Routes>
        </main>
      </MovieProvider>
    </>
  );
}
