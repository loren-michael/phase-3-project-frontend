import React, { useState } from 'react'

const Login = ({ login }) => {
  const [username, setUsername] = useState("")

  const handleLogin = e => {
    e.preventDefault();

    fetch('http://localhost:9292/login', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"        
      },
      body: JSON.stringify({ username })
    })
      .then(resp => resp.json())
      .then(data => {
        if(!data.message) {
          login(data)
        }
      })
  }

  return (
    <div>
      <h3>Login</h3>
      <form onSubmit={ handleLogin }>
        <div>
          <label htmlFor="username">Username: </label>
          <input type="text" name="username" id="username" value={ username } onChange={ e => setUsername(e.target.value) } />
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  )
}

export default Login