import React from 'react'

import './MovieCard.css'
import Tag from '../Tag'

export interface MovieCardProps {
  titleEng?: string
  titleRus?: string
  description?: string
  date: string
  img: string
  onClick?: () => any
  className?: string
  labels?: Array<string>
}

const MovieCard = (props: MovieCardProps) => {
  return (
    <div {...props} className={'movie-card-container ' + props.className}>
      <img className='movie-img' src={props.img} alt='img' />
      <div className='description-container'>
        <div className='description-header'>
          <div className='title-conteiner'>
            <h1 className='movie-title'>{props.titleEng}</h1>
            <div className='line'></div>
            <h1 className='movie-title'>{props.titleRus}</h1>
          </div>
          <div className='movie-tag-container'>
            {props.labels?.map((label, index) => (
              <Tag className='tag-medium' key={index} label={label} />
            ))}
          </div>
        </div>
        <p className='movie-date'>Release date: {props.date}</p>
        <p className='movie-text'>{props.description}</p>
      </div>
    </div>
  )
}

export default MovieCard
