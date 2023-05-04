import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  const handleOnClick = () => setIsActive(!isActive);

  return (
    <div className="w-full mb-4 overflow-hidden rounded-lg shadow-md">
      <button
        onClick={handleOnClick}
        className="flex justify-between w-full p-4 text-lg font-medium text-left text-gray-800 bg-gray-100 cursor-pointer hover:bg-gray-200 focus:outline-none"
      >
        <span>{title}</span>
        {isActive ? (
          <FiChevronUp className="text-gray-500" />
        ) : (
          <FiChevronDown className="text-gray-500" />
        )}
      </button>
      <div
        className={`${
          isActive ? "h-auto" : "h-0"
        } transition-all duration-500 ease-in-out delay-100 overflow-hidden`}
      >
        <div className="p-4">{content}</div>
      </div>
    </div>
  );
};

export default Accordion;
