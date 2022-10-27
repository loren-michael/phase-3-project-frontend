import React from 'react';
import PlayerContainer from './PlayerContainer';

function Home({ users, characters, setCharacters, setPlayerAddingTo }) {

    function updateCharacters(id) {
        const updatedCharacters = characters.filter((char) => char.id !== id);
        setCharacters(updatedCharacters)
    }

    return (
        <div>
            <h2>Welcome to the Character Database!</h2>
            <br></br>
            <br></br>
            {users.map((user) => {
                return (
                    <PlayerContainer
                        key={user.id}
                        updateCharacters={updateCharacters}
                        user={user} 
                        setPlayerAddingTo={setPlayerAddingTo}
                    />
                )
            })}
        </div>
    )
};

export default Home;