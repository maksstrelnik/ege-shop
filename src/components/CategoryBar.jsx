import { humburgerNav, categoryContent } from "../constants"
import { catalogClose, catalogMenu, mapPin } from "../assets"
import { useState } from "react"
import styles from '../style'
import CatalogTabs from "./CatalogTabs"
import Input from "./UI/Input"


const CategoryBar = () => {
    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false)

    return(



    <div className={`flex flex-row items-center bg-amber-400 w-full h-[48px] left-0  ${styles.paddingX}`}
    >

        <div className={`${!toggle ? "hidden" : "flex"} flex flex-row  w-full left-0 top-32 absolute md:justify-start z-10 bg-white`}>
            <CatalogTabs />
        </div>

        <div className="flex flex-row items-center font-poppins mr-6 cursor-pointer text-[16px] md:flex hidden ">
            <img
                src={toggle ? catalogClose : catalogMenu}
                alt="menu"
                className="w-[28px] h-[28px] object-contain sm:flex hidden justify-end coursor-pointer mr-2.5 items-center"
                onClick={() => setToggle(!toggle)}
            />
            <p className={`${toggle ? catalogClose : catalogMenu} coursor-pointer `} onClick={() => setToggle(!toggle)} >Каталог </p>
        </div>

      <ul className="flex flex-row text-black w-full md:flex hidden">
                    {humburgerNav.map((nav,index)=>(
                        <>

                        <li key={nav.id}
                            className={` font-poppins  xs:items-center font-normal coursor-pointer text-[16px] mx-4 flex text-black ${active === index.title ? "text-white" : "text-dimWhite"} `}
                            onClick={() => setActive(nav.title)}>
                            <a href={`#${nav.id}`} className="w-full text-black flex items-center py-5 ">

                                {nav.title}
                            </a>
                        </li>
                        </>
                     ))}
        </ul>
        <div className="flex md:justify-right justify-center ">
            <Input />
            <div className="flex flex-row items-center sm:flex hidden md:justify-center justify-end">
                <a href="#" className=" flex flex-row items-center sm:flex hidden md:justify-center justify-end">
                    <img src={mapPin} alt="mapPin" className="w-[12px] h-[12px] mr-1"/>
                    <p className="font-inter text-white font-[14px] font-normal ">Москва</p>
                </a>

            </div>
        </div>



    </div>

)}

export default CategoryBar
