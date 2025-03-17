"use client";

import { DemoAnimation } from "../animations/demoAnimation";
const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-200 to-blue-800 bg-clip-text text-transparent">
        <strong>Landing Page</strong>
      </h1>
      <section>
        <p className="w-1/2 h-3/4 mt-3 opacity-30 text-white font-semibold text-md">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Vivamus interdum
          senectus viverra integer tortor blandit. Sed ac etiam sociosqu
          curabitur facilisi odio in sapien. Iaculis ornare risus eget tempus
          morbi, consectetur malesuad
        </p>

        <DemoAnimation boxes={[1, 2, 3]} />



      </section>

    </div>
  );
};
export default Landing;
