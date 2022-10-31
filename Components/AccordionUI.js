import React from "react";
import{RiArrowDropDownLine, RiArrowDropUpLine} from "react-icons/ri";

const AccordionUI = ({ title, children, Id, Index, setIndex }) => {
  const handleSetIndex = (Id) => Index !== Id && setIndex(Id);

  return (
    <>
      <div onClick={() => handleSetIndex(Id)} className="flex group cursor-pointer w-3/4 mx-auto h-16 justify-between  items-center p-2 mt-2 rounded-md bg-white hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 ">
        <div className="flex group cursor-pointer">
          <div className="text-black font-semibold pl-10 group-hover:text-white">
            {title}
          </div>
        </div>
        <div className="flex items-center justify-center pr-10">
          {Index !== Id ? (
            <RiArrowDropDownLine className=" group-hover:text-white text-blue-500 text-4xl" />
          ) : (
            <RiArrowDropUpLine className=" group-hover:text-white text-blue-500 text-4xl" />
          )}
        </div>
      </div>

      {Index === Id && (
        <div className="bg-white pl-10  font-semibold text-gray-400 w-3/4 h-auto  rounded-md p-4 border-l-2 mb-2 ">
          {children}
        </div>
      )}
    </>
  );
};

export default AccordionUI;
