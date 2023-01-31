import React, { useRef } from 'react'
import './SliderComponent.css'
import Slider from 'react-slick'

import LeftArrow from '../Icons/LeftArrow'
import RightArrow from '../Icons/RightArrow'

interface descroptionSlider {
  img: any
  description: string
}

export interface SliderProps {
  className?: string
  dateForSlider?: descroptionSlider[]
  [name: string]: any
  img: any
}

const SliderComponent = (props: SliderProps) => {
  const sliderRef = useRef<any>(null)

  const settings = {
    dots: true,
    arrows: false,
    autoplay: true,
  }

  return (
    <div className='wrapperSlider'>
      <div className='leftArrow' onClick={() => sliderRef.current.slickPrev()}>
        <div className='left'>
          <LeftArrow />
        </div>
      </div>
      <div className='rightArrow' onClick={() => sliderRef.current.slickNext()}>
        <div className='right'>
          <RightArrow />
        </div>
      </div>
      <Slider className='customSlider' ref={sliderRef} {...settings}>
        {props.dateForSlider?.map((item: descroptionSlider, index: number) => {
          return <div key={index}>{item.img}</div>
        })}
      </Slider>
    </div>
  )
}

export default SliderComponent
