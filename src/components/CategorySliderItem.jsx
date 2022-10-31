import React from 'react'
import styles from '../style'


const CategorySliderItem = () => {
  return (
    <div className={`${styles.flexCenter} h-[463px] w-full`}>
        <div id="cat_slider" className="flex flex-row ">
            <div className="w-[421px] h-[428px]  border-2 border-black m-2 bg-build_mat">
                <h1>Строительный отделочный <br/> инструмент</h1>

            </div>
            <div className="flex flex-col">
                <div className="flex flex-row">
                    <div className="w-[421px] h-[206px] bg-slate-200 border-2 border-black m-2">
                        <p>Эмали</p>
                    </div>
                    <div className="w-[421px] h-[206px] bg-slate-200 border-2 border-black m-2">
                        <p>Лакокраски</p>
                    </div>
                </div >
                <div className="flex flex-row">
                    <div className="w-[421px] h-[206px] bg-slate-200 border-2 border-black m-2">
                        <p>Эмали</p>
                    </div>
                    <div className="w-[421px] h-[206px] bg-slate-200 border-2 border-black m-2">
                        <p>Лакокраски</p>
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default CategorySliderItem
