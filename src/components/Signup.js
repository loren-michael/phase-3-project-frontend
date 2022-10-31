import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

function Signup({ login, users, setUsers }) {
  // const navigate = useNavigate();
  const [username, setUsername] = useState({
    username: "",
    password: null
  });
  // const [username, setUsername] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    console.log(username)
    fetch('http://localhost:9292/signup', {
      method: "POST",
      headers: {
        "Accept": "Application/JSON",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(username)
    })
    .then(resp => resp.json())
    .then(users => console.log(users))

  }
    // e.preventDefault();
    // console.log(username)
    // console.log(users)
    // fetch('http://localhost:9292/signup', {
      // method: "POST",
      // headers: {
        // "Accept": "application/json",
        // "Content/Type": "application/json"
      // },
      // body: JSON.stringify(username)
    // })
      //   
      // .then(resp => resp.json())
      // .then(data => console.log(data))
      // .then(data => {
      //   if (!data.message) {
      //     login(data)
      //   } else if (data.message) {
      //     alert(data.message)
      //   }})
    // .then(setUsers([...users, username]))
      
  // };

//   function handleCharacterPost() {
//     fetch(`http://localhost:9292/signup`, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(username)
//     })
//     .then(updateUsers())        
//     .then(navigate("/"))
// };


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