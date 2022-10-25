import React, { useState }from 'react';

function CharacterCard({ character, updateCharacters }) {
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
        fetch(`http://localhost:9292/characters/${character.id}`, {
            method: "DELETE"
        })
        .then(resp => resp.json())
        .then(updateCharacters(character.id))
    }

    return (
        <div>
            <div className="char-card">
                <h4>{character.name}</h4>
                <p>{character.user.username}'s character</p>
                <h5>Level {charData.level} {character.race} {character.character_class}</h5>
                {charData.level === 20 ? null : <button onClick={handleLevelUp}>Level Up!</button>}
                <img className="class-icon" alt="icon" src={character.icon}></img>
                <button onClick={handleDelete}>Delete Character</button>
            </div>
        </div>
    )
};

export default CharacterCard;
