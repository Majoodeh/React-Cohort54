import React from "react";

function categoryBtn({ title }) {
  return (
    <button
      className="rounded-md bg-green-500 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-green-700 focus:shadow-none active:bg-green-700 hover:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
      type="button"
    >
      {title}
    </button>
  );
}

export default categoryBtn;
