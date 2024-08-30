import React from "react";
function Cards({name, btn="come on"}){
    return(
<div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <img
          className="w-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8sfyyNWzjeMxzNRcDX1_tluhfVY2G9B7ulw&s"
          alt="Beautiful Girl"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base">
            This is a beautiful landscape showcasing the beauty of nature.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {btn}
          </button>
        </div>
      </div>
    </div>
    )
}
export default Cards