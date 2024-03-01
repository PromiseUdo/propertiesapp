// import { ImageType } from "@/types";
import React, { useState, useEffect, useCallback } from "react";
import SelectFile from "./SelectFile";
// import SelectImage from "./SelectImage";
// import Button from "../Button";

interface SelectFileContainerProps {
  item?: any;
  addImageToState?: any;
  removeImageFromState?: any;
  isProductCreated: boolean;
  isColorSelected?: boolean | undefined;
  productItem?: any;
  id?: string;
}
const SelectFileContainer: React.FC<SelectFileContainerProps> = ({
  item,
  addImageToState,
  removeImageFromState,
  isProductCreated,
  isColorSelected = false,
  productItem,
  id,
}) => {
  const [isSelected, setIsSelected] = useState(isColorSelected);
  const [file, setFile] = useState<File | null>(null);
  useEffect(() => {
    if (isProductCreated) {
      setIsSelected(false);
      setFile(null);
    }
  }, [isProductCreated]);

  const handleFileChange = useCallback((value: File) => {
    setFile(value);
    addImageToState({ ...item, image: value });
  }, []);

  const handleCheck = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setIsSelected(e.target.checked);

    if (!e.target.checked) {
      setFile(null);
      removeImageFromState(item);
    }
  }, []);

  return (
    <div className="grid grid-cols-1 overflow-y-autoborder-b-[1.2px] border-slate-200 items-center p-2">
      {/* <div className="flex flex-row gap-2 items-center h-[60px]">
        <input
          id={item?.color}
          type="checkbox"
          checked={isSelected}
          onChange={handleCheck}
          className="cursor-pointer"
        />
        <label htmlFor={item?.color} className="font-medium cursor-pointer">
          {item?.color}
        </label>
      </div> */}

      <div>
        <label htmlFor={item?.color} className=" text-xs !text-left">
          Attachments (optional)
        </label>
        {!file && (
          <div className="mt-2 col-span-2 text-center">
            <SelectFile
              item={item}
              handleFileChange={handleFileChange}
              isColorSelected={isColorSelected}
              productItem={productItem}
              id={id}
            />
          </div>
        )}

        {file && (
          <div className="flex flex-row gap-2 text-sm col-span-2 items-center justify-between">
            <p>{file?.name}</p>
            <div className="w-[70px]">
              <button
                className="text-sm py-1 px-2 font-light border-[1px] bg-[#f7f7f7] text-slate-700 border-shopday-border rounded-lg hover:opacity-80 transition-all w-full  flex items-center justify-center gap-2"

                // onClick={() => {
                //   setFile(null);
                //   removeImageFromState(item);
                // }}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectFileContainer;
