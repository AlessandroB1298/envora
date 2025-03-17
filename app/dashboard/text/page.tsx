import { CodePreview } from "@/app/components/code-preview";
import Landing from "@/app/components/landingPage/landing";
import { landingPageText } from "@/app/components/text/text";
export default function Page() {
  return (
    <div className=" ml-[25vw] space-y-6  ">
      <section className=" flex flex-col mt-5">
        <div className="gap-2">
          <h2 className="text-4xl font-extrabold bg-gradient-to-br from-blue-300 to-white bg-clip-text text-transparent ">Texts</h2>
          <p className="w-1/2 mt-2 text-white opacity-20">
            This page is designed to showcase some basic animations and their
            properties, using tailwind for styling, however we must first look
            at how we comprise our button components
          </p>
        </div>
      </section>

      <section className="grid  mt-10 h grid-cols-1 sm:grid-cols-2 lg-grid-cols-4 gap-4">
        <div className="space-y-4">
          <h2 className="text-xl text-white font-bold">Landing Page</h2>
          <CodePreview
            className="bg-gray-700 h-[60vh]  "
            code={landingPageText}
            fileName="basicTextAnimations.tsx"
          >
            <Landing />
          </CodePreview>
        </div>
      </section>
    </div>
  );
}
