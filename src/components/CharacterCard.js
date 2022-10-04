import React from 'react';
import { Link } from 'react-router-dom'

function CharacterCard({ character, handleDetails }) {

    return (
        <div>
            <div className="char-card" onClick={handleDetails}>
            
                <h4>{character.name}</h4>
                <h5>Level {character.level} {character.race} {character.character_class}</h5>
                <Link to={`/:id`} className="right-align">Details</Link>
                <img className="class-icon" alt="icon" src={character.icon}></img>
            </div>
        </div>
    )
};

export default CharacterCard;
