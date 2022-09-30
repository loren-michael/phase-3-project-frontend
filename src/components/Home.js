import React from 'react';
import GameContainer from './GameContainer';
import CharacterContainer from './CharacterContainer';

function Home({ display, category, setCategory }) {

    function handleCategoryChange(e) {
        setCategory(e.target.value)
    }

    return (
        <div>
            <h2 className="center">Welcome to the D&D Database!</h2>
            <p>Please select a category: </p>
            <select name="category" id="category" onChange={handleCategoryChange}>
                <option value="Games">Games</option>
                <option value="Characters">Characters</option>
            </select>
            <br></br>
            <br></br>
            {category === "Games" ? <GameContainer display={display} /> : <CharacterContainer display={display} />}
        </div>
    )
};

export default Home;