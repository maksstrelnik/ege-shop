import React from 'react'
import styles from '../style'
import {  categoryContent, humburgerNav } from "../constants"
import { useState } from "react"

const BuildCateg = () => {

    const [active, setActive] = useState("Home");
  return (
    <>
    <div className="text-black w-full">
        <h1  className={`${styles.paddingX} font-poppins text-xl font-semibold mb-4`}>
          {humburgerNav.title}
        </h1>
    </div>
    <div className={`${styles.paddingX} flex flex-row`}>
        {categoryContent.map((nav,index)=>(
            <div className="flex flex-col">
                <h3 key={nav.id}
                    className={`font-poppins md:items-center font-bold coursor-pointer  left-0 text-[16px]  ${index === categoryContent.length - 1 ? "mr-0" :  "mr-40"}`}
                     onClick={() => setActive(nav.title)}>
                         {nav.title}
                </h3>
                <ul className="flex flex-col text-black w-full ">
                    {nav.subcategories.map((nav,index)=>(
                        <>
                        <li key={nav.id}
                            className={`xs:items-center  coursor-pointer text-[16px] flex flex-row  ${active === index.title ? "text-white" : "text-dimWhite"} ${index === categoryContent.length - 1 ? "mr-0" : "mr-6"}`}
                            onClick={() => setActive(nav.title)}>

                            <a href={`#${nav.id}`} className=" font-poppins font-medium w-full text-[#A1A0A0] flex flex-row items-center py-1.5 ">
                                {nav.title}
                            </a>
                        </li>
                        </>
                     ))}
                </ul>
             </div>
        ))}
    </div>
    </>

  )
}

export default BuildCateg
