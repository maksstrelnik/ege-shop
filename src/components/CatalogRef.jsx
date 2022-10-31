import React from 'react'
import {builder} from "../assets"

const CatalogRef = () => {
  return (
    <div className="flex justify-between w-full  bg-no-repeat bg-right bg-slate-100 xs:h-[250px] h-[250px]">
        <div>
            <h1 className="uppercase xs:text-[28px] text-base font-inter font-medium pt-7 pl-7">Более 10 000 наименований </h1>
            <p className="font-inter font-normal text-slate-400 ml-7 mt-4 xs:text-[20px] text-[14px] ">Инструмент для вашего бизнеса,   разнообразных марок</p>
            <div className="relative mt-24 ml-7 ">
                <a href="#" className="font-inter font-semibold text-catRef ">Перейти в каталог</a>
            </div>
        </div>
        <img src={builder} alt="builder" className=""/>

    </div>
  )
}

export default CatalogRef
