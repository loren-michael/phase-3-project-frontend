import React, { useTransition } from 'react'
import CharacterCard from './CharacterCard'

function PlayerContainer({ user, characters }) {

  return <div>
    {/* {user.username}'s Characters */}
    {characters.map((character) => {
      return (
        <CharacterCard key={character.id} character={character} />
      )
    })}
    <br></br>
    {/* <button id={user.id} onClick={handleNew}>Create a new character!</button> */}
    <br></br>
    <br></br>
  </div>
}

export default PlayerContainer