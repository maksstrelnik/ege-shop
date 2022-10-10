import React from 'react'
import { Navbar, CategoryBar}  from './components/index'
import './index.css'
import styles from './style'

function App() {
  return (
    <div className=" w-full overflow-hidden">
      <div className={` ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <CategoryBar/>
        </div>
      </div>
    </div>
  );
}

export default App;
