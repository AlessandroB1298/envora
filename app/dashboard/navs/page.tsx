import { BasicNav } from "@/app/components/navigationComponents/basicNav"
import { CodePreview } from "@/app/components/ui/codePreview"
import { BasicDropDownNav } from "@/app/components/navigationComponents/dropdownNav"
export default function Page() {
  return (
    <div className=" ml-[25vw] space-y-6 h-full ">
      <section className=" flex flex-col mt-5">
        <div className="gap-2">
          <h2 className="text-4xl font-extrabold bg-gradient-to-br from-blue-700 to-white bg-clip-text text-transparent ">Navs</h2>
          <p className="w-1/2 mt-2 text-white opacity-20">
            This page is designed to showcase some basic animations and their
            properties, using tailwind for styling, however we must first look
            at how we comprise our button components
          </p>
        </div>
      </section>
      <section className="grid grid-cols-1">
        <div className="space-y-4">
          <h2 className="text-xl text-white font-bold">
            Basic Nav
          </h2>
          <CodePreview
            className="bg-gray-800 overflow-hidden  h-[48vh] "
            color='bg-gray-800'

            code={""}
            fileName="GsapDiv.tsx"
          >
            <BasicNav />
          </CodePreview>
        </div>

        <div className="space-y-4 mb-10 mt-5">
          <h2 className="text-xl text-white font-bold">
            Basic DropDown Nav
          </h2>
          <CodePreview
            className="bg-gray-800 overflow-hidden  h-[48vh] "
            color='bg-gray-800'

            code={""}
            fileName="GsapDiv.tsx"
          >
            <BasicDropDownNav />
          </CodePreview>
        </div>

      </section>

    </div>
  )
}
