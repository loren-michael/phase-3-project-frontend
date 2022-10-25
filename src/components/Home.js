import React from 'react';
import { useNavigate } from 'react-router-dom';
import CharacterCard from './CharacterCard';


function Home({ characters, setCharacters }) {
    const navigate = useNavigate();
    
    function handleNew() {
        navigate(`/character-creation`)
    }

    function updateCharacters(id) {
        const updatedCharacters = characters.filter((char) => char.id !== id)
        setCharacters(updatedCharacters)
    }

    return (
        <div>
            <h2>Welcome to the Character Database!</h2>
            <br></br>
            <button onClick={handleNew}>Create a new character!</button>
            <br></br>
            {characters.map((character) => {
                return (
                    <CharacterCard key={character.id} updateCharacters={updateCharacters} character={character} user={character.user} />
                )
            })}
        </div>
    )
};

export default Home;