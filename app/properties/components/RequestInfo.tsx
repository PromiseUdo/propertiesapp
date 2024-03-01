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

type IRequestInfo = {
  open: boolean;
  onClose: () => void;
};
const RequestInfo = (props: IRequestInfo) => {
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
        <ModalHeader title="Learn more about this property" onClose={onClose} />
        {/* Render the days in your component */}

        <Input register={register} id="phone" label="Phone" errors={errors} />
        <Input register={register} id="email" label="Email" errors={errors} />
        <TextArea
          register={register}
          id="message"
          label="Message"
          errors={errors}
          defaultValue="I am interested in the property..."
        />
        <div className="flex items-center justify-center">
          <button className="font-medium rounded-md bg-[#d93c23] py-2 text-[#f7f7f7] w-[100%]">
            Request Info
          </button>
        </div>
        <span className="text-xs text-slate-500">
          By clicking on Request Info, you agree that Trulia and real estate
          professionals may contact you via phone/text about your inquiry, which
          may involve the use of automated means You also agree to our{" "}
          <Link href="#" className="underline ">
            Terms of Use
          </Link>
        </span>
      </div>
    </Modal>
  );
};

export default RequestInfo;
