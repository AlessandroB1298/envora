
export const buttonText = 'import { Button } from "../button";' + '\n'
  + '' + '\n'
  + '' + '\n'
  + 'export const BasicButton = () => {' + '\n'
  + '' + '\n'
  + '  return (' + '\n'
  + '    <Button className="bg-white w-1/3 text-black hover:bg-gray-300">' + '\n'
  + '      Click me' + '\n'
  + '    </Button>' + '\n'
  + '' + '\n'
  + '  )' + '\n'
  + '}' + '\n'
  + '' + '\n'
  + 'export const HoverButton = () => {' + '\n'
  + '  return (' + '\n'
  + '    <Button className="bg-white w-1/3 text-black hover:bg-gray-300 duration-100 transition ease-in hover:translate-y-2">' + '\n'
  + '      Click me' + '\n'
  + '    </Button>' + '\n'
  + '' + '\n'
  + '  )' + '\n'
  + '}' + '\n'
  + '' + '\n'
  + 'export const RoundedButton = () => {' + '\n'
  + '  return (' + '\n'
  + '    <Button className="bg-white w-1/3 text-black hover:bg-gray-300 rounded-xl shadow-md">' + '\n'
  + '      Click me' + '\n'
  + '    </Button>' + '\n'
  + '  )' + '\n'
  + '}' + '\n'
  + '' + '\n'
  + 'export const RingButton = () => {' + '\n'
  + '  return (' + '\n'
  + '    <Button className=" text-black w-1/3 bg-white hover:bg-gray-200 focus:ring-2 focus:ring-gray-900 focus:ring-opacity-50 focus:ring-offset-2">' + '\n'
  + '      Click me' + '\n'
  + '    </Button>' + '\n'
  + '  )' + '\n'
  + '}'


export const renderButtons = 'export const RenderButtons = () => {' + '\n'
  + '  return (' + '\n'
  + '    <section className="grid grid-cols-1 w-full gap-3">' + '\n'
  + '      <div className="space-y-4">' + '\n'
  + '        <h2 className="text-xl text-white font-bold">Basic Buttons</h2>' + '\n'
  + '          <div className="grid grid-cols-3 gap-3">' + '\n'
  + '            <BasicButton />' + '\n'
  + '            <HoverButton />' + '\n'
  + '            <RoundedButton />' + '\n'
  + '            <RingButton />' + '\n'
  + '          </div>' + '\n'
  + '      </div>' + '\n'
  + '    </section>' + '\n'
  + '  )' + '\n'
  + '}'

