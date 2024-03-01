"use client";

import Link from "next/link";
import React, { useCallback, useState } from "react";
import { AiFillCaretDown, AiOutlineUser } from "react-icons/ai";
import MenuItem from "./MenuItem";
// import { signOut } from "next-auth/react";
import Backdrop from "./Backdrop";
// import { SafeUser } from "@/types";
import Avatar from "../Avatar";
import LoginOrSignup from "@/app/(clientauth)/login-signup/LoginOrSignup";
import { useToggleState } from "@/hooks/useToggleState";

// interface UserMenuProps {
//   currentUser: SafeUser | null;
// }

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const {
    state: isModalOpen,
    open: openModal,
    close: closeModal,
  } = useToggleState(false);
  return (
    <>
      <div className="relative z-50">
        <div
          onClick={toggleOpen}
          className="p-2 w-20 justify-between border border-shopday-border flex flex-row items-center gap-1 rounded-full cursor-pointer hover:shadow-md transition text-slate-700"
        >
          {/* <AiOutlineUser color="#2c3335" /> */}

          <Avatar src={"/defaultImage.png"} />
          <AiFillCaretDown color="#f7f7f7" />
        </div>
        {isOpen && (
          <div className="z-50 absolute rounded-md shadow-md w-[170px] bg-[#f7f7f7] overflow-hidden text-black right-0 top-12 text-sm flex flex-col cursor-pointer">
            <div>
              {/* <Link href="/vendor/dashboard">
                <MenuItem onClick={toggleOpen}>Vendor Dashboard</MenuItem>
              </Link> */}

              <hr />
              <MenuItem
                onClick={() => {
                  toggleOpen();
                  //   signOut();
                }}
              >
                Logout
              </MenuItem>
            </div>

            <div>
              <MenuItem
                onClick={() => {
                  toggleOpen();
                  openModal();
                }}
              >
                Login
              </MenuItem>
              <MenuItem
                onClick={() => {
                  toggleOpen();
                  openModal();
                }}
              >
                Signup
              </MenuItem>
            </div>
          </div>
        )}
      </div>

      {isOpen ? <Backdrop onClick={toggleOpen} /> : null}
      <LoginOrSignup open={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default UserMenu;
