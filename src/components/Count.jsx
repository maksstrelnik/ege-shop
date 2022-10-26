import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(1);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div className="flex flex-row ">


      <button onClick={decrement}>-</button>
      <h1 className="mx-[16px] text-[20px] font-normal text-black">{count}</h1>
      <button onClick={increment}>+</button>

    </div>
  );
};

export default Count;