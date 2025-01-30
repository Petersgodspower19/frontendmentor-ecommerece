import React from 'react'
import logo from "../assets/images/logo.svg" 
import Links from './Links'
import menuIcon from "../assets/images/icon-menu.svg" 
import cartLogo from "../assets/images/icon-cart.svg"
import avatar from "../assets/images/image-avatar.png"
import { useSelector } from 'react-redux'

function Header({ setIsCartShowing, isCartShowing }) {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <div className="relative">
      <div className="flex items-center justify-between p-[1rem] md:px-[4rem] relative z-10 bg-white">
        <div className="flex items-center gap-5">
          <img src={menuIcon} alt="" className="md:hidden cursor-pointer" />
          <img src={logo} alt="" />
          <div className="hidden md:flex items-center gap-2">
            <Links>Collection</Links>
            <Links>Men</Links>
            <Links>Women</Links>
            <Links>About</Links>
            <Links>Contact</Links>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative cursor-pointer">
            <img src={cartLogo} alt="" onClick={() => setIsCartShowing(!isCartShowing)} />
            {cart.length >= 1 && (
              <div className="absolute -top-2 -right-2 bg-orange rounded-full text-xs font-bold text-white flex items-center justify-center w-5 h-5">
                {cart.length}
              </div>
            )}
          </div>
          <img
            src={avatar}
            alt=""
            className="w-[30px] md:w-[40px] border-orange border-2 cursor-pointer rounded-[50%]"
          />
        </div>
      </div>
      
      
      <div className="absolute bottom-0 left-[1rem] right-[1rem] md:left-[4rem] md:right-[4rem]
       border-b border-orange"></div>
    </div>
  );
}

export default Header;