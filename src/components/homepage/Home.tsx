import {
  //   ArrowRight,
  ChevronRight,
  HelpCircle,
  Home,
  MessageCircle,
  Search,
  SendHorizonal,
} from "lucide-react";
import { Button } from "../ui/button";

export default function HomePage() {
  return (
    <div className="flex flex-col h-full overflow-y-auto">
      <div className="bg-[#f46117] text-white rounded-tl-2xl p-6">
        <div className="flex justify-between items-start mb-8"></div>
        <h2 className="text-3xl font-bold mb-2">Hi there 👋</h2>
        <p className="text-2xl font-bold">How can we help?</p>
      </div>

      <div className="p-4 flex-1 bg-[#f46117]">
        <div className="bg-white rounded-lg p-4 mb-4 cursor-pointer hover:bg-gray-50 transition-colors group">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium text-lg text-black group-hover:text-[#f46117] transition-colors duration-300">
                Send us a message
              </h3>
              <p className="text-gray-500">
                We `&apos;`ll be back online in 3 hours
              </p>
            </div>
            <SendHorizonal className="h-5 w-5 text-[#f46117]" />
          </div>
        </div>

        <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Top gradient section */}
          <div className="p-2 cursor-pointer hover:bg-[#f46117]/20 transition-colors duration-300 rounded-xl group">
            <div className="bg-blue-50 group-hover:bg-[#f46117]/10 flex items-center px-4 py-3 rounded-xl transition-colors duration-300">
              <span className="text-black font-semibold flex-1">
                Search for help
              </span>
              <Search className="h-5 w-5 text-[#f46117]" />
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
      </div>

      <div className="flex justify-around p-4 bg-white rounded-b-2xl sticky bottom-0">
        <Button
          variant="ghost"
          className="flex flex-col items-center gap-1 h-auto cursor-pointer"
        >
          <Home className="h-6 w-6" />
          <span className="font-medium">Home</span>
        </Button>
        <Button
          variant="ghost"
          className="flex flex-col items-center gap-1 h-auto text-gray-500 cursor-pointer"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="font-medium">Messages</span>
        </Button>
        <Button
          variant="ghost"
          className="flex flex-col items-center gap-1 h-auto text-gray-500 cursor-pointer"
        >
          <HelpCircle className="h-8 w-8" />
          <span className="font-medium">Help</span>
        </Button>
      </div>
    </div>
  );
}
