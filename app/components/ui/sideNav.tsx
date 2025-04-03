"use client";
import Link from "next/link";
import { useState } from "react";
import {
  MousePointer,
  TextSelect,
  Play,
  Clipboard,
  Compass,
} from "lucide-react";

const SideNav = () => {
  const [openButton, setOpenButton] = useState<boolean>(false);
  const [openAnimations, setOpenAnimations] = useState<boolean>(false);
  const [openLayouts, setOpenLayouts] = useState<boolean>(false);
  const [openForm, setOpenForm] = useState<boolean>(false);
  const [openNav, setOpenNav] = useState<boolean>(false);

  return (
    <div className=" overflow-y-auto h-[100%] lg:w-[15.2vw] md:w-[23.5vw]  md:pl-2  fixed  pl-5  z-10 bg-gradient-to-b from-[#213352] to-black/60 border-r border-gray-600/30 shadow-[5px_0_15px_rgba(0,0,0,0.2)]">
      <div className="mt-4 flex flex-row justify-between">
        <Link
          href={"/"}
          className="text-3xl ml-2 w-full font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-blue-700 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
        >
          ENVORA
        </Link>
      </div>
      <div className="border-b border-dotted border-gray-500/50 w-[90%] my-2 md:p-3 sm-p-2"></div>
      <ul className="flex flex-col ml-2 gap-3 mt-3 text-white space-y-2 w-[90%]  md:ml-0 md:w-[10%] sm">
        <div className="flex flex-row hover:bg-gray-800/80 hover:shadow-md hover:shadow-black/20 hover:translate-x-1 transition-all duration-200 text-md p-2 rounded-xl w-[12.7rem] gap-2 items-center border border-gray-600/30 bg-gray-900/70 backdrop-blur-sm">
          <MousePointer className="text-blue-400" />
          <Link
            href={""}
            onClick={() => {
              setOpenButton(!openButton);
            }}
            className="w-full"
          >
            Buttons
          </Link>
        </div>
        {openButton && (
          <ul className="ml-3">
            <div className="flex flex-row m-1 gap-2 hover:bg-gray-800/80 hover:shadow-md hover:shadow-black/20 hover:translate-x-1 transition-all duration-200 text-md p-2 rounded-xl w-[11.5rem]  items-center border border-gray-600/30 bg-gray-900/70 backdrop-blur-sm">
              <MousePointer className="text-blue-400" />
              <Link className="w-full" href={"/dashboard/buttons"}>
                Basic
              </Link>
            </div>
            <div className="flex flex-row m-1 hover:bg-gray-800/80 hover:shadow-md hover:shadow-black/20 hover:translate-x-1 transition-all duration-200 text-md p-2 rounded-xl w-[11.5rem] gap-2 items-center border border-gray-600/30 bg-gray-900/70 backdrop-blur-sm">
              <MousePointer className="text-blue-400" />
              <Link className="w-full" href={"/dashboard/buttons"}>
                Animated
              </Link>
            </div>
            <div className="flex flex-row m-1 hover:bg-gray-800/80 hover:shadow-md hover:shadow-black/20 hover:translate-x-1 transition-all duration-200 text-md p-2 rounded-xl w-[11.5rem] gap-2 items-center border border-gray-600/30 bg-gray-900/70 backdrop-blur-sm">
              <MousePointer className="text-blue-400" />
              <Link className="w-full" href={"/dashboard/buttons"}>
                Special
              </Link>
            </div>
          </ul>
        )}

        <div className="flex flex-row hover:bg-gray-800/80 hover:shadow-md hover:shadow-black/20 hover:translate-x-1 transition-all duration-200 text-md p-2 rounded-xl w-[12.7rem] gap-2 items-center border border-gray-600/30 bg-gray-900/70 backdrop-blur-sm">
          <Play className="text-green-400" />
          <Link
            onClick={() => {
              setOpenAnimations(!openAnimations);
            }}
            className="w-full"
            href={""}
          >
            Animations
          </Link>
        </div>
        {openAnimations && (
          <ul className="ml-3">
            <div className="flex flex-row m-1 gap-2 hover:bg-gray-800/80 hover:shadow-md hover:shadow-black/20 hover:translate-x-1 transition-all duration-200 text-md p-2 rounded-xl w-[11.5rem]  items-center border border-gray-600/30 bg-gray-900/70 backdrop-blur-sm">
              <MousePointer className="text-blue-400" />
              <Link className="w-full" href={"/dashboard/buttons"}>
                Basic
              </Link>
            </div>
            <div className="flex flex-row m-1 hover:bg-gray-800/80 hover:shadow-md hover:shadow-black/20 hover:translate-x-1 transition-all duration-200 text-md p-2 rounded-xl w-[11.5rem] gap-2 items-center border border-gray-600/30 bg-gray-900/70 backdrop-blur-sm">
              <MousePointer className="text-blue-400" />
              <Link className="w-full" href={"/dashboard/buttons"}>
                Animated
              </Link>
            </div>
            <div className="flex flex-row m-1 hover:bg-gray-800/80 hover:shadow-md hover:shadow-black/20 hover:translate-x-1 transition-all duration-200 text-md p-2 rounded-xl w-[11.5rem] gap-2 items-center border border-gray-600/30 bg-gray-900/70 backdrop-blur-sm">
              <MousePointer className="text-blue-400" />
              <Link className="w-full" href={"/dashboard/buttons"}>
                Special
              </Link>
            </div>
          </ul>
        )}
        <div className="flex flex-row hover:bg-gray-800/80 hover:shadow-md hover:shadow-black/20 hover:translate-x-1 transition-all duration-200 text-md p-2 rounded-xl w-[12.7rem] gap-2 items-center border border-gray-600/30 bg-gray-900/70 backdrop-blur-sm">
          <TextSelect className="text-purple-400" />
          <Link
            onClick={() => {
              setOpenLayouts(!openLayouts);
            }}
            className="w-full"
            href={""}
          >
            Text & Layouts
          </Link>
        </div>
        {openLayouts && (
          <ul className="ml-3">
            <div className="flex flex-row m-1 gap-2 hover:bg-gray-800/80 hover:shadow-md hover:shadow-black/20 hover:translate-x-1 transition-all duration-200 text-md p-2 rounded-xl w-[11.5rem]  items-center border border-gray-600/30 bg-gray-900/70 backdrop-blur-sm">
              <MousePointer className="text-blue-400" />
              <Link className="w-full" href={"/dashboard/buttons"}>
                Basic
              </Link>
            </div>
            <div className="flex flex-row m-1 hover:bg-gray-800/80 hover:shadow-md hover:shadow-black/20 hover:translate-x-1 transition-all duration-200 text-md p-2 rounded-xl w-[11.5rem] gap-2 items-center border border-gray-600/30 bg-gray-900/70 backdrop-blur-sm">
              <MousePointer className="text-blue-400" />
              <Link className="w-full" href={"/dashboard/buttons"}>
                Animated
              </Link>
            </div>
            <div className="flex flex-row m-1 hover:bg-gray-800/80 hover:shadow-md hover:shadow-black/20 hover:translate-x-1 transition-all duration-200 text-md p-2 rounded-xl w-[11.5rem] gap-2 items-center border border-gray-600/30 bg-gray-900/70 backdrop-blur-sm">
              <MousePointer className="text-blue-400" />
              <Link className="w-full" href={"/dashboard/buttons"}>
                Special
              </Link>
            </div>
          </ul>
        )}
        <div className="flex flex-row hover:bg-gray-800/80 hover:shadow-md hover:shadow-black/20 hover:translate-x-1 transition-all duration-200 text-md p-2 rounded-xl w-[12.7rem] gap-2 items-center border border-gray-600/30 bg-gray-900/70 backdrop-blur-sm">
          <Clipboard className="text-amber-400" />
          <Link
            onClick={() => {
              setOpenForm(!openForm);
            }}
            className="w-full"
            href={""}
          >
            Forms
          </Link>
        </div>
        {openForm && (
          <ul className="ml-3">
            <div className="flex flex-row m-1 gap-2 hover:bg-gray-800/80 hover:shadow-md hover:shadow-black/20 hover:translate-x-1 transition-all duration-200 text-md p-2 rounded-xl w-[11.5rem]  items-center border border-gray-600/30 bg-gray-900/70 backdrop-blur-sm">
              <MousePointer className="text-blue-400" />
              <Link className="w-full" href={"/dashboard/buttons"}>
                Basic
              </Link>
            </div>
            <div className="flex flex-row m-1 hover:bg-gray-800/80 hover:shadow-md hover:shadow-black/20 hover:translate-x-1 transition-all duration-200 text-md p-2 rounded-xl w-[11.5rem] gap-2 items-center border border-gray-600/30 bg-gray-900/70 backdrop-blur-sm">
              <MousePointer className="text-blue-400" />
              <Link className="w-full" href={"/dashboard/buttons"}>
                Animated
              </Link>
            </div>
            <div className="flex flex-row m-1 hover:bg-gray-800/80 hover:shadow-md hover:shadow-black/20 hover:translate-x-1 transition-all duration-200 text-md p-2 rounded-xl w-[11.5rem] gap-2 items-center border border-gray-600/30 bg-gray-900/70 backdrop-blur-sm">
              <MousePointer className="text-blue-400" />
              <Link className="w-full" href={"/dashboard/buttons"}>
                Special
              </Link>
            </div>
          </ul>
        )}
        <div className="flex flex-row hover:bg-gray-800/80 hover:shadow-md hover:shadow-black/20 hover:translate-x-1 transition-all duration-200 text-md p-2 rounded-xl w-[12.7rem] gap-2 items-center border border-gray-600/30 bg-gray-900/70 backdrop-blur-sm">
          <Compass className="text-rose-400" />
          <Link
            onClick={() => {
              setOpenNav(!openNav);
            }}
            className="w-full"
            href={""}
          >
            Navs
          </Link>
        </div>
        {openNav && (
          <ul className="ml-3">
            <div className="flex flex-row m-1 gap-2 hover:bg-gray-800/80 hover:shadow-md hover:shadow-black/20 hover:translate-x-1 transition-all duration-200 text-md p-2 rounded-xl w-[11.5rem]  items-center border border-gray-600/30 bg-gray-900/70 backdrop-blur-sm">
              <MousePointer className="text-blue-400" />
              <Link className="w-full" href={"/dashboard/buttons"}>
                Basic
              </Link>
            </div>
            <div className="flex flex-row m-1 hover:bg-gray-800/80 hover:shadow-md hover:shadow-black/20 hover:translate-x-1 transition-all duration-200 text-md p-2 rounded-xl w-[11.5rem] gap-2 items-center border border-gray-600/30 bg-gray-900/70 backdrop-blur-sm">
              <MousePointer className="text-blue-400" />
              <Link className="w-full" href={"/dashboard/buttons"}>
                Animated
              </Link>
            </div>
            <div className="flex flex-row m-1 hover:bg-gray-800/80 hover:shadow-md hover:shadow-black/20 hover:translate-x-1 transition-all duration-200 text-md p-2 rounded-xl w-[11.5rem] gap-2 items-center border border-gray-600/30 bg-gray-900/70 backdrop-blur-sm">
              <MousePointer className="text-blue-400" />
              <Link className="w-full" href={"/dashboard/buttons"}>
                Special
              </Link>
            </div>
          </ul>
        )}
        {/* End of main navigation items */}
        <div className="border-b border-dotted border-gray-500/50 w-[13vw] my-2 md:p-3 sm-p-2"></div>

        {/* Documentation Section */}
        <div className="flex flex-row hover:bg-gray-800/80 hover:shadow-md hover:shadow-black/20 hover:translate-x-1 transition-all duration-200 text-md p-2 rounded-xl w-[12.7rem] gap-2 items-center border border-gray-600/30 bg-gray-900/70 backdrop-blur-sm">
          <TextSelect className="text-cyan-400" />
          <Link href={"/dashboard/docs"} className="w-full">
            Documentation
          </Link>
        </div>

        {/* About Section */}
        <div className="flex flex-row hover:bg-gray-800/80 hover:shadow-md hover:shadow-black/20 hover:translate-x-1 transition-all duration-200 text-md p-2 rounded-xl w-[12.7rem] gap-2 items-center border border-gray-600/30 bg-gray-900/70 backdrop-blur-sm">
          <Compass className="text-teal-400" />
          <Link href={"/dashboard/about"} className="w-full">
            About
          </Link>
        </div>
      </ul>
    </div>
  );
};

export default SideNav;
