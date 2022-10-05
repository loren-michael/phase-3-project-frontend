import '../App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import CharacterContainer from './CharacterContainer';
import Login from './Login';


function App() {
  const [category, setCategory] = useState("Games");
  const [display, setDisplay] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [search, setSearch] = useState("")


  useEffect(() => {
    const id = localStorage.getItem('user_id')
    if (id) {
      fetch('http://localhost:9292/users/' + id)
        .then(resp => resp.json())
        .then(data => {
          if (!data.message) {
            login(data);
          }
        })
    }
  }, [])

  const login = (user) => {
    setCurrentUser(user);
    setIsLoggedIn(true);
    localStorage.setItem('user_id', user.id);
  }

  const logout = () => {
    setCurrentUser({});
    setIsLoggedIn(false);
    localStorage.removeItem('user_id');
  }

  const renderLoggedIn = () => {
    if (isLoggedIn) {
      return (
        <>
          <div>You are logged in as { currentUser.username }</div>
          <button onClick={ logout }>Logout</button>
        </>
      )
    }
  }

  useEffect(() => {
    fetch(`http://localhost:9292/games`)
      .then(r => r.json())
      .then(games => setDisplay(games))
  }, [])

  useEffect(() => {
    if (category === "Games") {
      fetch(`http://localhost:9292/games`)
      .then(r => r.json())
      .then(games => setDisplay(games))
    }
    else if (category === "Characters") {
      fetch(`http://localhost:9292/characters`)
      .then(r => r.json())
      .then(characters => setDisplay(characters))
    }
  }, [category])

  function handleSearchChange() {
    console.log(search)
  }



  return (
    <div>
      { renderLoggedIn() }
      <Routes>
        <Route path={"/:character"} element={ <CharacterContainer setSearch={setSearch} onSearchChange={handleSearchChange} /> } />
        <Route exact path="/" element={ isLoggedIn ? <Home display={display} category={category} setCategory={setCategory} /> : <Login login={login} /> }/>
      </Routes>
    </div>
  );
}

export default App;
