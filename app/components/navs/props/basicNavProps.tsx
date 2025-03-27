
type basicNav = {
  titles: string[],
  logo: string,
}

export const BasicNav: React.FC<basicNav> = ({ titles, logo }) => {
  return (
    <div className="w-full h-full flex ">
      <div className="w-full">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl  whitespace-nowrap text-blue-700 font-extrabold">{logo}</span>
          </a>

          <ul className="flex flex-row  text-white gap-12 font-semibold">
            {titles.map((item, index) => (
              <li className={`hover:text-blue-700 hover:cursor-pointer`}
                key={index + 1} >{item}</li>
            ))}
          </ul>
        </div>

      </div>
    </div>

  )
}
