import React from 'react'
import search from '../../assets'

const Input = React.forwardRef((props, ref) => {
    return <input type="search" ref={ref} {...props} placeholder="Поиск, например Круг зачистной " className="bg-amber-400  border-b border-slate-500 w-[400px] mr-6" />;
    <img src="assets/" alt="search" />
  });

export default Input
