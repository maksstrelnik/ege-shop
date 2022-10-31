import React from 'react'
import { Navbar, CategoryBar, MainImg, Benefits, Slider, CategorySliderItem, CatSlider, CatalogRef}  from './components/index'
import './index.css'
import styles from './style'

function App() {
  return (
    <div className=" w-full overflow-hidden">
      <div className={` ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <CategoryBar/>
          <MainImg />
          <Benefits />
          <CategorySliderItem/>
          <Slider />
          <CatalogRef />
          <Slider />
        </div>
      </div>
    </div>
  );
}

export default App;
