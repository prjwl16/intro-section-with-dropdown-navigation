"use client";

import Image from "next/image";
import logo from "../public/logo.svg";
import MenuItem from "./MenuItem";
import { useState } from "react";
import Menubar from "./Menubar";

function Navbar() {
  const [open, setOpen] = useState("");

  function showMenu(title :string) :void {
    setOpen(title);
  }

  return (
    <div className="flex flex-row items-center w-full">
      <Image className="mt-2 h-8 overflow-visible" src={logo} alt="Logo" />
      <div className="flex flex-row items-center justify-between w-full h-max">
        <div className="flex flex-row ml-14 items-center">
          <MenuItem
            title="Feature"
            showMenu={showMenu}
            isUp={false}
            showArrow={true}
          />
          { open === "Feature" ?
            <Menubar title={open} /> : null
          }
          <MenuItem
            title="Company"
            showMenu={showMenu}
            isUp={false}
            showArrow={true}
          />
          <MenuItem
            title="Careers"
            showMenu={showMenu}
            isUp={false}
            showArrow={false}
          />
          <MenuItem
            title="About"
            showMenu={showMenu}
            isUp={false}
            showArrow={false}
          />
        </div>
        <div className="auth flex flex-row justify-end w-full">
          <MenuItem
            title="Login"
            showMenu={showMenu}
            isUp={false}
            showArrow={false}
          />
          <div className="box border border-mediumGray rounded-lg h-10 w-24 flex justify-center items-center group cursor-pointer">
            <span className="flex-none text-mediumGray font-epilogue text-center leading-none group-hover:text-black">
              Register
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
