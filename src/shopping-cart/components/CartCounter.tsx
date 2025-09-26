"use client";

import { useAppDispatch, useAppSelector } from "@/store";
import { useEffect } from "react";

interface CounterResponse {
  method: string;
  count: number;
}

const getApiCounter = async (): Promise<CounterResponse> => {
  const data = await fetch("/api/counter").then((res) => res.json());
  // console.log(data);

  return data;
};

interface CartCounterProps {
  value?: number;
}

export const CartCounter = ({ value }: CartCounterProps) => {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  // Inicializar estado de contador sin API
 /*  useEffect(() => {
    if (value) dispatch({ type: "counter/initCounterState", payload: value });
  }, [value, dispatch]); */

  // Inicializar estado de contador con API
  useEffect(() => {
    getApiCounter()
      .then(({ count }) => {
        dispatch({ type: "counter/initCounterState", payload: count });
      });
  }, [value, dispatch]);

  return (
    <>
      <span className="text-9xl">{count}</span>

      <div className="flex mt-4">
        <button
          onClick={() => dispatch({ type: "counter/addOne" })}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          +1
        </button>

        <button
          onClick={() => dispatch({ type: "counter/substractOne" })}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          -1
        </button>
      </div>
    </>
  );
};
