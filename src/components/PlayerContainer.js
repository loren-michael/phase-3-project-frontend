import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import CharacterCard from './CharacterCard';

function PlayerContainer({ user, updateCharacters, setPlayerAddingTo }) {
  const [chars, setChars] = useState(user.characters);
  
  const navigate = useNavigate();

  function handleNew() {
    setPlayerAddingTo(user);
    navigate(`/character-creation`)
  }

  return (
    <div>
      <h4>{user.username}'s Characters</h4>
      <button key={user.id} id={user.id} onClick={handleNew}>Add a new {user.username} character</button>
      {chars.map(character => {
        return (
          <CharacterCard 
            key={character.id} 
            character={character} 
            updateCharacters={updateCharacters} 
            chars={chars}
            setChars={setChars}
          />
        )
      })}
    </div>
  )
}

export default PlayerContainer