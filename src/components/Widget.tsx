import React from "react";

interface WidgetProps {
  widget: any;
}

const Widget: React.FC<WidgetProps> = ({ widget }) => {
  return <div className="h-64	 bg-white md:w-[32.66%] w-full mb-2 rounded-2xl flex justify-center items-center text-xl font-medium">{widget.name}</div>;
};

export default Widget;
