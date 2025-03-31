import {
  //  ArrowLeft, ChevronRight,
  MessageCircle,
  // , Send
} from "lucide-react";
import { Button } from "../ui/button";
// import { Textarea } from "../ui/textarea";

export default function Message() {
  return (
    <>
      {/* <div className="flex flex-col h-full">
        <div className="bg-blue-500 text-white p-4 flex items-center">
          <Button
            variant="ghost"
            size="icon"
            className="text-white mr-2 hover:bg-blue-600"
            // onClick={() => navigateTo("home")}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h2 className="text-xl font-bold">Send a message</h2>
        </div>

        <div className="flex-1 p-4 overflow-y-auto">
          <p className="text-gray-500 mb-4">
            Our team will get back to you as soon as possible.
          </p>
          <Textarea
            placeholder="Type your message here..."
            className="min-h-[150px] mb-4"
            // value={messageText}
            // onChange={(e) => setMessageText(e.target.value)}
          />
          <Button className="w-full">
            <Send className="h-4 w-4 mr-2" />
            Send Message
          </Button>
        </div>
      </div> */}
      <div className="w-full max-w-md mx-auto bg-white rounded-3xl overflow-hidden shadow-sm">
        <div className="text-center p-6 border-b">
          <h2 className="text-2xl font-bold">Messages</h2>
        </div>

        <div className="flex flex-col items-center justify-center space-y-4 p-8">
          <div className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center">
            <MessageCircle className="h-6 w-6 text-gray-500" />
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
