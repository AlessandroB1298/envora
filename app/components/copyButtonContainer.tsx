"use client"
import { Copy } from "lucide-react"

type CopyContainerProps = {
  copyText: string,

}
const CopyContainer: React.FC<CopyContainerProps> = ({ copyText }) => {
  const onClick = (text: string) => {
    try {
      navigator.clipboard.writeText(text);
    } catch (e) {
      console.log(`There was an error copying ${text}: ${e} `)
    }
  }

  return (
    <div className="mt-2 flex flex-row items-center justify-between rounded-xl shadow-md border border-white h-[5vh] bg-gray-600">
      <h3 className="text-white font-medium opacity-30 hover:text-gray-200 hover:opacity-100 p-3">
        {copyText}
      </h3>
      <Copy onClick={() => { onClick(copyText) }} className="mr-3 hover:cursor-pointer hover:text-gray-100" />
    </div>
  )
}

export default CopyContainer;
