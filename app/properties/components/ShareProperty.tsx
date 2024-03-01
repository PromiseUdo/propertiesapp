import Modal from "@/app/common/modal/Modal";
import ModalHeader from "@/app/common/modal/ModalHeader";
import React from "react";
import Slider from "react-slick";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import Input from "@/app/common/inputs/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import TextArea from "@/app/common/inputs/TextArea";
import { FaCopy } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { BsMessenger } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";

type IShareProperty = {
  open: boolean;
  onClose: () => void;
};
const ShareProperty = (props: IShareProperty) => {
  const { open, onClose } = props;
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      address: "",
      additionalInfo: "",
      region: "",
      phone: "",
      city: "",
      selectedAddress: false,
    },
  });

  return (
    <Modal variant="md" onClose={onClose} open={open}>
      <div className="w-full flex flex-col gap-3 p-8">
        <ModalHeader title="Share Property" onClose={onClose} />
        {/* Render the days in your component */}

        <Input
          register={register}
          id="theirEmail"
          label="Recipients Email Address"
          errors={errors}
        />
        <Input
          register={register}
          id="yourEmail"
          label="Your Email Address"
          errors={errors}
        />

        <div className="flex items-center justify-start gap-3">
          <button className="font-medium rounded-md bg-[#d93c23] py-2 text-[#f7f7f7] w-[6rem]">
            Share
          </button>
          <button
            onClick={() => onClose()}
            className="border border-slate-500 font-medium rounded-md  py-2 text-[#1d1c1c] w-[6rem] hover:bg-slate-300"
          >
            Cancel
          </button>
        </div>

        <div>
          <p className="text-2xl font-medium">Or, Share Via:</p>

          <div className="mt-2 flex flex-col  gap-3">
            <div className="group cursor-pointer w-[fit-content] flex items-center gap-1">
              <FaCopy
                size={25}
                className="text-slate-500 group-hover:text-[#007882] transition-all duration-100 ease-in"
              />
              <span className="text-[#007882] text-[1.2rem] font-medium">
                Copy Link
              </span>
            </div>
            <div className="group cursor-pointer w-[fit-content] flex items-center gap-1">
              <IoLogoWhatsapp
                size={25}
                className="text-slate-500 group-hover:text-[#007882] transition-all duration-100 ease-in"
              />
              <span className="text-[#007882] text-[1.2rem] font-medium">
                Whatsapp
              </span>
            </div>
            <div className="group cursor-pointer w-[fit-content] flex items-center gap-1">
              <FaFacebook
                size={25}
                className="text-slate-500 group-hover:text-[#007882] transition-all duration-100 ease-in"
              />
              <span className="text-[#007882] text-[1.2rem] font-medium">
                Facebook
              </span>
            </div>
            <div className="group cursor-pointer w-[fit-content] flex items-center gap-1">
              <BsMessenger
                size={25}
                className="text-slate-500 group-hover:text-[#007882] transition-all duration-100 ease-in"
              />
              <span className="text-[#007882] text-[1.2rem] font-medium">
                Messenger
              </span>
            </div>
            <div className="group cursor-pointer w-[fit-content] flex items-center gap-1">
              <FaSquareXTwitter
                size={25}
                className="text-slate-500 group-hover:text-[#007882] transition-all duration-100 ease-in "
              />
              <span className="text-[#007882] text-[1.2rem] font-medium">
                X
              </span>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ShareProperty;
