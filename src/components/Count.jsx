import React from 'react'
import { useState } from 'react'

const Count = () => {
    const[value, setValue] =useState('')
  return (
    <div className="flex flex-row">
       <button>-</button>
              <p>1</p>
        <button>+</button>
    </div>
  )
}

export default Count
