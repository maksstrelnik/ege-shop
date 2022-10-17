import React from 'react'
import { Navbar, CategoryBar, MainImg}  from './components/index'
import './index.css'
import styles from './style'
import TabItem from './components/BuildCateg';

function App() {
  return (
    <div className=" w-full overflow-hidden">
      <div className={` ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <CategoryBar/>
          <MainImg />
        </div>
      </div>
    </div>
  );
}

export default App;
