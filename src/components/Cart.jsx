import React from "react";
import { useDispatch, useSelector } from "react-redux";
import trash from "../assets/images/icon-delete.svg";
import { removeFromCart } from "../cartSlice";
import image from "../assets/images/image-product-1.jpg";

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  function handleRemove(){
      const product = {
              id: 1,
              name: "Fall Limited Edition Sneakers",
              image: image,
              price: 125.0,
            };
      dispatch(removeFromCart(product));
  }

  return (
    <div
      className="bg-white z-20 rounded-[8px] w-[350px] shadow-lg 
        absolute top-[80px] right-1/2 translate-x-1/2 
        md:right-5 md:translate-x-0 p-4"
    >
      <h2 className="text-black font-black text-lg mb-4">Cart</h2>
      <hr />
      {cart.length > 0 ? (
        cart.map((product) => (
          <div key={product.id} className="flex items-center gap-3 mt-4 mb-3">
            <img
              src={product.image}
              alt=""
              className="w-[50px] rounded-[8px]"
            />
            <div className="flex flex-col gap-0.5">
              <h2 className="text-dark-grayish-blue">{product.name}</h2>
              <h3>
                {product.price} x {product.qty}
                <span className="font-bold ml-4 text-black">
                  ${Math.round(product.price * product.qty)}
                </span>
              </h3>
            </div>
            <img src={trash} alt="" onClick={handleRemove} className="cursor-pointer" />
          </div>
        ))
      ) : (
        <p className="text-center text-dark-grayish-blue mt-4">Your cart is empty.</p>
      )}
      {cart.length > 0 && (
        <button
          className="text-white bg-orange font-semibold text-center w-full rounded-[5px] 
          cursor-pointer p-[9px] mt-4 hover:bg-orange-hover"
        >
          Checkout
        </button>
      )}
    </div>
  );
}

export default Cart;
