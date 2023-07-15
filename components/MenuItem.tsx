"use client"
import Image from "next/image";
import down from "../public/icon-arrow-down.svg"
import up from "../public/icon-arrow-up.svg"

interface MenuItemProps {
  title: string;
  showMenu: (title :string)=> void;
  showArrow: boolean;
  isUp: boolean;
}

function MenuItem({title, showMenu, isUp=false, showArrow} :MenuItemProps){
    return(
      <div className="flex justify-center items-center gap-2 mr-12 cursor-pointer group" onClick={()=>showMenu(title)}>
        <span className="flex-none text-mediumGray font-epilogue text-center leading-none group-hover:text-black">{title}</span>
        { showArrow ?
            <Image src={isUp ? up : down} alt="Down" />
        : null
        }
      </div>
    )
  }

  export default MenuItem;