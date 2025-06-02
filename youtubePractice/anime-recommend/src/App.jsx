import { getTopAnime } from "./services/api";
//import { useState,useEffect } from 'react'
export default function App() {
  const getAnime = getTopAnime();
  console.log(getAnime);
}
