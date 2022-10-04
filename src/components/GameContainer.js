import React from 'react';
import GameCard from './GameCard';

function GameContainer({ display }) {
    return (
        <div>
            {display.map(game => {
                return (
                    <GameCard game={game} key={game.id} />
                )
            })}
        </div>
    )
};

export default GameContainer;