// import Message from "@/components/homepage/Message";
import { ChevronRight, Search } from "lucide-react";

export default function Page() {
  // const items = [
  //   "Medusa Coins",
  //   "Submitting Products for Distribution",
  //   "Shipping Times & Methods",
  //   "Return Policy & Procedure",
  // ];

  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Top gradient section */}
      <div className="bg-gradient-to-b from-blue-500 to-white p-1">
        <div className="bg-blue-50 flex items-center px-4 py-3 rounded-xl">
          <span className="text-blue-600 font-semibold flex-1">
            Search for help
          </span>
          <Search className="h-5 w-5 text-blue-600" />
        </div>
      </div>

      {/* List items */}
      <ul className="divide-y divide-gray-200">
        <li className="flex justify-between items-center px-4 py-3 hover:bg-gray-100 cursor-pointer">
          <span className="text-gray-800">Medusa Coins</span>
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </li>
        <li className="flex justify-between items-center px-4 py-3 hover:bg-gray-100 cursor-pointer">
          <span className="text-gray-800">
            Submitting Products for Distribution
          </span>
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </li>
        <li className="flex justify-between items-center px-4 py-3 hover:bg-gray-100 cursor-pointer">
          <span className="text-gray-800">Shipping Times & Methods</span>
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </li>
        <li className="flex justify-between items-center px-4 py-3 hover:bg-gray-100 cursor-pointer">
          <span className="text-gray-800">Return Policy & Procedure</span>
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </li>
      </ul>
    </div>
  );
}
