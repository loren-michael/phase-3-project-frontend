import React from 'react';
import Search from './Search';
import CharacterCard from './CharacterCard';

function CharacterContainer({ display }) {
    return (
        <div>
            <Search />
            {display.map(character => { 
                return (
                    <CharacterCard character={character} />
                )
            })}


        </div>
    )
};

export default CharacterContainer;