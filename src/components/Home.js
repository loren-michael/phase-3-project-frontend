import React from 'react';
import { useNavigate } from 'react-router-dom';
import CharacterCard from './CharacterCard';


function Home({ users, characters }) {
    const navigate = useNavigate();
    
    function handleNew() {
        navigate(`/character-creation`)
    }
    
    return (
        <div>
            <h2>Welcome to the Character Database!</h2>
            <br></br>
            <button onClick={handleNew}>Create a new character!</button>
            <br></br>
            {characters.map((character) => {
                return (
                    <CharacterCard key={character.id} character={character} user={character.user} />
                )
            })}
        </div>
    )
};

export default Home;