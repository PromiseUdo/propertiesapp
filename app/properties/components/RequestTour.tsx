import Modal from "@/app/common/modal/Modal";
import ModalHeader from "@/app/common/modal/ModalHeader";
import React from "react";
import Slider from "react-slick";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import Input from "@/app/common/inputs/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";

type IRequestTour = {
  open: boolean;
  onClose: () => void;
};
const RequestTour = (props: IRequestTour) => {
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
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <IoIosArrowDroprightCircle />,
    prevArrow: <IoIosArrowDropleftCircle />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Function to get an array of 7 days starting from tomorrow
  const getWeekDays = () => {
    const days = [];
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1); // Start from tomorrow

    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(tomorrow);
      currentDate.setDate(tomorrow.getDate() + i);
      days.push(currentDate.toDateString());
    }

    return days;
  };

  const weekDays = getWeekDays();

  return (
    <Modal variant="md" onClose={onClose} open={open}>
      <div className="w-full flex flex-col gap-3 p-8">
        <ModalHeader title="Schedule a Tour" onClose={onClose} />
        {/* Render the days in your component */}

        <Slider className="custom-slider px-1" {...settings}>
          {weekDays.map((dateString, idx) => {
            const currentDate = new Date(dateString);
            const day = currentDate.getDate();
            const dayName = currentDate.toLocaleDateString("en-US", {
              weekday: "short",
            });
            const month = currentDate.toLocaleDateString("en-US", {
              month: "short",
            });

            return (
              <div
                className="cursor-pointer py-1 hover:bg-slate-100 rounded-md flex flex-col items-center justify-center gap-6 border border-slate-500"
                key={idx}
              >
                <p className="text-center">{dayName}</p>
                <p className="text-center font-medium">{day}</p>
                <p className="text-center">{month}</p>
              </div>
            );
          })}
        </Slider>

        <Input
          label="Time"
          type="time"
          id="time"
          register={register}
          errors={errors}
        />

        <Input register={register} id="phone" label="Phone" errors={errors} />
        <Input register={register} id="email" label="Email" errors={errors} />

        <div className="flex items-center justify-center">
          <button className="font-medium rounded-md bg-[#d93c23] py-2 text-[#f7f7f7] w-[100%]">
            Schedule a Tour
          </button>
        </div>
        <span className="text-xs text-slate-500">
          By clicking on Schedule A Tour, you agree that Trulia and real estate
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

export default RequestTour;
