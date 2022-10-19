import React from 'react'
import { popItem, procent } from '../assets'

const Item = () => {
  return (
    <div className="border-2 h-[430px} w-[209px] mr-7 ">
        <div className='z-10 '>
            <a href="#" className='w-[54px] h-[39px] bg-rose-500 text-white absolute rounded-full '><span className="py-2.5 px-5">%</span></a>
        </div>
         <img src={popItem} alt="pop" />

    </div>
  )
}

export default Item
