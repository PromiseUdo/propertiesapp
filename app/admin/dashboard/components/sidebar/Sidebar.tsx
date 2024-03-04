import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useMenuItems } from "../../dashboard.hooks";
import NavItem from "../NavItem";

const Sidebar = () => {
  const { menuItems } = useMenuItems();

  return (
    <div className="bg-voks-shades-white border-r border-voks-shades-gray-1 h-screen  flex flex-col justify-start pt-8  px-0 gap-20 min-w-full">
      <Link
        href="/dashboard"
        // to={`/${userType}/app/dashboard`}
        className="active:scale-95 ml-[22px] mr-auto"
      >
        {/* <iconComponents.util.LogoIcon className='h-[39px]' /> */}
        <div className="relative w-[200px] h-[50px] ">
          <Image src={"/logo.png"} alt="logo" fill objectFit="cover" />
        </div>
      </Link>

      <nav className="pl-8">
        <ul role="menu">
          {menuItems.map((menu) => (
            <NavItem {...menu} key={menu.name} queryKey={menu.key} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
