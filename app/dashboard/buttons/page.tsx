import { CodePreview } from "@/app/components/ui/codePreview";
import CopyContainer from "@/app/components/ui/copyButtonContainer";

import { BasicButton } from "@/app/components/buttons/basicButton";
import { RoundedButton } from "@/app/components/buttons/roundedButton";
import { HoverButton } from "@/app/components/buttons/hoverButton";
import { RingFocusedButton } from "@/app/components/buttons/ringFocused";
import { ringFocusedButtonText, roundedButtonText, basicButtonText, hoverButtonText } from "@/app/components/text/buttons";

export default function Page() {
  return (
    <div className=" ml-[25vw] overflow-y-auto space-y-6  ">
      <section className=" flex flex-col mt-5">
        <div className="gap-2">
          <h2 className=" text-4xl font-extrabold bg-gradient-to-br from-blue-700 to-white bg-clip-text text-transparent ">
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

      <section className="grid grid-cols-1 w-full gap-3">
        <div className="space-y-4">
          <h2 className="text-xl text-white font-bold">Basic Button</h2>
          <CodePreview
            className="bg-gray-700 h-[350px] "
            code={basicButtonText}
            fileName="buttonBasicExample.tsx"
          >
            <BasicButton />
          </CodePreview>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl text-white font-bold">Hover Button</h2>
          <CodePreview
            className="bg-gray-700 h-[350px]"

            code={hoverButtonText}

            fileName="buttonHoverExample.tsx"
          >
            <HoverButton />
          </CodePreview>
        </div>

        <div className="space-y-4 ">
          <h2 className="text-xl text-white font-bold">Rounded</h2>
          <CodePreview
            className="bg-gray-700 h-[350px]"

            code={roundedButtonText}

            fileName="buttonRoundExample.tsx"
          >
            <RoundedButton />
          </CodePreview>
        </div>



        <div className="space-y-4 mb-64">
          <h2 className="text-xl text-white font-bold">Ring Focus</h2>
          <CodePreview
            className="bg-gray-700 h-[350px]"
            code={ringFocusedButtonText}
            fileName="buttonRoundExample.tsx"
          >
            <RingFocusedButton />
          </CodePreview>
        </div>



      </section>


    </div>
  );
}
