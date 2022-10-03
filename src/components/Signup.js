import React, { useState } from 'react';
// import Login from './Login';

function Signup({ login }) {
  const [username, setUsername] = useState("")

  function handleSubmit(e) {
    e.preventDefault();

    fetch('http://localhost:9292/signup', {
      method: "POST",
      header: {
        "Accept": "application/json",
        "Content/Type": "application/json"
      },
      body: JSON.stringify({ username })
    })
    .then(resp => resp.json())
    .then(data => login(data))
  }

  return (
    <div>
      <h4>Sign up</h4>
      <form onSubmit={handleSubmit} >
        <label htmlFor='username'>Username: </label>
        <input type="text" name="username" id="username" value={ username } onChange={ e => setUsername(e.target.value) } />
        <input type="submit" value="Signup" />
      </form>
    </div>
  )
}

export default Signup