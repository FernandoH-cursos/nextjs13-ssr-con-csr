"use client";

import { useState } from "react";

interface CartCounterProps {
  value?: number;
}

export const CartCounter = ({ value = 0 }: CartCounterProps) => {
  const [counter, setCounter] = useState(value);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  return (
    <>
      <span className="text-9xl">{counter}</span>

      <div className="flex mt-4">
        <button
          onClick={increment}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          +1
        </button>

        <button
          onClick={decrement}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          -1
        </button>
      </div>
    </>
  );
};
