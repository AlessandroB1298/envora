
import { Button } from "../button";


export const BasicButton = () => {

  return (
    <Button className="bg-white w-1/2 text-black hover:bg-gray-300">
      Click me
    </Button>

  )
}

export const HoverButton = () => {
  return (
    <Button className="bg-white w-1/2 text-black hover:bg-gray-300 duration-100 transition ease-in hover:translate-y-2">
      Click me
    </Button>

  )
}

export const RoundedButton = () => {
  return (
    <Button className="bg-white w-1/2 text-black hover:bg-gray-300 rounded-xl shadow-md">
      Click me
    </Button>
  )
}

export const RingButton = () => {
  return (
    <Button className=" text-black w-1/2 bg-white hover:bg-gray-200 focus:ring-2 focus:ring-gray-900 focus:ring-opacity-50 focus:ring-offset-2">
      Click me
    </Button>
  )
}
