import React, { useState } from 'react';

function CharacterCard({ character, chars, setChars }) {
    const [charData, setCharData] = useState(character);

    function handleLevelUp() {
        const newLevel = charData.level + 1;
        setCharData({...charData, level: newLevel});
        fetch(`http://localhost:9292/characters/${character.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({level: newLevel})
        })
    }

    function handleDelete() {
        const newChars = chars.filter(char => char.id !== character.id)
        fetch(`http://localhost:9292/characters/${character.id}`, {
            method: "DELETE"
        })
        .then(resp => resp.json())
        .then(setChars(newChars))
    }

    return (
        <div>
            <div className="char-card">
                <h4>{charData.name}</h4>
                <h5>Level {charData.level} {charData.race} {charData.character_class}</h5>
                {charData.level === 20 ? null : <button onClick={handleLevelUp}>Level Up!</button>}
                <img className="class-icon" alt="icon" src={charData.icon}></img>
                <button onClick={handleDelete}>Delete Character</button>
            </div>
        </div>
    )
};

export default CharacterCard;
