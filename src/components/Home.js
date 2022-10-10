import React from 'react';
import CharacterContainer from './CharacterContainer';

function Home({ currentUser, characters, setCharacters }) {


    return (
        <div>
            <h2>Welcome to the Character Database!</h2>
            <br></br>
            {<CharacterContainer 
                currentUser={currentUser}
                characters={characters}
                setCharacters={setCharacters}
            />}
        </div>
    )
};

export default Home;