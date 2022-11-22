import React, {useRef, useEffect} from 'react'
import './Scroller.css'

const Scroller = () => {
    const scroller = useRef(null)

    const scrollerFunc = () => {
        window.addEventListener('scroll', () => {
            if(document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
                scroller.current.classList.add('scroll-up')
            }
            else{
                scroller.current.classList.remove('scroll-up')
            }
        })
    }

    useEffect(() => {
        scrollerFunc()

        return () => window.removeEventListener('scroll', scrollerFunc)
    })

  return (
    <a href='#top'>
        <div ref={scroller}>
            <i className="ri-arrow-up-line"></i>
        </div>
    </a>
  )
}

export default Scroller
