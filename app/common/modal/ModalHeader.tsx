import React from "react";
// import Typography from "../Typography";
import { MdCancel } from "react-icons/md";

type IModalHeader = {
  onClose?: () => void;
  title?: React.ReactNode;
  subText?: React.ReactNode;
};
const ModalHeader = (props: IModalHeader) => {
  const { onClose, title, subText } = props;
  return (
    <header className="flex flex-col justify-start items-start w-full pb-6">
      <div className="w-full flex justify-between items-center">
        <p className="text-[#1d1c1c] text-2xl font-medium">{title}</p>
        {onClose && (
          <button
            onClick={onClose}
            className="p-2  hover:bg-[#f7f7f7] active:bg-[#f7f7f7] rounded-full"
          >
            <MdCancel size={24} />
            {/* <iconComponents.util.CancelIcon
              width={24}
              height={24}
              stroke="var(--shades-black)"
            /> */}
          </button>
        )}
      </div>
      {subText && (
        <p className="text-gray-200  text-sm font-normal pr-8">{subText}</p>
      )}
    </header>
  );
};

export default ModalHeader;
