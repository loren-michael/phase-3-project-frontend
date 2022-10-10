import React, { useState }from 'react';
// import { Link } from 'react-router-dom'

function CharacterCard({ characters, setCharacters, character }) {
    const [charData, setCharData] = useState(character);

    function handleLevelUp() {
        const newLevel = charData.level + 1;
        setCharData({...charData, level: newLevel})
        fetch(`http://localhost:9292/characters/${character.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({level: newLevel})
        })
        // .then(resp => resp.json())
    }

    function handleDelete() {
        fetch(`http://localhost:9292/characters/${character.id}`, {
            method: "DELETE"
        })
        .then(resp => resp.json())
        .then(handleRefresh())
    }

    function handleRefresh() {
    const filtered = characters.filter(char => char.id !== character.id)
    setCharacters(filtered)
    }

    return (
        <div>
            <div className="char-card">
            
                <h4>{character.name}</h4>
                <h5>Level {charData.level} {character.race} {character.character_class}</h5>
                {/* <Link to={`/:id`} className="right-align">Details</Link> */}
                {charData.level === 20 ? null : <button onClick={handleLevelUp}>Level Up!</button>}
                <img className="class-icon" alt="icon" src={character.icon}></img>
                <button onClick={handleDelete}>Delete Character</button>
            </div>
        </div>
    )
};

export default CharacterCard;
