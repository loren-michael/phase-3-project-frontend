import '../App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home'
// import CharacterForm from './CharacterForm';
import CharacterContainer from './CharacterContainer';


function App() {
  const [category, setCategory] = useState("Games");
  const [display, setDisplay] = useState([])

  // const display = (display) => {
    
  // }

  useEffect(() => {
    fetch(`http://localhost:9292/games/`)
      .then(r => r.json())
      .then(games => setDisplay(games))
  }, [])
  

  useEffect(() => {
    if (category === "Games") {
      fetch(`http://localhost:9292/games/`)
      .then(r => r.json())
      .then(games => setDisplay(games))
    }
    else if (category === "Characters") {
      fetch(`http://localhost:9292/characters/`)
      .then(r => r.json())
      .then(characters => setDisplay(characters))
    }
  }, [category])




  return (
    <div>
      <NavBar />
      <Routes>
        <Route path={"/character/:id"} element={ <CharacterContainer /> } />
        {/* <Route path={} element={} />
        <Route path={} element={} />
        <Route path={} element={} /> */}
        {/* <Route path="/character_form" element={ <CharacterForm /> } /> */}
        <Route exact path="/" element={ <Home display={display} /> }/>
      </Routes>
    </div>
  );
}

export default App;
