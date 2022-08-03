import React from "react";
import "./App.css";
import Artist from "./components/Hero/Artist";
import Search from "./components/search/Search";
import Footer from "./components/footer/Footer";
import musicImage from "../src/projectimages/Headphone-amico.svg";

function App() {
  return (
    <div className="App">
      <img className="w-1/5" src={musicImage} alt="musicimage"></img>
      <h1 className="text-8xl mb-10">Deezer</h1>
      <Search />
      <Artist />
      <Footer />
    </div>
  );
}

export default App;
