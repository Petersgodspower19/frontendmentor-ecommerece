import React, { useState } from 'react'
import Header from './components/Header'
import Cart from './components/Cart';
import Product from './components/DesktopProduct';
import MobileProduct from './components/MobileProduct';

function AppLayout() {
  const [isCartShowing, setIsCartShowing] = useState(false);
  return (
    <div className=' relative '>
      <Header isCartShowing={isCartShowing} setIsCartShowing={setIsCartShowing} />
      <MobileProduct />
      <Product />
      {isCartShowing && <Cart />}

      <div className="text-center p-[1rem]">
    Challenge by <a className='text-orange' href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a className='text-orange' href="https://github.com/Petersgodspower19">Peters Godspower</a>.
     </div>
    </div>
  )
}

export default AppLayout
