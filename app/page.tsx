

import { Button } from "./components/button";
export default function Home() {
  return (
    <div className="min-h-screen  bg-gray-100 w-full">

      {/* Hero Section */}
      <section className=" flex flex-col justify-center items-center  pl-56  bg-gray-200 w-full h-[20vh] ">


        <h1 className="text-5xl text-gray-900 font-extrabold"> Hello, Welcome to</h1>
        <h1 className="text-blue-700 text-5xl font-extrabold">Envora</h1>
        <Button className="bg-gray-400">Learn more</Button>
      </section>
    </div>
  );
}
