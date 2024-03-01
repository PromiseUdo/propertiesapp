"use client";

// import { ImageType } from "@/types";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
// import Button from "../Button";
// import toast from "react-hot-toast";
// import { deleteObject, getStorage, ref } from "firebase/storage";
import { useRouter } from "next/navigation";
// import axios from "axios";
// import firebaseApp from "@/libs/firebase";
// import { Product } from "@prisma/client";

interface SelectFileProps {
  item?: any;
  handleFileChange: any;
  isColorSelected?: any;
  productItem?: any;
  id?: any;
}
const SelectFile: React.FC<SelectFileProps> = ({
  item,
  handleFileChange,
  isColorSelected,
  productItem,
  id,
}) => {
  //   const storage = getStorage(firebaseApp);
  const router = useRouter();
  console.log(item, "<<<<<<<<<<<<<<ITEM");
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Do something with the files

    if (acceptedFiles.length > 0) {
      handleFileChange(acceptedFiles[0]);
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [".jpeg", ".jpg", ".png"] },
  });

  //   const handleDelete = useCallback(
  //     async (productItem: Product, item: ImageType) => {
  //       toast("Deleting product image, please wait!");

  //       console.log(productItem);
  //       const productData = {
  //         productItem: productItem,
  //         item: item,
  //       };
  //       const handleImageDelete = async () => {
  //         try {
  //           for (const item of productItem?.images) {
  //             if (item.image) {
  //               const imageRef = ref(storage, item.image);
  //               await deleteObject(imageRef);
  //               console.log("image deleted", item.image);
  //             }
  //           }
  //         } catch (error) {
  //           return console.log("Deleting image error", error);
  //         }
  //       };
  //       await handleImageDelete();

  //       axios
  //         .put(`/api/delete-product-image`, productData)
  //         .then((res) => {
  //           toast.success("Image deleted. Reloading page...");
  //           window.location.reload();
  //         })
  //         .catch((error) => {
  //           toast.error("Failed to delete image");
  //           console.log(error);
  //         });
  //     },
  //     []
  //   );

  if (isColorSelected) {
    return (
      <>
        <div className="w-[100%]">
          <button
            className="text-sm py-1 px-2 font-light border-[1px] bg-[#f7f7f7] text-slate-700 border-shopday-border rounded-lg hover:opacity-80 transition-all w-full  flex items-center justify-center gap-2"
            // onClick={() => {
            //   handleDelete(productItem, item!);
            // }}
          >
            Delete file
          </button>
        </div>
      </>
    );
  }

  return (
    <div
      {...getRootProps()}
      className="border-2 border-slate-400 p-2 border-dashed cursor-pointer text-xs font-normal text-slate-400 flex items-center justify-center"
    >
      <input {...getInputProps()} />

      {<p>Add file or drop file here</p>}
      {/* {isDragActive ? <p>Drop the Image here...</p> : <>+ file</>} */}
    </div>
  );
};

export default SelectFile;
