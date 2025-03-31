import {
  //  ArrowLeft, ChevronRight,
  Search,
} from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function Help() {
  return (
    <>
      <div className="w-full max-w-md mx-auto bg-white rounded-3xl overflow-hidden shadow-sm">
        <div className="text-center p-6 border-b">
          <h2 className="text-xl font-semibold">Help</h2>

          <div className="relative mt-4">
            <Input className="pr-10" placeholder="Search for help" />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 cursor-pointer" />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center space-y-4 p-8">
          <div className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center">
            {/* <MessageCircle className="h-6 w-6 text-gray-500" /> */}
          </div>
          <span className="text-xl font-medium">No messages</span>
          <p className="text-gray-500 text-center">
            Messages from the team will be shown here
          </p>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full flex items-center space-x-2 mt-2 cursor-pointer">
            <span>Send us a Message</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="rotate-45"
            >
              <path
                d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div>
      </div>
    </>
  );
}
