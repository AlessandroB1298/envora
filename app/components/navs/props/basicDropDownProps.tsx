"use client"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

type basicNav = {
  headers: string[];
  logo: string;
  title: string;
  subItems: string[];
};

export const DropDownWithProps: React.FC<basicNav> = ({ headers, logo, title, subItems }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <div className="w-full h-full flex ">
      <div className="w-full">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl  whitespace-nowrap text-blue-700 font-extrabold">{logo}</span>
          </a>

          <ul className="flex flex-row  text-white gap-12 font-semibold">
            {headers.map((item, index) => (
              <li className={`hover:text-blue-700 hover:cursor-pointer`}
                key={index + 1} >{item}</li>
            ))}
            <li className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1 hover:text-blue-600 hover:cursor-pointer"
              >
                {title}
                <ChevronDown className="h-4 w-4" />
              </button>
              {isOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                  <ul className="py-1">
                    {subItems.map((item: string, index: number) => (
                      <li key={index + 1}>
                        <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:cursor-pointer">
                          {item}
                        </a>
                      </li>

                    ))}
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
