import React from "react";

export const HardCodeCard = () => {
  return (
    <div className="border border-black min-h-80 w-96 p-5 m-4 rounded-3xl shadow-inner shadow-black bg-white">
      <div className="rounded-2xl w-80 h-96 my-3 ml-2 bg-cover bg-center bg-salmon-dish"></div>
      <h1 className="font-bold text-2xl">Grilled Salmon with Lemon Butter</h1>
      <h2 className="font-bold italic m-1">Price</h2>
      <p className="px-5 italic">$ 20</p>
      <h2 className="font-bold italic m-1">Description</h2>
      <p className="px-5 italic">
        A perfectly grilled fillet of salmon topped with a rich lemon butter
        sauce, served with sautéed vegetables and garlic mashed potatoes
      </p>
    </div>
  );
};
