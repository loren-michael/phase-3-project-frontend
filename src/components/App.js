import '../App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home'
import CharacterForm from './CharacterForm';
import CharacterContainer from './CharacterContainer';


function App() {
  const [gameInfo, setGameInfo] = useState([])

  useEffect(() => {
    fetch(`http://localhost:9292/games/`)
    .then(r => r.json())
    .then(r => setGameInfo(r))
  }, [])




  return (
    <div>
      <NavBar />
      <Routes>
        <Route path={"/user/:id"} element={ <CharacterContainer gameInfo={gameInfo} /> } />
        <Route path="/character_form" element={ <CharacterForm /> } />
        <Route exact path="/" element={ <Home gameInfo={gameInfo} /> }/>
      </Routes>
    </div>
  );
}

export default App;
