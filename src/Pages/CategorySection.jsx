import React from "react";
import { FaTrash, FaBuilding, FaTools, FaRoad, FaTasks } from "react-icons/fa";

const categories = [
  { 
    title: "Garbage",
    icon: <FaTrash></FaTrash>,
    bgColor: "bg-green-500" 
  },
  { 
    title: "Illegal Construction",
    icon: <FaBuilding></FaBuilding>, 
    bgColor: "bg-red-500" 
  },
  { 
    title: "Broken Public Property", 
    icon: <FaTools></FaTools>,
    bgColor: "bg-yellow-500" 
  },
  { 
    title: "Road Damage",
    icon: <FaRoad></FaRoad>,
    bgColor: "bg-blue-500" 
  },
];

const CategorySection = () => {
  return (
    <div className="max-w-10/12 mx-auto px-4 py-12">

<div className="text-center mb-10 flex flex-col items-center">
  <h2 className="flex flex-col sm:flex-row items-center justify-center gap-2 text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
    <FaTasks className="text-green-500" size={28} />
    <span>Report Categories</span>
  </h2>
  <p className="text-gray-600 mt-2 max-w-md dark:text-gray-400">
    Choose a category to report and help improve your community
  </p>
</div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center dark:bg-gray-800 justify-center p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 cursor-pointer"
          >
            <div
              className={`w-16 h-16 flex items-center justify-center text-white rounded-full mb-4 ${category.bgColor}`}
            >
              {category.icon}
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 text-center dark:text-white">
              {category.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
