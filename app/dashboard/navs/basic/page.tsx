import { StaticBasicNav } from "@/app/components/navs/static/staticBasicNav";
import { CodePreview } from "@/app/components/ui/codePreview"
import { DropDownWithProps } from "@/app/components/navs/props/basicDropDownProps";
import { BasicNav } from "@/app/components/navs/props/basicNavProps";
import { BasicDropDownNav } from "@/app/components/navs/static/dropdownNav";
import { basicDropDropPropsText, basicStaticNavText, basicNavPropsText, basicStaticDropdownNavText } from "@/app/components/text/nav"
export default function Page() {
  return (
    <div className=" ml-[25vw] space-y-6 h-full ">
      <section className=" flex flex-col ">
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
            Basic Static Nav
          </h2>
          <CodePreview
            className="bg-gray-900 overflow-y-auto  h-[48vh] "
            color='bg-gray-900'

            code={basicStaticNavText}
            fileName="StaticBasicNav.tsx"
          >
            <StaticBasicNav />
          </CodePreview>
        </div>


        <div className="space-y-4 mb-10 mt-5">
          <h2 className="text-xl text-white font-bold">
            Basic Static Dropdown Nav
          </h2>
          <CodePreview
            className="bg-gray-900 overflow-y-auto  h-[48vh] "
            color='bg-gray-900'

            code={basicStaticDropdownNavText}
            fileName="BasicDropDownNav.tsx"
          >
            <BasicDropDownNav />
          </CodePreview>
        </div>


        <div className="space-y-4 mb-10 mt-5">
          <h2 className="text-xl text-white font-bold">
            Basic Nav With Props
          </h2>
          <CodePreview
            className="bg-gray-900 overflow-y-auto  h-[48vh] "
            color='bg-gray-900'

            code={basicNavPropsText}
            fileName="BasicDropDownNav.tsx"
          >
            <BasicNav
              titles={["Home", "About", "Docs", "Contact"]}
              logo={"LOGO"}

            />
          </CodePreview>
        </div>


        <div className="space-y-4 mb-10 mt-5">
          <h2 className="text-xl text-white font-bold">
            Basic Dropdown Nav Props
          </h2>
          <CodePreview
            className="bg-gray-900 overflow-y-auto  h-[48vh] "
            color='bg-gray-900'

            code={basicDropDropPropsText}
            fileName="BasicPropsNav.tsx"
          >
            <DropDownWithProps
              headers={["Home", "About", "Docs"]}
              title={"Contact"}
              logo={"LOGO"}
              subItems={["Phone Support", "Message us", "Chat"]}

            />

          </CodePreview>
        </div>


      </section>

    </div>
  )
}
