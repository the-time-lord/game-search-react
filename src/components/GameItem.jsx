import React from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import './GameItem.scss';
import PlatformList from './PlatformList';

const GameItem = ({ game }) => {
  const { id, background_image, name, parent_platforms, metacritic, released, tba, playtime, rating } = game;

  return (
    <Link to={`/games/${id}`} >
      <div className="game-item-card">
        <img
          className="game-item-card__image" 
          src={background_image} 
          alt={name}
        />
        <div className="game-item-card__info">
          <h2 className="game-item-card__header">{name}</h2>
          <div className="game-item-card__info__wrapper">
            { parent_platforms && <PlatformList platforms={parent_platforms}/> }
            {
              metacritic &&
              <div className="game-item-card__metacritic" title="metacritic">  
                <p>{metacritic}</p>
              </div>
            }
          </div>
          <div className="game-item-card__info__description">
            <div className="game-item-card__info__wrapper game-item-card__info__wrapper--detailed">
              <p className="game-item-card__info__name">Release date:</p>
              <p>
                {released ?
                  dayjs(`${released}`).format('DD MMM, YYYY') :
                  tba ? 'To be announced' : 'N/A'}
              </p> 
            </div>
            <div className="game-item-card__info__wrapper game-item-card__info__wrapper--detailed">
              <p className="game-item-card__info__name">Playtime:</p>
              <p>{playtime} hours</p>
            </div>
            <div className="game-item-card__info__wrapper game-item-card__info__wrapper--detailed">
              <p className="game-item-card__info__name">Rating (RAWG):</p>
              <p className="game-item-card__info__rating">{rating}</p>
            </div>
          </div>
          
        </div>
      </div>
    </Link>
  );
};

export default GameItem;
