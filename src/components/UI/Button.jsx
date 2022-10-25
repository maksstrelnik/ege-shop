import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button  name="btn" className="sm:flex hidden flex-row px-[20px] py-[14.5px] items-center w-[126px] h-[48px] rounded-[50px] border-2 border-solid border-orange-400 text-center cursor-pointer hover:bg-orange-400 hover:text-white">

        <p>{props.text}</p>


      </button>
    </div>
  )
}

export default Button
