import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home";
import PopularAnime from "./components/PopularAnime";
import NavBar from "./components/NavBar";
import Manga from "./pages/Manga";
import About from "./pages/About";
import { BrowserRouter, Routes, Route } from "react-router";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<PopularAnime />}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/Manga" element={<Manga></Manga>}></Route>
        <Route path="/About" element={<About></About>}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
