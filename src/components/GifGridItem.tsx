import React from 'react';
import { Gif } from '../shared/interfaces';

interface PropsTypes {
  gif: Gif;
}

const GifGridItem = ({ gif }: PropsTypes) => {

  return (
    <div className="card-item animate__animated animate__bounceIn">
      <div className="content-img">
        <img src={gif.url} alt={gif.title} />
      </div>
      <p>{gif.title}</p>
    </div>
  )
};

export default GifGridItem;