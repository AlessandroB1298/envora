


export const BasicNav = () => {
  return (
    <div className="w-full h-full flex ">
      <div className="w-full">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl  whitespace-nowrap text-blue-700 font-extrabold">Logo</span>
          </a>

          <ul className="flex flex-row  text-white gap-12 font-semibold">
            <li className="hover:text-blue-600 hover:cursor-pointer">
              <a>Home</a>
            </li>
            <li className="hover:text-blue-600 hover:cursor-pointer">


              <a>About</a>
            </li>


            <li className="hover:text-blue-600 hover:cursor-pointer">


              <a>Docs</a>
            </li>


            <li className="hover:text-blue-600 hover:cursor-pointer">


              <a>Contact</a>
            </li>

          </ul>
        </div>

      </div>
    </div>
  )
}
