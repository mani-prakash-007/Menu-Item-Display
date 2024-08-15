import React from "react";

export const MenuCard = ({
  dishName,
  dishPrice,
  dishDescription,
  dishImage,
}) => {
  const dishDetails = [{ Price: dishPrice }, { Description: dishDescription }];
  return (
    <div className="border border-black min-h-80 w-96 p-5 m-4 rounded-3xl shadow-inner shadow-black bg-white">
      <div
        className={`rounded-2xl w-80 h-96 my-3 ml-2 bg-cover bg-center ${dishImage}`}
      ></div>
      <h1 className="font-bold text-2xl">{dishName}</h1>
      {dishDetails.map((data) => {
        const key = Object.keys(data)[0];
        const value = data[key];
        return (
          <>
            <h2 className="font-bold italic m-1">{key}</h2>
            <p className="px-5 italic">{value}</p>
          </>
        );
      })}
    </div>
  );
};
