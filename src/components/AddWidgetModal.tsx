import React from "react";
import ReactModal from "react-modal";
import { IoMdClose } from "react-icons/io";

interface AddWidgetModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const AddWidgetModal: React.FC<AddWidgetModalProps> = ({ isOpen, onClose }) => {
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
          left: "60%", // Ensures the content starts at the 50% mark from the left
          height: "100%",
          width: "40%", // Ensures the modal takes the right 50% of the screen
          padding: 0, // Optional padding
          border: "none", // Optional border styling
          borderRadius: "0px", // Optional border radius styling
          overflow: "auto", // Optional overflow styling
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
        <div className="w-full flex justify-center mb-2">
          <div className="flex justify-start items-center gap-4 p-1 w-[95%] border-2 rounded  text-[#585977]">
            <input type="checkbox" id="widget1Checkbox" className="h-5 w-5 " />
            <label className=" h-6 ">Widget 1</label>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="flex justify-start items-center gap-4 p-2 w-[95%] border-2 rounded  text-[#585977]">
            <input type="checkbox" id="widget1Checkbox" className="h-4 w-4 " />
            <label className=" h-5 ">Widget 2</label>
          </div>
        </div>
      </div>
    </ReactModal>
  );
};

export default AddWidgetModal;
