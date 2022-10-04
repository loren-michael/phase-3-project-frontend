import React from 'react';

function CharacterCard({ character, handleDetails }) {

    return (
        <div>
            <div className="char-card" onClick={handleDetails}>
                <h4>{character.name}</h4>
                <h5>Level {character.level} {character.race} {character.character_class}</h5>
                <img className="class-icon" alt="icon" src={character.icon}></img>
            </div>
        </div>
    )
};

export default CharacterCard;
