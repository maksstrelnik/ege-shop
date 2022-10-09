import React from 'react'
import { Navbar}  from './components/index'
import './index.css'
import styles from './style'

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
    </div>
  );
}

export default App;
