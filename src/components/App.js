import '../App.css';
import '../index.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './NavBar';
// import Search from './Search';
// import Login from './Login';
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
      <NavBar />
      <Routes>
        <Route path={"/user/:id"} element={ <CharacterContainer /> } />
        <Route path="/character_form" element={ <CharacterForm /> } />
        <Route exact path="/" element={ <Home /> }/>
      </Routes>
    </div>
  );
}

export default App;
