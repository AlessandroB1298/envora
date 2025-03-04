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
    <div className="h-[100vh] absolute  mb-5 pl-5 border-1 overflow-auto z-10  bg-gray-700 border-gray-700 lg:w-[15vw] md:w-[17] md:p-2 ">



      <div className="mt-8">
        <Link
          href={"/"}
          className="text-5xl mt-[100px] font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-blue-700 "
        >
          ENVORA
        </Link>
      </div>
      <ul className="flex flex-col gap-3 mt-3 text-white space-y-2  w-3/4">
        <div className="flex flex-row hover:bg-gray-600 text-md p-2 rounded-xl w-[12.8rem] gap-2">
          <MousePointer />
          <Link
            onClick={() => {
              setButtonOpen(!buttonOpen);
            }}
            className="w-full"
            href={"#"}
          >
            Buttons
          </Link>
        </div>
        {buttonOpen && (
          <ul className="flex flex-col gap-2 ml-3 w-[12rem] bg-gray-600 p-1 rounded-xl">
            <Link
              className="hover:bg-gray-700 bg-gray-600 text-sm p-2 rounded-xl"
              href={"/dashboard/buttons"}
            >
              Basic
            </Link>
            <Link
              className="hover:bg-gray-700 bg-gray-600 text-sm p-2 rounded-xl"
              href={"#"}
            >
              Medium
            </Link>
            <Link
              className="hover:bg-gray-700 bg-gray-600 text-sm p-2 rounded-xl"
              href={"#"}
            >
              Advanced
            </Link>
          </ul>
        )}
        <div className="flex flex-row hover:bg-gray-600 text-md p-2 w-[12.8rem] rounded-xl gap-2">
          <Play />
          <Link
            onClick={() => {
              setAnimationsOpen(!animationsOpen);
            }}
            className="w-full"

            href={"#"}
          >
            Animations
          </Link>
        </div>
        {animationsOpen && (
          <ul className="flex flex-col gap-2 ml-3 w-[12rem] bg-gray-600 p-1 rounded-xl">
            <Link
              className="hover:bg-gray-700 bg-gray-600 text-md p-2 rounded-xl"
              href={"/dashboard/buttons"}
            >
              Basic
            </Link>
            <Link
              className="hover:bg-gray-700 bg-gray-600 text-md p-2 rounded-xl"
              href={"#"}
            >
              Medium
            </Link>
            <Link
              className="hover:bg-gray-700 bg-gray-600 text-md p-2 rounded-xl"
              href={"#"}
            >
              Advanced
            </Link>
          </ul>
        )}
        <div className="flex flex-row hover:bg-gray-600 text-md p-2 w-[12.8rem] rounded-xl gap-2">

          <TextSelect />
          <Link
            onClick={() => {
              setTextOpen(!textOpen);
            }}
            className="w-full"

            href={"#"}
          >
            Text
          </Link>
        </div>
        {textOpen && (
          <ul className="flex flex-col gap-2 ml-3 w-[12rem] bg-gray-600 p-1 rounded-xl">
            <Link
              className="hover:bg-gray-700 bg-gray-600 text-md p-2 rounded-xl"
              href={"/dashboard/buttons"}
            >
              Basic
            </Link>
            <Link
              className="hover:bg-gray-700 bg-gray-600 text-md p-2 rounded-xl"
              href={"#"}
            >
              Medium
            </Link>
            <Link
              className="hover:bg-gray-700 bg-gray-600 text-md p-2 rounded-xl"
              href={"#"}
            >
              Advanced
            </Link>
          </ul>
        )}
        <div className="flex flex-row hover:bg-gray-600 text-md p-2 w-[12.8rem] rounded-xl gap-2">
          <Clipboard />
          <Link
            onClick={() => {
              setFormOpen(!formOpen);
            }}
            className="w-full"

            href={"#"}
          >
            Forms
          </Link>
        </div>
        {formOpen && (
          <ul className="flex flex-col gap-2 ml-3 w-[12rem] bg-gray-600 p-1 rounded-xl">
            <Link
              className="hover:bg-gray-700 bg-gray-600 text-md p-2 rounded-xl"
              href={"/dashboard/buttons"}
            >
              Basic
            </Link>
            <Link
              className="hover:bg-gray-700 bg-gray-600 text-md p-2 rounded-xl"
              href={"#"}
            >
              Medium
            </Link>
            <Link
              className="hover:bg-gray-700 bg-gray-600 text-md p-2 rounded-xl"
              href={"#"}
            >
              Advanced
            </Link>
          </ul>
        )}
        <div className="flex flex-row hover:bg-gray-600 text-md p-2 w-[12.8rem] rounded-xl gap-2">
          <Compass />
          <Link
            onClick={() => {
              setNavOpen(!navOpen);
            }}
            className="w-full"

            href={"#"}
          >
            Navs
          </Link>
        </div>
        {navOpen && (
          <ul className="flex flex-col gap-2 ml-3 w-[12rem] bg-gray-600 p-1 rounded-xl">
            <Link
              className="hover:bg-gray-700 bg-gray-600 text-md p-2 rounded-xl"
              href={"/dashboard/buttons"}
            >
              Basic
            </Link>
            <Link
              className="hover:bg-gray-700 bg-gray-600 text-md p-2 rounded-xl"
              href={"#"}
            >
              Medium
            </Link>
            <Link
              className="hover:bg-gray-700 bg-gray-600 text-md p-2 rounded-xl"
              href={"#"}
            >
              Advanced
            </Link>
          </ul>
        )}
      </ul>
    </div>
  );
};

export default SideNav;
