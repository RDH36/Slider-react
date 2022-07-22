import React from 'react'
import left from './icons/left-arrow.svg' 
import right from './icons/right-arrow.svg' 

export default function BtnSlide({next, direction}) {
  return (
      <button className={direction === "prev" ? "btn-slide prev" : "btn-slide next" } onClick={next}>
          <img src={direction === "prev" ? left: right }  alt="icon" />
      </button>
  )
}
