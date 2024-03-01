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
import { AiOutlineGoogle } from "react-icons/ai";
import Image from "next/image";
type ILoginOrSignup = {
  open: boolean;
  onClose: () => void;
};
const LoginOrSignup = (props: ILoginOrSignup) => {
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
    <Modal variant="sm" onClose={onClose} open={open}>
      <div className="w-full flex flex-col gap-3 p-8">
        <ModalHeader title="Login or Signup" onClose={onClose} />
        {/* Render the days in your component */}

        <Input register={register} id="phone" label="Phone" errors={errors} />
        <Input register={register} id="email" label="Email" errors={errors} />
        <span className="text-xs text-slate-500">
          We may call or text you to confirm your number{" "}
          <Link href="#" className="underline ">
            Privacy Policy
          </Link>
        </span>
        <div className="flex items-center justify-center">
          <button className="font-medium rounded-md bg-[#d93c23] py-2 text-[#f7f7f7] w-[100%]">
            Continue
          </button>
        </div>

        <div className="flex items-center w-full">
          <span className="w-full border border-[#ccc]"></span>
          <span className="or-text text-slate-700 mx-3 text-lg">OR</span>
          <span className="w-full border border-[#ccc]"></span>
        </div>
        <button className="py-3 bg-[#3f51b5] px-4 font-medium rounded-md border border-[#3f51b5] flex items-center justify-center gap-1">
          <Image
            src={"/facebook.svg"}
            width={25}
            height={25}
            alt="google icon"
          />
          <span className="text-[#f7f7f7]">Sign in with Facebook</span>
        </button>
        <button className="py-3 px-4 font-medium rounded-md border border-slate-500 flex items-center justify-center gap-1">
          <Image src={"/google.svg"} width={20} height={20} alt="google icon" />
          <span className="text-slate-700">Sign in with Google</span>
        </button>
      </div>
    </Modal>
  );
};

export default LoginOrSignup;
