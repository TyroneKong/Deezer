import React from "react";
import "./App.css";
import Artist from "./components/Hero/Artist";
import Search from "./components/search/Search";

function App() {
  return (
    <div className="App">
      <h1 className="text-8xl mb-10">Deezer</h1>
      <Search />
      <Artist />
    </div>
  );
}

export default App;
