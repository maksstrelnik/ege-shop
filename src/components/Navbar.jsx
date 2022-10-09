import React from 'react'
import { logo, phone, heart, close, menu, cart } from "../assets"
import { navLinks, humburgerNav } from "../constants"
import styles from '../style'
import { useState } from "react"
import CartBtn from "./CartBtn";


const Navbar = () => {
    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false)


    return(
         <nav className="w-full h-[80px] bg-grey flex justify-between items-center">
            <div className={`${!toggle ? "hidden" : "flex"} sm:hidden w-full left-0 top-20 absolute xs:justify-center`}>
                <ul className="flex flex-col text-black w-full">
                    {humburgerNav.map((nav,index,image)=>(
                        <>
                        <li key={nav.id}
                            className={` font-poppins border-b-2 xs:items-center font-bold coursor-pointer text-[16px] mx-4 flex flex-row text-black ${active === index.title ? "text-white" : "text-dimWhite"} ${index === navLinks.length - 1 ? "mr-0" : "mr-6"}`}
                            onClick={() => setActive(nav.title)}>

                            <a href={`#${nav.id}`} className="text-black flex flex-row items-center py-5 "><img src={nav.img} alt="img" className="w-[24px] h-[24px] mx-3 my-5" />{nav.title}</a>

                        </li>

                        </>
                     ))}

                </ul>

            </div>

            <div className="sm:hidden flex">
                <img
                    src={toggle ? close : menu}
                    alt="menu"
                    className="w-[28px] h-[28px] object-contain flex justify-end"
                    onClick={() => setToggle(!toggle)}
                />


             </div>
             <div className="flex justify-center">
                <img src={logo} alt="logo" className="h-[40px] w-[60px] mr-10 justify-center"/>
             </div>



             <ul className="flex-1 flex items-center justify-start sm:flex hidden">
                 {navLinks.map((nav,index)=>(
                     <li key={nav.id}
                     className={`font-poppins font-normal coursor-pointer text-[16px] ${active===index.title ? "text-white" : "text-dimWhite"} ${index===navLinks.length-1 ? "mr-0" : "mr-6"}`}
                     onClick={()=>setActive(nav.title)}>
                         <a href={`#${nav.id}`}>{nav.title}</a>
                     </li>
                 ))}
             </ul>

             <div className={`${styles.paragraph} sm:flex hidden items-center`} >
                <div className="flex flex-row">
                    <img src={phone} alt="phone" className="mr-2"/>
                    <p>+7 (965) 084-29-29</p>
                </div>
                <img src={heart} alt="heart" className="mx-10" />
                <CartBtn children="Пусто" />
             </div>
             <div>
                <img src={cart} alt="cart" className="sm:hidden flex"/>
             </div>


         </nav>

)}

export default Navbar
