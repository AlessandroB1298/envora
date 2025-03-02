"use client";
import Link from "next/link";
import { useState } from "react";

const SideNav = () => {
  const [buttonOpen, setButtonOpen] = useState<boolean>(false);
  const [animationsOpen, setAnimationsOpen] = useState<boolean>(false);
  const [textOpen, setTextOpen] = useState<boolean>(false);
  const [formOpen, setFormOpen] = useState<boolean>(false);
  const [navOpen, setNavOpen] = useState<boolean>(false);

  return (
    <div className="h-[100vh] absolute rounded-xl mb-5 pl-5 border-1 border-gray-700 w-[18vw] ">
      <div className="mt-8">
        <Link
          href={"/"}
          className="text-5xl mt-[100px] text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-blue-700 "
        >
          ENVORA
        </Link>
      </div>
      <ul className="flex flex-col gap-3 mt-5 text-white space-y-2 font-medium w-3/4">
        <Link
          onClick={() => {
            setButtonOpen(!buttonOpen);
          }}
          className="hover:bg-gray-600 text-md p-2 rounded-xl"
          href={"#"}
        >
          Buttons
        </Link>
        {buttonOpen && (
          <ul className="flex flex-col gap-2 ml-3 w-[12rem]">
            <Link
              className="hover:bg-gray-600 bg-gray-700 text-md p-2 rounded-xl"
              href={"/dashboard/buttons"}
            >
              Basic
            </Link>
            <Link
              className="hover:bg-gray-600 bg-gray-700 text-md p-2 rounded-xl"
              href={"#"}
            >
              Medium
            </Link>
            <Link
              className="hover:bg-gray-600 bg-gray-700 text-md p-2 rounded-xl"
              href={"#"}
            >
              Advanced
            </Link>
          </ul>
        )}

        <Link
          onClick={() => {
            setAnimationsOpen(!animationsOpen);
          }}
          className="hover:bg-gray-600 text-md p-2 rounded-xl"
          href={"#"}
        >
          Animations
        </Link>
        {animationsOpen && (
          <ul className="flex flex-col gap-2 ml-3 w-[12rem]">
            <Link
              className="hover:bg-gray-600 bg-gray-700 text-md p-2 rounded-xl"
              href={"#"}
            >
              Basic
            </Link>
            <Link
              className="hover:bg-gray-600 bg-gray-700 text-md p-2 rounded-xl"
              href={"#"}
            >
              Medium
            </Link>
            <Link
              className="hover:bg-gray-600 bg-gray-700 text-md p-2 rounded-xl"
              href={"#"}
            >
              Advanced
            </Link>
          </ul>
        )}

        <Link
          onClick={() => {
            setTextOpen(!textOpen);
          }}
          className="hover:bg-gray-600 text-md p-2 rounded-xl"
          href={"#"}
        >
          Text
        </Link>
        {textOpen && (
          <ul className="flex flex-col gap-2 ml-3 w-[12rem]">
            <Link
              className="hover:bg-gray-600 bg-gray-700 text-md p-2 rounded-xl"
              href={"#"}
            >
              Basic
            </Link>
            <Link
              className="hover:bg-gray-600 bg-gray-700 text-md p-2 rounded-xl"
              href={"#"}
            >
              Medium
            </Link>
            <Link
              className="hover:bg-gray-600 bg-gray-700 text-md p-2 rounded-xl"
              href={"#"}
            >
              Advanced
            </Link>
          </ul>
        )}
        <Link
          onClick={() => {
            setFormOpen(!formOpen);
          }}
          className="hover:bg-gray-600 text-md p-2 rounded-xl"
          href={"#"}
        >
          Forms
        </Link>
        {formOpen && (
          <ul className="flex flex-col gap-2 ml-3 w-[12rem]">
            <Link
              className="hover:bg-gray-600 bg-gray-700 text-md p-2 rounded-xl"
              href={"#"}
            >
              Basic
            </Link>
            <Link
              className="hover:bg-gray-600 bg-gray-700 text-md p-2 rounded-xl"
              href={"#"}
            >
              Medium
            </Link>
            <Link
              className="hover:bg-gray-600 bg-gray-700 text-md p-2 rounded-xl"
              href={"#"}
            >
              Advanced
            </Link>
          </ul>
        )}

        <Link
          onClick={() => {
            setNavOpen(!navOpen);
          }}
          className="hover:bg-gray-600 text-md p-2 rounded-xl"
          href={"#"}
        >
          Navs
        </Link>
        {navOpen && (
          <ul className="flex flex-col gap-2 ml-3 w-[12rem]">
            <Link
              className="hover:bg-gray-600 bg-gray-700 text-md p-2 rounded-xl"
              href={"#"}
            >
              Basic
            </Link>
            <Link
              className="hover:bg-gray-600 bg-gray-700 text-md p-2 rounded-xl"
              href={"#"}
            >
              Medium
            </Link>
            <Link
              className="hover:bg-gray-600 bg-gray-700 text-md p-2 rounded-xl"
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
