import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import Category from "./Category";
import { useAppSelector } from "@/redux/hooks";
import AddWidgetMultipleCategory from "./AddWidgetMultipleCategory";

const Dashboard = () => {
  const categories = useAppSelector((state) => state.categories);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="h-full w-11/12 flex flex-col justify-center items-center">
      <div className="flex justify-between items-center w-full mb-6">
        <h1 className="font-extrabold text-xl">CNAPP Dashboard</h1>
        <button
          className="flex items-center gap-3 px-3 py-2 bg-white border-2 border-border rounded-lg"
          onClick={() => setIsModalOpen(true)}
        >
          Add Widget <FaPlus />
        </button>
        <AddWidgetMultipleCategory
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
      {categories.map((cat: any) => (
        <Category key={cat.id} category={cat} />
      ))}
    </div>
  );
};

export default Dashboard;
