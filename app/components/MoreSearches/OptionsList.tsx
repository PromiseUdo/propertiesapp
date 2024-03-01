import React from "react";

interface OptionsListProps {
  children: React.ReactNode;
}

const OptionsList: React.FC<OptionsListProps> = ({ children }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-6 flex flex-col gap-2 ">
      {children}
    </div>
  );
};

export default OptionsList;
