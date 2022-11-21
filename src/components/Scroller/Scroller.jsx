import React, {useRef, useEffect} from 'react'
import './Scroller.css'

const Scroller = () => {
    const scroller = useRef(null)

  return (
    <div className='scroll-up'>
      <i className="ri-arrow-up-line"></i>
    </div>
  )
}

export default Scroller
