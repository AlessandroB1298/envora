import { CodePreview } from "@/app/components/code-preview";
import { Button } from "@/app/components/button";
import CopyContainer from "@/app/components/copyButtonContainer";
import {
  basicButton,
  hoverButton,
  roundedButton,
} from "@/app/components/text/buttons";

export default function Page() {
  return (
    <div className=" ml-[25vw] overflow-y-auto space-y-6  ">
      <section className=" flex flex-col mt-5">
        <div className="gap-2">
          <h2 className=" text-4xl font-extrabold bg-gradient-to-br from-blue-300 to-white bg-clip-text text-transparent ">
            Buttons
          </h2>
          <p className="w-1/2 mt-2 text-white opacity-20">
            This page is designed to showcase some basic buttons and their
            properties, using tailwind for styling, however we must first look
            at how we comprise our button component
          </p>
        </div>
      </section>

      <section className="mt-5">
        <div className="gap-2">
          <p className="w-1/2 text-white opacity-20">
            Using Shadecn{"'s"} button component we can modify the button
            {"'s"} ui
          </p>
        </div>
        <div className=" w-1/2">
          <CopyContainer copyText={"npx shadcn@latest add button"} />
        </div>
      </section>

      <section className="grid grid-cols-1  w-3/4 gap-8">
        <div className="space-y-4">
          <h2 className="text-xl text-white font-bold">Basic Button</h2>
          <CodePreview
            className="bg-gray-700 h-[300px]"
            code={basicButton}
            fileName="buttonBasicExample.tsx"
          >
            <Button className="bg-white text-black hover:bg-gray-300">
              Click me
            </Button>
          </CodePreview>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl text-white font-bold">Hover Button</h2>
          <CodePreview
            className="bg-gray-700 h-[300px]"
            code={hoverButton}
            fileName="buttonHoverExample.tsx"
          >
            <Button className="bg-white text-black hover:bg-gray-300 duration-100 transition ease-in hover:translate-y-2">
              Click me
            </Button>
          </CodePreview>
        </div>

        <div className="space-y-4 mb-64">
          <h2 className="text-xl text-white font-bold">Rounded</h2>
          <CodePreview
            className="bg-gray-700 h-[300px]"
            code={roundedButton}
            fileName="buttonRoundExample.tsx"
          >
            <Button className="bg-white text-black hover:bg-gray-300 rounded-xl shadow-md">
              Click me
            </Button>
          </CodePreview>
        </div>
      </section>
    </div>
  );
}
