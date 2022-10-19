import React from 'react'
import { assort, quality, delivery } from '../assets'
import { benefits } from '../constants'
import styles from '../style'

const Benefits = () => {
  return (
    <div  className={`${styles.paddingX} flex md:flex-row text-[14px] flex-col mx-8 w-full justify-center`}>
        {/* {benefits.map((ben,index)=>(
            <div className={` flex flex-row w-[1000px]  items-center  mt-8`}>
                <img src={ben.img} alt="m" className="mx-5"/>
                {ben.content}
            </div>

        ))} */}

        <div className="{` ${styles.paddingX} flex flex-row w-[1000px]  items-center  mt-8`}">
            <img src={assort} alt="m" className="mt-5 mr-4"/>
            <p>
              <span className="font-bold">Большой ассортимент </span><br />
              строительных материалов всегда в наличии
            </p>
        </div>

        <div className="{` ${styles.paddingX} flex flex-row w-[1000px]  items-center  mt-8`}">
            <img src={delivery} alt="m" className="mt-5 mr-4"/>
            <p>
              <span className="font-bold">Доставка стройматериалов </span><br />
              в течении четырех часов или в любое удобное время
            </p>
        </div>

        <div className="{` ${styles.paddingX} flex flex-row w-full md:mx-3 items-center  mt-8`}">
            <img src={quality} alt="m" className="mt-5 mr-4"/>
            <p>
              Многоуровневая
              <span className="font-bold"> система управления качеством </span>
              по стандарту <br /> ISO 9001
            </p>
        </div>

    </div>
  )
}

export default Benefits
