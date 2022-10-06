import React from 'react';
import GameCard from './GameCard';

function GameContainer({ display, games }) {
    return (
        <div>
            {games.map(game => {
                return (
                    <GameCard game={game} key={game.id} />
                )
            })}
        </div>
    )
};

export default GameContainer;