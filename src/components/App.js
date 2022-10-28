import '../App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './Home';
import CharacterForm from './CharacterForm'
import Login from './Login';


function App() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]); // this is used in the useeffect fetch to set all user data including characters. master state.
  const [characters, setCharacters] = useState([]);
  const [playerAddingTo, setPlayerAddingTo] = useState({});
  const [currentUser, setCurrentUser] = useState({}); // login
  const [isLoggedIn, setIsLoggedIn] = useState(false); // login
  const id = localStorage.getItem('user_id')  // login

// LOGIN SECTION
  useEffect(() => {
    // const id = localStorage.getItem('user_id')
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
    // navigate(`/characters`)
  }

  const logout = () => {
    setCurrentUser({});
    setIsLoggedIn(false);
    setCharacters([]);
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

// INITIAL USEEFFECT
  // useEffect(() =>{
  //   fetch(`http://localhost:9292/characters`)
  //     .then(r => r.json())
  //     .then(characters => setCharacters(characters))
  // }, [])

  useEffect(() => {
    fetch(`http://localhost:9292/users`)
      .then(r => r.json())
      .then(users => setUsers(users))
      // .then(users => processCharacters(users))
    }, []);

  // function processCharacters(users) {
  //   users.map(user => {
  //     user.characters.map(char => {
  //       setCharacters([...characters, char])
  //     })
  //   })
  // };

  return (
    <div>
      <div>
          { isLoggedIn ? renderLoggedIn() : <Login login={login} /> }
      </div>
      <Routes>
        <Route 
          path={`/character-creation`} 
          element={ 
            <CharacterForm 
              users={users} 
              setUsers={setUsers} 
              playerAddingTo={playerAddingTo} 
              setPlayerAddingTo={setPlayerAddingTo}
            /> 
          } 
        />
        <Route 
          exact path="/" 
          element={ 
            <Home 
              users={users} 
              characters={characters} 
              setCharacters={setCharacters} 
              setPlayerAddingTo={setPlayerAddingTo} 
            /> 
          }
        />
      </Routes>
    </div>
  );
}

export default App;
