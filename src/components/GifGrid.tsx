import React from 'react';
import { useFetchGif } from '../hooks/useFetchGifs';
import { Gif } from '../shared/interfaces';
import GifGridItem from './GifGridItem';

interface PropsTypes {
  category: string;
}

const GifGrid = ({ category }: PropsTypes) => {
  const { data: gifs, loading } = useFetchGif(category);

  return (
    <>
      <h3>{category}</h3>
      {loading && <p className="animate__animated animate__flash">Loading...</p>}
      <div className="card-grid">
        {
          gifs.map((gif: Gif) => (
            <GifGridItem key={gif.id} gif={gif} />
          ))
        }
      </div>
    </>
  )
};

export default GifGrid;