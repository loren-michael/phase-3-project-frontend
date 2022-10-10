import '../App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './Home';
import CharacterForm from './CharacterForm'
import Login from './Login';


function App() {
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([])
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);


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
    navigate(`/${user.id}/characters`)
  }

  const logout = () => {
    setCurrentUser({});
    setIsLoggedIn(false);
    localStorage.removeItem('user_id');
    navigate("/")
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
    fetch(`http://localhost:9292/${currentUser.id}/characters`)
      .then(r => r.json())
      .then(characters => setCharacters(characters))
  }, [currentUser])


  return (
    <div>
      { renderLoggedIn() }
      <Routes>
        <Route path={`/${currentUser.id}/character-creation`} element={<CharacterForm userId={currentUser.id} setCharacters={setCharacters} />} />
        <Route path='/:id/characters' element={<Home currentUser={currentUser} characters={characters} />} />
        {/* <Route path='/:id/:char_id' element={<Home display={games} />} /> */}
        <Route exact path="/" 
          element={ isLoggedIn ? <Home /> : <Login login={login} /> }/>
      </Routes>
    </div>
  );
}

export default App;
