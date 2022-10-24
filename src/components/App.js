import '../App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './Home';
import CharacterForm from './CharacterForm'
import Login from './Login';


function App() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([])
  const [characters, setCharacters] = useState([])
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const id = localStorage.getItem('user_id')


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


  useEffect(() =>{
    fetch(`http://localhost:9292/users`)
      .then(r => r.json())
      .then(users => setUsers(users))
      .then(console.log(users[0]))
  }, [])


  return (
    <div>
      <div>
          { isLoggedIn ? renderLoggedIn() : <Login login={login} /> }
      </div>
      <Routes>
        <Route 
          path={`/character-creation`} 
          element={
            <CharacterForm users={users} setUsers={setUsers} />} 
          />
        <Route 
          exact path="/" 
          element={<Home users={users} />}
        />
      </Routes>
    </div>
  );
}

export default App;
