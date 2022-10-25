import React from 'react'
import { popItem, heart } from '../assets'
import Button from '../components/UI/Button'
import Count from './Count'


const Item = () => {
  return (
    <div className="border-2 h-[530px] w-[300px] ">
        <div className='z-10 flex flex-row justify-between  items-center  mt-[27px] mx-[27px]'>
            <a href="#" className='w-[54px] h-[40px]  bg-rose-500 text-white  rounded-full '><span className="py-2.5 px-5">%</span></a>
            <img src={heart} alt="favorites" className="flex justify-self-end" />

        </div>
        <div className="flex justify-center ">
           <img src={popItem} alt="pop" className=""/>
        </div>
        <h2 className='px-[24px] text-[20px] font-bold'>Круг зачистной 125х6х22</h2>
        <p className='px-[24px] text-[16px]'>Артикул 00004</p>
        <p className='px-[24px] mt-[20px]'>Цена за штуку</p>
        <div className="flex flex-row px-[24px]">
         <h2 className=' text-[20px] font-normal'><s>58 руб.</s></h2>
         <h2 className='text-[20px] font-bold pl-[16px]' >48 руб.</h2>
        </div>

        <div className='flex flex-row'>
          <div >
            <p>Количество</p>

              <Count />



          </div>
          <Button text="В корзине" className="mb-6" />

        </div>




    </div>
  )
}

export default Item
