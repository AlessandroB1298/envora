import Link from "next/link"
export const InProgress = () => {
  return (
    <div className="relative h-[40vh] flex flex-col items-center justify-center rounded-lg shadow-lg bg-gray-900 w-[600px] border-white/10 border-dashed  border-3">
      <h2 className="text-white text-3xl font-semibold">
        Under Construction!
      </h2>
      <p className="text-md text-white/30 mt-4">
        Please come back later, this page is under construction
      </p>
      <Link className="px-6 mt-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all" href={"/"}>
        Go Back
      </Link>

    </div>)
}

