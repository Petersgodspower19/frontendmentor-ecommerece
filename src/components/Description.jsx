import React, { useState } from "react";
import { useDispatch } from "react-redux";
import cartLogo from "../assets/images/icon-cart.svg";
import iconMinus from "../assets/images/icon-minus.svg";
import iconPlus from "../assets/images/icon-plus.svg";
import { addToCart } from "../cartSlice";
import image from "../assets/images/image-product-1.jpg";

function Description() {
  const [qty, setQty] = useState(0);
  const dispatch = useDispatch();

  function handleAddToCart() {
    if (qty > 0) {
      const product = {
        id: 1,
        name: "Fall Limited Edition Sneakers",
        image: image,
        price: 125.0,
        qty: qty,
      };
      dispatch(addToCart(product));
      setQty(0); 
    }
  }

  

  return (
    <div className="w-[100%] md:w-[350px] flex flex-col gap-3">
      <h1 className="uppercase font-bold text-dark-grayish-blue text-[12px]">
        Sneaker Company
      </h1>
      <h1 className="text-very-dark-blue font-bold capitalize text-2xl">
        Fall Limited Edition Sneakers
      </h1>
      <p className="text-dark-grayish-blue text-[17px]">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <p className="text-very-dark-blue font-bold text-xl">
        $125.00
        <span className="ml-2 bg-very-dark-blue text-white p-[5px] rounded-[5px] text-sm">
          50%
        </span>
      </p>
      <p className="line-through text-dark-grayish-blue text-[12px] font-bold">
        $250.00
      </p>
      <div className="flex flex-col md:flex-row items-center gap-3">
        <div className="flex items-center w-[100%] font-bold md:w-[130px] justify-between bg-light-grayish-blue p-[10px] rounded-md">
          {qty > 0 && (
            <img
              src={iconMinus}
              alt="Decrease quantity"
              className="cursor-pointer"
              onClick={() => setQty(qty - 1)}
            />
          )}
          <p className="text-very-dark-blue text-[19px]">{qty}</p>
          <img
            src={iconPlus}
            alt="Increase quantity"
            className="cursor-pointer"
            onClick={() => setQty(qty + 1)}
          />
        </div>

        <button
          className="flex font-bold w-[100%] md:w-[170px] justify-center text-white gap-3 bg-orange items-center rounded-[5px] 
          cursor-pointer p-[9px] hover:bg-orange-hover disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleAddToCart}
          disabled={qty === 0}
        >
          <img src={cartLogo} alt="Cart icon" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Description;
