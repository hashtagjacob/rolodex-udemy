import React from 'react';
import './card.styles.css';

export const Card = ({ monster }) => {
  return (
    <div className='card-container'>
      <img
        alt={monster.name}
        src={`https://robohash.org/${monster.id}?set=set4&size=180x180`}
      ></img>
      <h1>{monster.name}</h1>
    </div>
  );
};
