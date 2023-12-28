import React from "react";

export default function Title({children}) {
  return (
    <div>
      <h1 className="text-xl dark:text-black text-white bg-gradient-to-br from-indigo-600 via-cyan-600 to-teal-600 font-semibold text-center">
        {children}
      </h1>
    </div>
  );
}
