import '../App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
// import Search from './Search';
import Login from './Login';
import Home from './Home'
import CharacterForm from './CharacterForm';
import CharacterContainer from './CharacterContainer';



function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState("");


  // useEffect(() => {
  //   fetch(`http://localhost:9292/users`)
  // }, [])




  return (
    <div>
      <NavBar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Routes>
        <Route path={"/user/:id"} element={ <CharacterContainer /> } />
        <Route path="/character_form" element={ <CharacterForm /> } />
        <Route exact path="/" element={ loggedIn ? <Home user={user} /> : <Login setUser={setUser} /> }/>
      </Routes>
    </div>
  );
}

export default App;
