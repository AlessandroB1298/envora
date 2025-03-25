"use client"
import { useState } from "react"
import { ChevronDown } from "lucide-react";
export const BasicDropDownNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="w-full h-full flex ">
      <div className="w-full">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a className="flex items-center space-x-3 ">
            <span className="self-center text-2xl  whitespace-nowrap text-blue-700 font-extrabold">Logo</span>
          </a>

          <ul className="flex flex-row  text-white gap-12 font-semibold relative">
            <li className="hover:text-blue-600 hover:cursor-pointer">
              <a>Home</a>
            </li>
            <li className="hover:text-blue-600 hover:cursor-pointer">

              <a>About</a>
            </li>

            <li className="hover:text-blue-600 hover:cursor-pointer">

              <a>Docs</a>
            </li>

            <li className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1 hover:text-blue-600 hover:cursor-pointer"
              >
                Contact
                <ChevronDown className="h-4 w-4" />
              </button>

              {isOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                  <ul className="py-1">
                    <li>
                      <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:cursor-pointer">
                        Email Us
                      </a>
                    </li>
                    <li>
                      <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:cursor-pointer">
                        Phone Support
                      </a>
                    </li>
                    <li>
                      <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:cursor-pointer">
                        Live Chat
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>

      </div>
    </div>
  )
}
