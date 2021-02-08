import React from "react";

const StoogeBadge = ({ picture, name, handle, link }) => {
  return (
    <div className="shadow-lg rounded-2xl bg-white dark:bg-gray-800 p-4 mx-auto my-2 border border-blue-200 ">
      <div className="flex-row gap-4 flex justify-center items-center">
        <div className="flex-shrink-0">
          <img
            alt="profile"
            src={picture}
            className="mx-auto object-cover rounded-full h-16 w-16 "
          />
        </div>
        <div className=" flex flex-col">
          <span className="text-gray-600 dark:text-white text-lg font-medium">
            {name}
          </span>
          <span className="text-gray-400 text-xs">{handle}</span>
        </div>
        <a href={link} target="_blank" rel="noreferrer">
          <button className="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-400 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
            Follow
          </button>
        </a>
      </div>
    </div>
  );
};

export default StoogeBadge;
