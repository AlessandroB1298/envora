export const basicStaticNavText = 'export const StaticBasicNav = () => {' + '\n'
  + '  return (' + '\n'
  + '    <div className="w-full h-full flex ">' + '\n'
  + '      <div className="w-full">' + '\n'
  + '        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">' + '\n'
  + '          <a className="flex items-center space-x-3 rtl:space-x-reverse">' + '\n'
  + '            <span className="self-center text-2xl  whitespace-nowrap text-blue-700 font-extrabold">Logo</span>' + '\n'
  + '          </a>' + '\n'
  + '' + '\n'
  + '          <ul className="flex flex-row  text-white gap-12 font-semibold">' + '\n'
  + '            <li className="hover:text-blue-600 hover:cursor-pointer">' + '\n'
  + '              <a>Home</a>' + '\n'
  + '            </li>' + '\n'
  + '            <li className="hover:text-blue-600 hover:cursor-pointer">' + '\n'
  + '' + '\n'
  + '' + '\n'
  + '              <a>About</a>' + '\n'
  + '            </li>' + '\n'
  + '' + '\n'
  + '' + '\n'
  + '            <li className="hover:text-blue-600 hover:cursor-pointer">' + '\n'
  + '' + '\n'
  + '' + '\n'
  + '              <a>Docs</a>' + '\n'
  + '            </li>' + '\n'
  + '' + '\n'
  + '' + '\n'
  + '            <li className="hover:text-blue-600 hover:cursor-pointer">' + '\n'
  + '' + '\n'
  + '' + '\n'
  + '              <a>Contact</a>' + '\n'
  + '            </li>' + '\n'
  + '' + '\n'
  + '          </ul>' + '\n'
  + '        </div>' + '\n'
  + '' + '\n'
  + '      </div>' + '\n'
  + '    </div>' + '\n'
  + '  )' + '\n'
  + '}'


export const basicStaticDropdownNavText = '"use client"' + '\n'
  + 'import { useState } from "react"' + '\n'
  + 'import { ChevronDown } from "lucide-react";' + '\n'
  + 'export const BasicDropDownNav = () => {' + '\n'
  + '  const [isOpen, setIsOpen] = useState<boolean>(false);' + '\n'
  + '  return (' + '\n'
  + '    <div className="w-full h-full flex ">' + '\n'
  + '      <div className="w-full">' + '\n'
  + '        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">' + '\n'
  + '          <a className="flex items-center space-x-3 ">' + '\n'
  + '            <span className="self-center text-2xl  whitespace-nowrap text-blue-700 font-extrabold">Logo</span>' + '\n'
  + '          </a>' + '\n'
  + '' + '\n'
  + '          <ul className="flex flex-row  text-white gap-12 font-semibold relative">' + '\n'
  + '            <li className="hover:text-blue-600 hover:cursor-pointer">' + '\n'
  + '              <a>Home</a>' + '\n'
  + '            </li>' + '\n'
  + '            <li className="hover:text-blue-600 hover:cursor-pointer">' + '\n'
  + '' + '\n'
  + '              <a>About</a>' + '\n'
  + '            </li>' + '\n'
  + '' + '\n'
  + '            <li className="hover:text-blue-600 hover:cursor-pointer">' + '\n'
  + '' + '\n'
  + '              <a>Docs</a>' + '\n'
  + '            </li>' + '\n'
  + '' + '\n'
  + '            <li className="relative">' + '\n'
  + '              <button' + '\n'
  + '                onClick={() => setIsOpen(!isOpen)}' + '\n'
  + '                className="flex items-center gap-1 hover:text-blue-600 hover:cursor-pointer"' + '\n'
  + '              >' + '\n'
  + '                Contact' + '\n'
  + '                <ChevronDown className="h-4 w-4" />' + '\n'
  + '              </button>' + '\n'
  + '' + '\n'
  + '              {isOpen && (' + '\n'
  + '                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">' + '\n'
  + '                  <ul className="py-1">' + '\n'
  + '                    <li>' + '\n'
  + '                      <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:cursor-pointer">' + '\n'
  + '                        Email Us' + '\n'
  + '                      </a>' + '\n'
  + '                    </li>' + '\n'
  + '                    <li>' + '\n'
  + '                      <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:cursor-pointer">' + '\n'
  + '                        Phone Support' + '\n'
  + '                      </a>' + '\n'
  + '                    </li>' + '\n'
  + '                    <li>' + '\n'
  + '                      <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:cursor-pointer">' + '\n'
  + '                        Live Chat' + '\n'
  + '                      </a>' + '\n'
  + '                    </li>' + '\n'
  + '                  </ul>' + '\n'
  + '                </div>' + '\n'
  + '              )}' + '\n'
  + '            </li>' + '\n'
  + '          </ul>' + '\n'
  + '        </div>' + '\n'
  + '' + '\n'
  + '      </div>' + '\n'
  + '    </div>' + '\n'
  + '  )' + '\n'
  + '}'

