import React from "react";

const Categories = () => {
  return (
    <div className="w-full bg-gray-100 p-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Categories</h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Category Card */}
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-32 bg-gray-200 rounded-lg mb-4"></div>
              <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
              <div className="h-6 bg-gray-300 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
