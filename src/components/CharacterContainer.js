import React from 'react';
import { useNavigate } from 'react-router-dom';

import CharacterCard from './CharacterCard';

function CharacterContainer({ user }) {
    const navigate = useNavigate();
    // const characters = user.characters

    function handleNew() {
        // navigate(`/character-creation`)
        // console.log(characters)
    }

    return (
        <div>
            <button onClick={handleNew}>Create a new character!</button>

            {/* {characters.map(character => { 
                return (
                    <CharacterCard
                        character={character}
                        id={character.id}
                        key={character.id}
                        characters={characters}
                        setCharacters={setCharacters}
                    />
                )
            })} */}
        </div>
    )
};

export default CharacterContainer;