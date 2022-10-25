import React from 'react';
import { useNavigate } from 'react-router-dom';
import CharacterCard from './CharacterCard';
import PlayerContainer from './PlayerContainer'


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
            {characters.map((char) => {
                return (
                    <CharacterCard char={char} user={char.user} />
                )
            })}
        </div>
    )
};

export default Home;