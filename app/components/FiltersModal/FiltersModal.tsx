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
import CustomCheckBox from "@/app/common/inputs/CustomCheckBox";

type IFiltersModal = {
  open: boolean;
  onClose: () => void;
};

const propertyTypes = [
  "Bungalow",
  "Duplex",
  "Terrace",
  "Land",
  "Mansion",
  "Flats",
];
const FiltersModal = (props: IFiltersModal) => {
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

  return (
    <Modal variant="lg" onClose={onClose} open={open}>
      <div className=" w-full flex flex-col gap-3 p-8">
        <ModalHeader title="Filter Properties" onClose={onClose} />

        <div>
          <h4 className="text-xl font-medium ">Type of property</h4>
          <p className="my-1">Search apartments, houses, lands</p>
          <Slider className="custom-slider px-1" {...settings}>
            {propertyTypes.map((label, idx) => (
              <div
                className="cursor-pointer h-20 py-1 hover:bg-slate-100 rounded-md  border border-slate-500 flex flex-col items-center justify-center"
                key={idx}
              >
                <p className="font-medium text-center flex items-center justify-center h-full m-0">
                  {label}
                </p>
              </div>
            ))}
          </Slider>
        </div>

        <div className="my-1">
          <h4 className="text-xl font-medium">Price range</h4>

          <div className="mt-1 flex items-center gap-3">
            <Input
              id="minPrice"
              label="Minimum Price"
              register={register}
              errors={errors}
            />
            <div>-</div>
            <Input
              id="maxPrice"
              label="Maximum Price"
              register={register}
              errors={errors}
            />
          </div>
        </div>
        <div className="my-1">
          <h4 className="text-xl font-medium">Rooms and baths</h4>

          <div className="my-1 flex flex-col gap-3">
            <p>Bedrooms</p>
            <div className="flex items-center gap-4">
              <button className="flex items-center justify-center rounded-3xl border border-slate-500 px-2 py-1 w-[3.5rem]">
                Any
              </button>
              <button className="flex items-center justify-center rounded-3xl border border-slate-500 px-2 py-1 w-[3.5rem]">
                1
              </button>
              <button className="flex items-center justify-center rounded-3xl border border-slate-500 px-2 py-1 w-[3.5rem]">
                2
              </button>
              <button className="flex items-center justify-center rounded-3xl border border-slate-500 px-2 py-1 w-[3.5rem]">
                3
              </button>
              <button className="flex items-center justify-center rounded-3xl border border-slate-500 px-2 py-1 w-[3.5rem]">
                4
              </button>
              <button className="flex items-center justify-center rounded-3xl border border-slate-500 px-2 py-1 w-[3.5rem]">
                5
              </button>
              <button className="flex items-center justify-center rounded-3xl border border-slate-500 px-2 py-1 w-[3.5rem]">
                6+
              </button>
            </div>
          </div>
          <div className="my-1 flex flex-col gap-3">
            <p>Bathrooms</p>
            <div className="flex items-center gap-4">
              <button className="flex items-center justify-center rounded-3xl border border-slate-500 px-2 py-1 w-[3.5rem]">
                Any
              </button>
              <button className="flex items-center justify-center rounded-3xl border border-slate-500 px-2 py-1 w-[3.5rem]">
                1
              </button>
              <button className="flex items-center justify-center rounded-3xl border border-slate-500 px-2 py-1 w-[3.5rem]">
                2
              </button>
              <button className="flex items-center justify-center rounded-3xl border border-slate-500 px-2 py-1 w-[3.5rem]">
                3
              </button>
              <button className="flex items-center justify-center rounded-3xl border border-slate-500 px-2 py-1 w-[3.5rem]">
                4
              </button>
              <button className="flex items-center justify-center rounded-3xl border border-slate-500 px-2 py-1 w-[3.5rem]">
                5
              </button>
              <button className="flex items-center justify-center rounded-3xl border border-slate-500 px-2 py-1 w-[3.5rem]">
                6+
              </button>
            </div>
          </div>
        </div>
        <div className="my-1">
          <h4 className="text-xl font-medium">Amenities</h4>

          <div className="flex flex-col gap-3">
            <p className="">Essentials</p>
            <div className="grid grid-cols-2 gap-4">
              <CustomCheckBox
                id="ac"
                register={register}
                label="Air-conditioning"
              />
              <CustomCheckBox
                id="furnished"
                register={register}
                label="Furnished"
              />
              <CustomCheckBox
                id="parking"
                register={register}
                label="Parking space"
              />
              <CustomCheckBox id="fenced" register={register} label="Fenced" />
              <CustomCheckBox
                id="pool"
                register={register}
                label="Swimming pool"
              />
              <CustomCheckBox
                id="pets"
                register={register}
                label="Allows pets"
              />
            </div>
          </div>
        </div>
        <div className="border-t border-slate-200 pt-3 w-[100%] flex items-center justify-between">
          <button className="  font-medium rounded-md  py-2 text-[#1d1c1c] px-3 hover:bg-slate-300">
            Clear all
          </button>
          <button className="font-medium rounded-md bg-[#d93c23] py-2 px-3  text-[#f7f7f7] ">
            Show results
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default FiltersModal;
