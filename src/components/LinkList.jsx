import React from 'react';
import { Link } from "react-router-dom";

const LinkList = ({ games }) => {
  return games && games.length ? games.map((game, i) => (
    <span key={game.id}>
      { i > 0 && ', '}
      <Link to={`/games/${game.id}`} className="detail__link">{game.name}</Link>
    </span>
  )) : 'N/A';
};

export default LinkList;