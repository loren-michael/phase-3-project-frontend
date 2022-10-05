import React from 'react';
import Search from './Search';
import CharacterCard from './CharacterCard';

function CharacterContainer({ display, handleDetails, onSearchChange, setSearch }) {
    return (
        <div>
            <Search setSearch={setSearch} onSearchChange={onSearchChange} />
            {display.map(character => { 
                return (
                    <CharacterCard character={character} key={character.id} />
                )
            })}
        </div>
    )
};

export default CharacterContainer;