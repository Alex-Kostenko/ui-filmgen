import React from 'react';
import './MovieCard.css';
import Tag from '../Tag';

export interface MovieCardProps {
  title?: string;
  description?: string;
  date: string;
  img: string;
  onClick?: () => any;
  className?: string;
  labels?: Array<string>;
}

const MovieCard = (props: MovieCardProps) => {
  return (
    <div {...props} className={'movie-card-container ' + props.className}>
      <img className='movie-img' src={props.img} alt='img' />
      <div className='description-container'>
        <div className='description-header'>
          <h1 className='movie-title'>{props.title}</h1>
          <p className='movie-date'>release date: {props.date}</p>
          <div className='movie-tag-container'>
            {props.labels?.map((label) => (
              <Tag className='tag-medium' label={label} />
            ))}
          </div>
        </div>
        <p className='movie-text'>{props.description}</p>
      </div>
    </div>
  );
};

export default MovieCard;
