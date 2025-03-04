import { CodePreview } from "@/app/components/code-preview";
import { Button } from "@/app/components/button";
export default function Page() {
  const basicButton =
    "<Button className=' bg-white text-black hover:bg-gray-300'>Click met</Button>";

  const hoverButton =
    "<Button className='bg-white text-black hover:bg-gray-300 transform ease-in hover:translate-y-1'>Click met</Button>";

  const roundedButton =
    "<Button className='bg-white text-black hover:bg-gray-300 rounded-xl shadow-md'>Click met</Button>";

  return (
    <div className=" ml-[25vw]  space-y-6 overflow-auto ">
      <section className="grid  mt-10 grid-cols-1 sm:grid-cols-2 lg-grid-cols-4 gap-4">
        <div className="space-y-4">
          <h2 className="text-xl text-white font-semibold">Basic Button</h2>
          <CodePreview
            className="bg-gray-700 "
            code={basicButton}
            fileName="buttonBasicExample.tsx"
          >
            <Button className="bg-white text-black hover:bg-gray-300">
              Click me
            </Button>
          </CodePreview>
        </div>
      </section>

      <section className="grid  mt-10 grid-cols-1 sm:grid-cols-2 lg-grid-cols-4 gap-10">
        <div className="space-y-4 justify-between">
          <h2 className="text-xl text-white font-semibold">Hover Button</h2>
          <CodePreview
            className="bg-gray-700"
            code={hoverButton}
            fileName="buttonHoverExample.tsx"
          >
            <Button className="bg-white text-black hover:bg-gray-300 duration-100 transition ease-in hover:translate-y-2">
              Click me
            </Button>
          </CodePreview>
        </div>
      </section>

      <section className="grid  mt-10 grid-cols-1 sm:grid-cols-2 lg-grid-cols-4 gap-4">
        <div className="space-y-4">
          <h2 className="text-xl text-white font-semibold">Rounded</h2>
          <CodePreview
            className="bg-gray-700"
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
