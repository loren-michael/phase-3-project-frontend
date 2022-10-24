import React, { useTransition } from 'react'
import CharacterCard from './CharacterCard'

function PlayerContainer({ user }) {

  return <div>
    {user.username}'s Characters
    {user.characters.map((char) => {
      return (
        <CharacterCard key={char.id} character={char} />
      )
    })}
    <br></br>
    {/* <button id={user.id} onClick={handleNew}>Create a new character!</button> */}
    <br></br>
    <br></br>
  </div>
}

export default PlayerContainer