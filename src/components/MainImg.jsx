import React from 'react'
import styles from '../style'
import { banner, smBanner } from "../assets"

const MainImg = () => {
  return (
    <div className='w-full h-[620px] bg-contain bg-auto bg-no-repeat xs:bg-mainBanner bg-smallBanner flex items-center  '>

        <h1 className={`${styles.paddingX} font-poppins  font-bold text-[30px] text-black leading-tight text-[#F0BA4E]`}>Инструмент для <br className="sm:hidden flex "/> вашего бизнеса</h1>
     {/* <img src={smBanner} alt="banner" className="xs:hidden flex" /> */}
      {/* <img src={banner} alt="banner" className="xs:flex hidden"/> */}
    </div>
  )
}

export default MainImg
