import React from 'react';
import { useNavigate } from 'react-router-dom';
import PlayerContainer from './PlayerContainer'


function Home({ users }) {
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
            {users.map((user) => {
                return (
                    <PlayerContainer key={user.id} user={user} />                      
                )
            })}
        </div>
    )
};

export default Home;