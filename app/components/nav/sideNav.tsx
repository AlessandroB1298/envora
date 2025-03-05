"use client";
import Link from "next/link";
import { useState } from "react";

import { MousePointer, TextSelect, Play, Clipboard, Compass } from "lucide-react"
const SideNav = () => {
  const [buttonOpen, setButtonOpen] = useState<boolean>(false);
  const [animationsOpen, setAnimationsOpen] = useState<boolean>(false);
  const [textOpen, setTextOpen] = useState<boolean>(false);
  const [formOpen, setFormOpen] = useState<boolean>(false);
  const [navOpen, setNavOpen] = useState<boolean>(false);

  return (
    <div className="h-[100vh] fixed mb-5 pl-5 overflow-auto z-10 bg-gradient-to-b from-gray-800 to-gray-700 border-r border-gray-600/30 shadow-[5px_0_15px_rgba(0,0,0,0.2)] lg:w-[15vw] md:w-[22vw] md:p-2">
      <div className="mt-8">
        <Link
          href={"/"}
          className="text-2xl mt-[100px] font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-blue-700 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
        >
          ENVORA
        </Link>
      </div>
      <div className="border-b border-dotted border-gray-500/50 w-[90%] my-4"></div>
      <ul className="flex flex-col gap-3 mt-3 text-white space-y-2 w-[90%]">
        <div className="flex flex-row hover:bg-gray-600/80 hover:shadow-md hover:shadow-black/20 hover:translate-x-1 transition-all duration-200 text-md p-2 rounded-xl w-[12.7rem] gap-2 items-center border border-gray-600/30 bg-gray-700/70 backdrop-blur-sm">
          <MousePointer className="text-blue-400" />
          <Link
            onClick={() => {
              setButtonOpen(!buttonOpen)
            }}
            className="w-full"
            href={"#"}
          >
            Buttons
          </Link>
        </div>
        {buttonOpen && (
          <ul className="flex flex-col gap-2 ml-3 w-[12.7rem] bg-gray-600/80 p-2 rounded-xl shadow-inner shadow-black/30 border border-gray-500/30 backdrop-blur-sm animate-in slide-in-from-left duration-200">
            <Link
              className="hover:bg-gray-700 hover:shadow-sm hover:shadow-black/20 bg-gray-600/70 text-sm p-2 rounded-xl transition-all duration-150 border border-gray-500/20"
              href={"/dashboard/buttons"}
            >
              Basic
            </Link>
            <Link
              className="hover:bg-gray-700 hover:shadow-sm hover:shadow-black/20 bg-gray-600/70 text-sm p-2 rounded-xl transition-all duration-150 border border-gray-500/20"
              href={"#"}
            >
              Medium
            </Link>
            <Link
              className="hover:bg-gray-700 hover:shadow-sm hover:shadow-black/20 bg-gray-600/70 text-sm p-2 rounded-xl transition-all duration-150 border border-gray-500/20"
              href={"#"}
            >
              Advanced
            </Link>
          </ul>
        )}
        <div className="flex flex-row hover:bg-gray-600/80 hover:shadow-md hover:shadow-black/20 hover:translate-x-1 transition-all duration-200 text-md p-2 rounded-xl w-[12.7rem] gap-2 items-center border border-gray-600/30 bg-gray-700/70 backdrop-blur-sm">
          <Play className="text-green-400" />
          <Link
            onClick={() => {
              setAnimationsOpen(!animationsOpen)
            }}
            className="w-full"
            href={"#"}
          >
            Animations
          </Link>
        </div>
        {animationsOpen && (
          <ul className="flex flex-col gap-2 ml-3 w-[12.7rem] bg-gray-600/80 p-2 rounded-xl shadow-inner shadow-black/30 border border-gray-500/30 backdrop-blur-sm animate-in slide-in-from-left duration-200">
            <Link
              className="hover:bg-gray-700 hover:shadow-sm hover:shadow-black/20 bg-gray-600/70 text-sm p-2 rounded-xl transition-all duration-150 border border-gray-500/20"
              href={"/dashboard/buttons"}
            >
              Basic
            </Link>
            <Link
              className="hover:bg-gray-700 hover:shadow-sm hover:shadow-black/20 bg-gray-600/70 text-sm p-2 rounded-xl transition-all duration-150 border border-gray-500/20"
              href={"#"}
            >
              Medium
            </Link>
            <Link
              className="hover:bg-gray-700 hover:shadow-sm hover:shadow-black/20 bg-gray-600/70 text-sm p-2 rounded-xl transition-all duration-150 border border-gray-500/20"
              href={"#"}
            >
              Advanced
            </Link>
          </ul>
        )}
        <div className="flex flex-row hover:bg-gray-600/80 hover:shadow-md hover:shadow-black/20 hover:translate-x-1 transition-all duration-200 text-md p-2 rounded-xl w-[12.7rem] gap-2 items-center border border-gray-600/30 bg-gray-700/70 backdrop-blur-sm">
          <TextSelect className="text-purple-400" />
          <Link
            onClick={() => {
              setTextOpen(!textOpen)
            }}
            className="w-full"
            href={"#"}
          >
            Text
          </Link>
        </div>
        {textOpen && (
          <ul className="flex flex-col gap-2 ml-3 w-[12.7rem] bg-gray-600/80 p-2 rounded-xl shadow-inner shadow-black/30 border border-gray-500/30 backdrop-blur-sm animate-in slide-in-from-left duration-200">
            <Link
              className="hover:bg-gray-700 hover:shadow-sm hover:shadow-black/20 bg-gray-600/70 text-sm p-2 rounded-xl transition-all duration-150 border border-gray-500/20"
              href={"/dashboard/buttons"}
            >
              Basic
            </Link>
            <Link
              className="hover:bg-gray-700 hover:shadow-sm hover:shadow-black/20 bg-gray-600/70 text-sm p-2 rounded-xl transition-all duration-150 border border-gray-500/20"
              href={"#"}
            >
              Medium
            </Link>
            <Link
              className="hover:bg-gray-700 hover:shadow-sm hover:shadow-black/20 bg-gray-600/70 text-sm p-2 rounded-xl transition-all duration-150 border border-gray-500/20"
              href={"#"}
            >
              Advanced
            </Link>
          </ul>
        )}
        <div className="flex flex-row hover:bg-gray-600/80 hover:shadow-md hover:shadow-black/20 hover:translate-x-1 transition-all duration-200 text-md p-2 rounded-xl w-[12.7rem] gap-2 items-center border border-gray-600/30 bg-gray-700/70 backdrop-blur-sm">
          <Clipboard className="text-amber-400" />
          <Link
            onClick={() => {
              setFormOpen(!formOpen)
            }}
            className="w-full"
            href={"#"}
          >
            Forms
          </Link>
        </div>
        {formOpen && (
          <ul className="flex flex-col gap-2 ml-3 w-[12.7rem] bg-gray-600/80 p-2 rounded-xl shadow-inner shadow-black/30 border border-gray-500/30 backdrop-blur-sm animate-in slide-in-from-left duration-200">
            <Link
              className="hover:bg-gray-700 hover:shadow-sm hover:shadow-black/20 bg-gray-600/70 text-sm p-2 rounded-xl transition-all duration-150 border border-gray-500/20"
              href={"/dashboard/buttons"}
            >
              Basic
            </Link>
            <Link
              className="hover:bg-gray-700 hover:shadow-sm hover:shadow-black/20 bg-gray-600/70 text-sm p-2 rounded-xl transition-all duration-150 border border-gray-500/20"
              href={"#"}
            >
              Medium
            </Link>
            <Link
              className="hover:bg-gray-700 hover:shadow-sm hover:shadow-black/20 bg-gray-600/70 text-sm p-2 rounded-xl transition-all duration-150 border border-gray-500/20"
              href={"#"}
            >
              Advanced
            </Link>
          </ul>
        )}
        <div className="flex flex-row hover:bg-gray-600/80 hover:shadow-md hover:shadow-black/20 hover:translate-x-1 transition-all duration-200 text-md p-2 rounded-xl w-[12.7rem] gap-2 items-center border border-gray-600/30 bg-gray-700/70 backdrop-blur-sm">
          <Compass className="text-rose-400" />
          <Link
            onClick={() => {
              setNavOpen(!navOpen)
            }}
            className="w-full"
            href={"#"}
          >
            Navs
          </Link>
        </div>
        {navOpen && (
          <ul className="flex flex-col gap-2 ml-3 w-[12.7rem] bg-gray-600/80 p-2 rounded-xl shadow-inner shadow-black/30 border border-gray-500/30 backdrop-blur-sm animate-in slide-in-from-left duration-200">
            <Link
              className="hover:bg-gray-700 hover:shadow-sm hover:shadow-black/20 bg-gray-600/70 text-sm p-2 rounded-xl transition-all duration-150 border border-gray-500/20"
              href={"/dashboard/buttons"}
            >
              Basic
            </Link>
            <Link
              className="hover:bg-gray-700 hover:shadow-sm hover:shadow-black/20 bg-gray-600/70 text-sm p-2 rounded-xl transition-all duration-150 border border-gray-500/20"
              href={"#"}
            >
              Medium
            </Link>
            <Link
              className="hover:bg-gray-700 hover:shadow-sm hover:shadow-black/20 bg-gray-600/70 text-sm p-2 rounded-xl transition-all duration-150 border border-gray-500/20"
              href={"#"}
            >
              Advanced
            </Link>
          </ul>
        )}
        {/* End of main navigation items */}
        <div className="border-b border-dotted border-gray-500/50 w-[90%] my-4"></div>

        {/* Documentation Section */}
        <div className="flex flex-row hover:bg-gray-600/80 hover:shadow-md hover:shadow-black/20 hover:translate-x-1 transition-all duration-200 text-md p-2 rounded-xl w-[12.7rem] gap-2 items-center border border-gray-600/30 bg-gray-700/70 backdrop-blur-sm">
          <TextSelect className="text-cyan-400" />
          <Link href={"#"} className="w-full">
            Documentation
          </Link>
        </div>

        {/* About Section */}
        <div className="flex flex-row hover:bg-gray-600/80 hover:shadow-md hover:shadow-black/20 hover:translate-x-1 transition-all duration-200 text-md p-2 rounded-xl w-[12.7rem] gap-2 items-center border border-gray-600/30 bg-gray-700/70 backdrop-blur-sm">
          <Compass className="text-teal-400" />
          <Link href={"#"} className="w-full">
            About
          </Link>
        </div>
      </ul>
    </div>
  );
};

export default SideNav;
