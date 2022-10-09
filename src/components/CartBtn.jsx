import {cart} from '../assets'
import React from 'react'

const CartBtn = ({ children, ...props }) => {
  return (
    <div>
      <button {...props} name="cart_btn" className="sm:flex hidden flex-row px-[20px] py-[14.5px] items-center w-[126px] h-[48px] rounded-[50px] border-2 border-solid border-orange-400 text-center cursor-pointer hover:bg-orange-400">
        <img src={cart} alt="cart" />
        {children}

      </button>

    </div>

  )
}

export default CartBtn
