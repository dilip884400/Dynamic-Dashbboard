import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import { IoMdClose } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import { useDispatch } from "react-redux";
import {
  addWidget,
  deleteWidget,
  toggleWidgetVisibility,
} from "../redux/slices/widget";
import { v4 as uuidv4 } from "uuid";
import { useAppSelector } from "@/redux/hooks";

interface AddWidgetMultipleCategoryProps {
  isOpen?: any;
  onClose?: () => void;
}

const AddWidgetMultipleCategory: React.FC<AddWidgetMultipleCategoryProps> = ({
  isOpen,
  onClose,
}) => {
  const [widget, setWidget] = useState({
    id: "",
    name: "",
    visible: true,
  });
  const [validation, setValidation] = useState("");
  const categories = useAppSelector((state) => state.categories);

  const dispatch = useDispatch();

  const [selectedCategoryId, setSelectedCategoryId] = useState(
    categories?.[0]?.id || null
  );

  const handleCategoryClick = (cat: any) => {
    setSelectedCategoryId(cat?.id);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setWidget((prevWidget) => ({
      ...prevWidget,
      [name]: value,
    }));
  };

  const handleAddWidget = () => {
    if (!widget.name) {
      setValidation("Please Enter Something");
    } else {
      setValidation("");
      const newWidget = {
        ...widget,
        id: uuidv4(),
      };

      dispatch(
        addWidget({ categoryId: selectedCategoryId, widget: newWidget })
      );

      setWidget({
        id: "",
        name: "",
        visible: true,
      });
    }
  };

  const handleEditVisible = (id: any) => {
    dispatch(
      toggleWidgetVisibility({
        categoryId: selectedCategoryId,
        widgetId: id,
      })
    );
  };

  const category = useAppSelector((state) =>
    state.categories.find((cat: any) => cat?.id === selectedCategoryId)
  );

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Full Screen Media Modal"
      ariaHideApp={false}
      style={{
        overlay: {
          zIndex: 99,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        content: {
          position: "fixed",
          top: 0,
          bottom: 0,
          right: 0,
          left: "60%",
          height: "100%",
          width: "40%",
          padding: 0,
          border: "none",
          borderRadius: "0px",
          overflow: "auto",
        },
      }}
    >
      <div className="w-full">
        <div className="flex justify-between bg-[#30007c] text-white px-5 py-3">
          <h3>Add Widget</h3>{" "}
          <IoMdClose className="size-6 cursor-pointer" onClick={onClose} />
        </div>
        <h2 className="m-4 text-lg text-[#474747]">
          Personalize your dashboard by adding the following widget
        </h2>

        <div className="flex mb-4 mx-4 border-b">
          {categories?.map((cat: any) => (
            <div
              key={cat.id}
              className={`p-3 cursor-pointer ${
                selectedCategoryId === cat.id
                  ? "text-black border-b-2 border-b-indigo-500"
                  : "text-gray-500"
              }`}
              onClick={() => handleCategoryClick(cat)}
            >
              {cat.name.slice(0, 4)}
            </div>
          ))}
        </div>

        {category?.widgets?.map((wid: any) => (
          <div key={wid?.id} className="w-full flex justify-center mb-2">
            <div className="flex justify-start items-center gap-4 p-1 w-[95%] border-2 rounded text-[#585977]">
              <input
                type="checkbox"
                checked={wid?.visible}
                onClick={() => handleEditVisible(wid.id)}
              />
              <span>{wid?.name}</span>

              <IoMdClose
                className=" absolute right-6 cursor-pointer font-bold size-5 hover:text-red-500"
                onClick={() => {
                  dispatch(
                    deleteWidget({
                      categoryId: selectedCategoryId,
                      widgetId: wid?.id,
                    })
                  );
                }}
              />
            </div>
          </div>
        ))}

        <div className="w-full flex justify-center">
          <div className="flex justify-start items-center h-9 w-[95%] border-2 rounded border-[#30007c]  text-[#585977]">
            <input
              className=" h-full w-5/6 px-3"
              name="name"
              value={widget?.name}
              onChange={handleChange}
              placeholder="Add widget here"
            />
            <button
              className="flex justify-center gap-2 items-center h-full w-1/6 bg-[#30007c] text-white"
              onClick={handleAddWidget}
            >
              <IoMdAdd /> Add
            </button>
          </div>
        </div>
        <span className="text-red-500 ml-6">{validation}</span>
      </div>
    </ReactModal>
  );
};

export default AddWidgetMultipleCategory;
