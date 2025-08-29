"use client";

import React, { useState } from "react";
import type { RootState } from "../redux/store/store";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "../redux/slices/counterSlice";

const Count = () => {
  // const [count, setCount] = useState(0);

  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col items-center justify-center text-black space-y-4">
      <div>
        <h1>Count from the count page</h1>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => dispatch(incrementByAmount(5))}
          className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
        >
          Increase
        </button>

        <span className="text-2xl font-bold w-10 text-center">{count}</span>

        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
        >
          Decrease
        </button>
      </div>
    </div>
  );
};

export default Count;
