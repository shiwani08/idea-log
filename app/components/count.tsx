"use client";

import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex items-center justify-center text-black">
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
      >
        Increase
      </button>

      <span className="text-2xl font-bold w-10 text-center">{count}</span>

      <button
        onClick={() => setCount(count - 1)}
        className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
      >
        Decrease
      </button>
    </div>
  );
};

export default Count;
