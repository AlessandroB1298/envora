import { CodePreview } from "@/code-preview";
import { Button } from "@/components/ui/button";
export default function Page() {
  const buttonCode = " <Link className='hover:bg-gray-300'>Click met</Link>";

  return (
    <div className=" ml-[25vw]  space-y-6 overflow-auto ">
      <section className="grid  mt-10 grid-cols-1 sm:grid-cols-2 lg-grid-cols-4 gap-4 hj">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Button Component</h2>
          <CodePreview
            className="bg-gray-700 "
            code={buttonCode}
            fileName="button-example.tsx"
          >
            <Button className="hover:bg-gray-300" variant="outline">
              Click me
            </Button>
          </CodePreview>
        </div>
      </section>

      <section className="grid  mt-10 grid-cols-1 sm:grid-cols-2 lg-grid-cols-4 gap-10">
        <div className="space-y-4 justify-between">
          <h2 className="text-xl font-semibold">Button Component</h2>
          <CodePreview
            className="bg-gray-700"
            code={buttonCode}
            fileName="button-example.tsx"
          >
            <Button className="hover:bg-gray-300" variant="outline">
              Click me
            </Button>
          </CodePreview>
        </div>
      </section>

      <section className="grid  mt-10 grid-cols-1 sm:grid-cols-2 lg-grid-cols-4 gap-4">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Button Component</h2>
          <CodePreview
            className="bg-gray-700"
            code={buttonCode}
            fileName="button-example.tsx"
          >
            <Button className="hover:bg-gray-300" variant="outline">
              Click me
            </Button>
          </CodePreview>
        </div>
      </section>
    </div>
  );
}
