import { Button } from "@/app/components/ui/button";



export const RingFocusedButton = () => {
  return (
    <div className="w-full flex mt-10 items-center justify-center">
      <Button className=" text-black  w-[8rem] h-[2.5rem]  bg-white hover:bg-gray-200 focus:ring-2 focus:ring-gray-900 focus:ring-opacity-50 focus:ring-offset-2">
        Click me
      </Button>


    </div>

  )
}
