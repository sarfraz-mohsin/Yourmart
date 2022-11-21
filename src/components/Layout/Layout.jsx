import React from 'react'

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Routers from '../../routers/Routers' 
import Scroller from '../Scroller/Scroller';

const Layout = () => {
  return (
    <>
        <Header/>
        <div>
            <Routers/>
        </div>
        <Footer/>
        <Scroller/>
    </>
  )
}

export default Layout
