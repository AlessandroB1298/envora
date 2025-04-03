import { Button } from "@/app/components/ui/button";

export const HoverButton = () => {
  return (
    <div className="w-full flex mt-10 items-center justify-center">
      <Button className="bg-white  w-[8rem] h-[2.5rem]  text-black hover:bg-gray-300 duration-100 transition ease-in hover:translate-y-2">
        Click me
      </Button>
    </div>
  );
};
