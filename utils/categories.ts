import { AiFillPhone, AiOutlineDesktop, AiOutlineLaptop } from "react-icons/ai";
import { BsHandbagFill } from "react-icons/bs";
import { GiConverseShoe } from "react-icons/gi";
import { GiHighHeel } from "react-icons/gi";
import { GiHeartNecklace } from "react-icons/gi";

import { GiClothes } from "react-icons/gi";
import {
  MdFastfood,
  MdOutlineKeyboard,
  MdStorefront,
  MdTv,
  MdWatch,
} from "react-icons/md";

export const categories = [
  {
    label: "Dresses",
    icon: GiClothes,
  },
  {
    label: "Handbags",
    icon: BsHandbagFill,
  },
  {
    label: "Shoes",
    icon: GiConverseShoe,
  },
  {
    label: "Heels",
    icon: GiHighHeel,
  },
  {
    label: "Accessories",
    icon: GiHeartNecklace,
  },
  // {
  //   label: "Groceries",
  //   icon: MdFastfood,
  //   image: "/img/cats/groceries.jpg",
  // },
  {
    label: "Phone",
    icon: AiFillPhone,
    image: "/img/cats/phones.png",
  },
  {
    label: "Laptop",
    icon: AiOutlineLaptop,
    image: "",
  },
  {
    label: "Refrigerator",
    icon: AiOutlineDesktop,
    image: "/img/cats/refrigerator.png",
  },
  {
    label: "Watch",
    icon: MdWatch,
    image: "/img/cats/watche.png",
  },
  {
    label: "TV",
    icon: MdTv,
    image: "/img/cats/television.jpg",
  },
  // {
  //   label: "Peripherals",
  //   icon: MdOutlineKeyboard,
  //   image: "/img/cats/earphone.png",
  // },
];

export const topCategories = [
  {
    label: "Groceries",
    icon: MdFastfood,
    image: "/img/cats/groceries.jpg",
  },
  {
    label: "Phone",
    icon: AiFillPhone,
    image: "/img/cats/phones.png",
    subcategories: [
      {
        label: "Mobile Phones",
      },
      {
        label: "Tablets",
      },
      {
        label: "Radio & Intercom Phones",
      },
    ],
  },

  {
    label: "Refrigerator",
    icon: AiOutlineDesktop,
    image: "/img/cats/refrigerator.png",
  },
  {
    label: "Watch",
    icon: MdWatch,
    image: "/img/cats/watche.png",
  },
  {
    label: "TV",
    icon: MdTv,
    image: "/img/cats/television.jpg",
  },
  {
    label: "Accessories",
    icon: MdOutlineKeyboard,
    image: "/img/cats/earphone.png",
    subcategories: [
      {
        label: "Computing Accessories",
      },
      {
        label: "WiFi & Networking",
      },
      {
        label: "Printers, Scanners",
      },
      {
        label: "Computer software",
      },
    ],
  },
];

export const subcategories = {
  Phone: [
    {
      label: "Mobile Phones",
    },
    {
      label: "Tablets",
    },
    {
      label: "Radio & Intercom Phones",
    },
  ],
  Accessories: [
    {
      label: "Computing Accessories",
    },
    {
      label: "WiFi & Networking",
    },
    {
      label: "Printers, Scanners",
    },
    {
      label: "Computer software",
    },
  ],
};
