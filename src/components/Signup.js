import React, { useState } from 'react';


function Signup({ setUsers }) {
  const [username, setUsername] = useState({
    username: "",
    password: null
  });


  function handleSubmit(e) {
    e.preventDefault();
    fetch('http://localhost:9292/signup', {
      method: "POST",
      headers: {
        "Accept": "Application/JSON",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(username)
    })
    .then(resp => resp.json())
    .then(data => {
      if (!data.message) {
        const newUsers = data;
        setUsers(newUsers)
      } else if (data.message) {
        alert(data.message)
      }
    })
    .then(setUsername({username: ""}))
  }


  return (
    <div>
      <h4>Create a new player</h4>
      <form onSubmit={handleSubmit} >
        <label>Username: </label>
        <input 
          required
          type="text" 
          name="username" 
          id="username" 
          value={ username.username } 
          onChange={ e => setUsername({username: e.target.value}) } 
        />
        <br></br>
        <input type="submit" value="Create" />
      </form>
    </div>
  )
}

export default Signup