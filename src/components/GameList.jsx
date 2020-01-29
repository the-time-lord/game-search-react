import React from 'react';
import './GameList.scss';
import GameItem from './GameItem';

const GameList = ({ games }) => {
  const renderedList = games.map(game => {
    
    return (
      <GameItem
        key={game.id}
        game={game} 
      />
    );
  });

  return <div className="game-list-container">{renderedList}</div>
};

export default GameList;