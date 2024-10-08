import React, { useState } from "react";
import Widget from "./Widget";
import { FaPlus } from "react-icons/fa6";
import AddWidgetModal from "./AddWidgetModal";

interface CategoryProps {
  category: any;
}

const Category: React.FC<CategoryProps> = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cat, setCat] = useState({});

  const handleAddWidget = (cat: any) => {
    setIsModalOpen(true);
    setCat(cat);
  };

  return (
    <div className="w-[99%]">
      <h2 className="font-bold text-lg mb-2">{category.name}</h2>
      <div className="md:flex flex-wrap gap-[1%] w-full justify-start ">
        {category.widgets
          .filter((wid: any) => wid.visible)
          .map((wid: any) => (
            <Widget key={wid.id} widget={wid} />
          ))}
        <div className="h-64 bg-white md:w-[32.66%] w-full mb-2 rounded-2xl flex justify-center items-center">
          <button
            onClick={() => handleAddWidget(category)}
            className="border-2 border-border px-3 py-1 rounded-lg flex items-center gap-2 text-lightText font-medium hover:bg-gray-200"
          >
            <FaPlus /> Add Widget
          </button>
        </div>
      </div>
      <AddWidgetModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        category={cat}
      />
    </div>
  );
};

export default Category;
