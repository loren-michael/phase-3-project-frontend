import React from 'react';
import { useNavigate } from 'react-router-dom';

import CharacterCard from './CharacterCard';

function CharacterContainer({ currentUser, characters, setCharacters }) {
    const navigate = useNavigate();

    function handleNew() {
        navigate(`/${currentUser.id}/character-creation`)
    }

    return (
        <div>
            {/* <Search search={search} setSearch={setSearch} onSearchChange={onSearchChange} /> */}
            <button onClick={handleNew}>Create a new character!</button>
            {characters.map(character => { 
                return (
                    <CharacterCard character={character} id={character.id} key={character.id} characters={characters} setCharacters={setCharacters} />
                )
            })}
        </div>
    )
};

export default CharacterContainer;