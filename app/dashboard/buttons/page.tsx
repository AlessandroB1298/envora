import { CodePreview } from "@/app/components/code-preview";
import CopyContainer from "@/app/components/copyButtonContainer";
import { buttonText, renderButtons } from "@/app/components/text/buttons";
import { HoverButton, RoundedButton, RingButton, BasicButton } from "@/app/components/buttons/buttons";


export default function Page() {
  return (
    <div className=" ml-[25vw] h-[100vh] overflow-y-auto space-y-6  ">
      <section className=" flex flex-col mt-5">
        <div className="gap-2">
          <h2 className=" text-4xl font-extrabold bg-gradient-to-br from-blue-300 to-white bg-clip-text text-transparent ">
            Buttons
          </h2>
          <p className="w-3/4 mt-2 text-white opacity-20">
            This page is designed to showcase some basic buttons and their
            properties, using tailwind for styling, however we must first look
            at how we comprise our button component
          </p>
        </div>
      </section>

      <section className="mt-5">
        <div className="gap-2">
          <p className="w-3/4 text-white opacity-20">
            Using Shadecn{"'s"} button component we can modify the button
            {"'s"} ui
          </p>
        </div>
        <div className=" w-3/4">
          <CopyContainer copyText={"npx shadcn@latest add button"} />
        </div>
      </section>

      <section className="grid grid-cols-1 w-full gap-3">
        <div className="space-y-4">
          <h2 className="text-xl text-white font-bold">Basic Buttons</h2>
          <CodePreview
            className="bg-gray-700 h-[65vh]  w-3/4"
            components={buttonText}
            code={renderButtons}
            fileName="basicButtons.tsx"
          >
            <div className="grid grid-cols-4 gap-3">
              <BasicButton />
              <HoverButton />
              <RoundedButton />
              <RingButton />
            </div>

          </CodePreview>
        </div>


        <div className="space-y-4 mt-10 mb-24">
          <h2 className="text-xl text-white font-bold">Action Buttons</h2>
          <CodePreview
            className="bg-gray-700 h-[65vh]  w-3/4"
            components={buttonText}
            code={renderButtons}
            fileName="basicButtons.tsx"
          >
            <div className="grid grid-cols-4 gap-3">
              <BasicButton />
              <HoverButton />
              <RoundedButton />
              <RingButton />
            </div>

          </CodePreview>
        </div>



      </section>


    </div>
  );
}
