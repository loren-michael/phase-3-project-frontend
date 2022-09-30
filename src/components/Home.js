import React, { useState } from 'react';
import GameContainer from './GameContainer';
import CharacterContainer from './CharacterContainer';
import PlayerContainer from './PlayerContainer';

function Home() {
    const [category, setCategory] = useState("Games");

    function handleCategoryChange(e) {
        setCategory(e.target.value)
    }

    return (
        <div>
            <h2 class="center">Welcome to the D&D Database!</h2>
            <p>Please select a category: </p>
            <select name="category" id="category" onChange={handleCategoryChange}>
                <option value="Games">Games</option>
                <option value="Characters">Characters</option>
                <option value="Players">Players</option>
            </select>
            <br></br>
            <br></br>
            {category === "Games" ? <GameContainer /> : null}
            {category === "Characters" ? <CharacterContainer /> : null}
            {category === "Players" ? <PlayerContainer /> : null}
        </div>
    )
};

export default Home;