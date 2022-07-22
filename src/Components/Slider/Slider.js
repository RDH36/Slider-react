import React, { useState } from 'react'
import './Slider.css'
import dataSlider from './dataSlider'
import BtnSlide from './BtnSlide'

export default function Slider() {
    const [slideAnim, setSlideAnim] = useState({
        index: 1,
        inProgress: false
    })

    const moverigh = () => {
        if (slideAnim.index === 1) {
            const newSlide = {...slideAnim, index: 5, inProgress: true}
            setSlideAnim(newSlide);
        } else {
            const newSlide = {...slideAnim, index: slideAnim.index - 1, inProgress: true}
            setSlideAnim(newSlide);
        }
    }
    const moveLeft = () => {
        if (slideAnim.index === 5) {
            const newSlide = {...slideAnim, index: 1, inProgress: true}
            setSlideAnim(newSlide);
        } else {
            const newSlide = {...slideAnim, index: slideAnim.index + 1, inProgress: true}
            setSlideAnim(newSlide);
        }
    }
    const moveDot = index => {
        setSlideAnim({index : index});
    }
  return (
      <div className='container-slider'>
          {dataSlider.map((item, index) => (
              <div key={item.id} className={slideAnim.index === index + 1 ? "slide active-anim" : "slide"}>
                  <img src={`/Imgs/img${index + 1}.jpg`} alt="" />
              </div>
          ))}
          <BtnSlide next={moverigh} direction="prev"/>
          <BtnSlide next={moveLeft} direction="next" />
          
          <div className='container-dots'>
              {Array.from({ length: 5 }).map((item, index) => (
                  <div className={slideAnim.index === index + 1 ? 'dot active' : 'dot'} onClick={()=> moveDot(index + 1)}>
                  </div>
              ))}
          </div>
      </div>
  )
}
