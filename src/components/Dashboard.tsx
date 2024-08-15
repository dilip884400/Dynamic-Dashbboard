import React from "react";
import { FaPlus } from "react-icons/fa6";
import Category from "./Category";
import { data } from "@/utils/data";

const Dashboard = () => {
  return (
    <div className="  h-full w-11/12 flex flex-col justify-center items-center">
        <div className="flex justify-between items-center bg-red-100 w-full mb-6">
          <h1 className="font-extrabold text-xl">CNAPP Dashboard</h1>
          <button className="flex items-center gap-3 px-3 py-2 bg-white border-2 border-border rounded-lg">
            Add Widget <FaPlus />
          </button>
        </div>
        {data.categories.map((cat: any) => (
          <Category category={cat} />
        ))}
    </div>
  );
};

export default Dashboard;
