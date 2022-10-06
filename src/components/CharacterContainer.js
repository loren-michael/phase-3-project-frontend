import React from 'react';
import { useNavigate } from 'react-router-dom';

import CharacterCard from './CharacterCard';

function CharacterContainer({ currentUser, characters }) {
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
                    <CharacterCard character={character} key={character.id} />
                )
            })}
        </div>
    )
};

export default CharacterContainer;