export const basicNavPropsText = 'type basicNav = {' + '\n'
  + '  titles: string[],' + '\n'
  + '  logo: string,' + '\n'
  + '}' + '\n'
  + '' + '\n'
  + 'export const BasicNav: React.FC<basicNav> = ({ titles, logo }) => {' + '\n'
  + '  return (' + '\n'
  + '    <div className="w-full h-full flex ">' + '\n'
  + '      <div className="w-full">' + '\n'
  + '        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">' + '\n'
  + '          <a className="flex items-center space-x-3 rtl:space-x-reverse">' + '\n'
  + '            <span className="self-center text-2xl  whitespace-nowrap text-blue-700 font-extrabold">{logo}</span>' + '\n'
  + '          </a>' + '\n'
  + '' + '\n'
  + '          <ul className="flex flex-row  text-white gap-12 font-semibold">' + '\n'
  + '            {titles.map((item, index) => (' + '\n'
  + '              <li className={`hover:text-blue-700 hover:cursor-pointer`}' + '\n'
  + '                key={index + 1} >{item}</li>' + '\n'
  + '            ))}' + '\n'
  + '          </ul>' + '\n'
  + '        </div>' + '\n'
  + '' + '\n'
  + '      </div>' + '\n'
  + '    </div>' + '\n'
  + '' + '\n'
  + '  )' + '\n'
  + '}'

export const basicDropDropPropsText = '"use client"' + '\n'
  + 'import { useState } from "react"' + '\n'
  + 'import { ChevronDown } from "lucide-react"' + '\n'
  + '' + '\n'
  + 'type basicNav = {' + '\n'
  + '  headers: string[];' + '\n'

  + '  logo: string;' + '\n'
  + '  title: string;' + '\n'
  + '  subItems: string[]; ' + '\n'
  + '};' + '\n'
  + '' + '\n'
  + 'export const DropDownWithProps = ({ headers, logo, title, subItems }: basicNav) => {' + '\n'
  + '  const [isOpen, setIsOpen] = useState<boolean>(false)' + '\n'
  + '  return (' + '\n'
  + '    <div className="w-full h-full flex ">' + '\n'
  + '      <div className="w-full">' + '\n'
  + '        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">' + '\n'
  + '          <a className="flex items-center space-x-3 rtl:space-x-reverse">' + '\n'
  + '            <span className="self-center text-2xl  whitespace-nowrap text-blue-700 font-extrabold">{logo}</span>' + '\n'
  + '          </a>' + '\n'
  + '' + '\n'
  + '          <ul className="flex flex-row  text-white gap-12 font-semibold">' + '\n'
  + '            {headers.map((item, index) => (' + '\n'
  + '              <li className={`hover:text-blue-700 hover:cursor-pointer`}' + '\n'
  + '                key={index + 1} >{item}</li>' + '\n'
  + '            ))}' + '\n'
  + '            <li className="relative">' + '\n'
  + '              <button' + '\n'
  + '                onClick={() => setIsOpen(!isOpen)}' + '\n'
  + '                className="flex items-center gap-1 hover:text-blue-600 hover:cursor-pointer"' + '\n'
  + '              >' + '\n'
  + '                {title}' + '\n'
  + '                <ChevronDown className="h-4 w-4" />' + '\n'
  + '              </button>' + '\n'
  + '              {isOpen && (' + '\n'
  + '                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">' + '\n'
  + '                  <ul className="py-1">' + '\n'
  + '                    {subItems.map((item: string, index: number) => (' + '\n'
  + '                      <li key={index + 1}>' + '\n'
  + '                        <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:cursor-pointer">' + '\n'
  + '                          {item}' + '\n'
  + '                        </a>' + '\n'
  + '                      </li>' + '\n'
  + '' + '\n'
  + '                    ))}' + '\n'
  + '                  </ul>' + '\n'
  + '                </div>' + '\n'
  + '' + '\n'
  + '              )}' + '\n'
  + '            </li>' + '\n'
  + '          </ul>' + '\n'
  + '        </div>' + '\n'
  + '' + '\n'
  + '      </div>' + '\n'
  + '    </div>' + '\n'
  + '' + '\n'
  + '  )' + '\n'
  + '}'
