import { Button } from "@/app/components/ui/button";



export const RoundedButton = () => {
  return (
    <div className="w-full flex mt-10 items-center justify-center">
      <Button className="bg-white t w-[8rem] h-[2.5rem]  text-black hover:bg-gray-300 rounded-xl shadow-md">
        Click me
      </Button>


    </div>

  )
}
