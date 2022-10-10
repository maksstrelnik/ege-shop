import { humburgerNav } from "../constants"
import { catalogClose, catalogMenu, mapPin } from "../assets"
import { useState } from "react"
import styles from '../style'

const CategoryBar = () => {
    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false)

    return(



    <div className={`flex flex-row items-center bg-amber-400 w-full h-[48px] left-0  ${styles.paddingX}`}>
        <p className="flex flex-row items-center font-poppins coursor-pointer text-[16px] sm:flex hidden ">
        <img
            src={toggle ? catalogClose : catalogMenu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain flex justify-end mr-2.5 items-center"
            onClick={() => setToggle(!toggle)}
        />
            Каталог
        </p>


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

        <form className="flex flex-row mr-[24px] md:justify-center">
            <input type="text" name="text" placeholder="Поиск, например Круг зачистной " className=" border-[#3C3C3B] bg-amber-400 border-b-2 w-[400px]" />
        </form>
        <div className="flex flex-row items-center text-white">
            <img src={mapPin} alt="location" className="w-[12px] h-[12px] mr-[4px]" />
            <p alssName="font-poppins font-normal ">Москва</p>
        </div>


    </div>

)}

export default CategoryBar
