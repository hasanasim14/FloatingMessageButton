"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  MessageSquare,
  Home,
  MessageCircle,
  HelpCircle,
  Search,
  ChevronRight,
  ArrowRight,
  ArrowLeft,
  Send,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import Message from "@/components/homepage/Message";
import Help from "@/components/homepage/Help";

type PopoverPage = "home" | "message" | "search" | "medusa" | "help";

export default function ChatButton() {
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<PopoverPage>("home");
  const [searchQuery, setSearchQuery] = useState("");
  const [messageText, setMessageText] = useState("");

  const navigateTo = (page: PopoverPage) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "message":
        return (
          // <div className="flex flex-col h-full">
          //   <div className="bg-blue-500 text-white p-4 flex items-center">
          //     <Button
          //       variant="ghost"
          //       size="icon"
          //       className="text-white mr-2 hover:bg-blue-600"
          //       onClick={() => navigateTo("home")}
          //     >
          //       <ArrowLeft className="h-5 w-5" />
          //     </Button>
          //     <h2 className="text-xl font-bold">Send a message</h2>
          //   </div>

          //   <div className="flex-1 p-4 overflow-y-auto">
          //     <p className="text-gray-500 mb-4">
          //       Our team will get back to you as soon as possible.
          //     </p>
          //     <Textarea
          //       placeholder="Type your message here..."
          //       className="min-h-[150px] mb-4"
          //       value={messageText}
          //       onChange={(e) => setMessageText(e.target.value)}
          //     />
          //     <Button className="w-full">
          //       <Send className="h-4 w-4 mr-2" />
          //       Send Message
          //     </Button>
          //   </div>
          // </div>
          <Message />
        );

      case "search":
        return (
          <div className="flex flex-col h-full">
            <div className="bg-blue-500 text-white p-4 flex items-center">
              <Button
                variant="ghost"
                size="icon"
                className="text-white mr-2 hover:bg-blue-600"
                onClick={() => navigateTo("home")}
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <h2 className="text-xl font-bold">Search for help</h2>
            </div>

            <div className="p-4">
              <div className="bg-gray-100 rounded-lg p-2 mb-4 flex items-center">
                <Search className="h-5 w-5 text-gray-400 mr-2" />
                <Input
                  placeholder="Search for help"
                  className="border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="flex-1 px-4 pb-4 overflow-y-auto">
              {searchQuery ? (
                <div className="space-y-2">
                  <p className="text-gray-500">Results for "{searchQuery}"</p>
                  <div className="bg-white rounded-lg p-4 border">
                    <h3 className="font-medium">How to use Medusa Coins</h3>
                    <p className="text-sm text-gray-500">
                      Learn about our rewards program
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border">
                    <h3 className="font-medium">Account settings</h3>
                    <p className="text-sm text-gray-500">
                      Manage your profile and preferences
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <Search className="h-10 w-10 mx-auto mb-2 opacity-50" />
                  <p>Type to search for help articles</p>
                </div>
              )}
            </div>
          </div>
        );

      case "medusa":
        return (
          <div className="flex flex-col h-full">
            <div className="bg-blue-500 text-white p-4 flex items-center">
              <Button
                variant="ghost"
                size="icon"
                className="text-white mr-2 hover:bg-blue-600"
                onClick={() => navigateTo("home")}
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <h2 className="text-xl font-bold">Medusa Coins</h2>
            </div>

            <div className="flex-1 p-4 overflow-y-auto">
              <div className="bg-blue-50 rounded-lg p-4 mb-4 border border-blue-100">
                <h3 className="font-bold text-lg text-blue-600">
                  Your Balance
                </h3>
                <p className="text-3xl font-bold">250 coins</p>
              </div>

              <h3 className="font-bold text-lg mb-2">How to earn more</h3>
              <div className="space-y-2">
                <div className="bg-white rounded-lg p-3 border">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">Complete your profile</h4>
                      <p className="text-sm text-gray-500">+50 coins</p>
                    </div>
                    <Button size="sm">Earn</Button>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-3 border">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">Refer a friend</h4>
                      <p className="text-sm text-gray-500">
                        +100 coins per referral
                      </p>
                    </div>
                    <Button size="sm">Share</Button>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-3 border">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">Make a purchase</h4>
                      <p className="text-sm text-gray-500">
                        +10 coins per $1 spent
                      </p>
                    </div>
                    <Button size="sm">Shop</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "help":
        return (
          // <div className="flex flex-col h-full">
          //   <div className="bg-blue-500 text-white p-4 flex items-center">
          //     <Button
          //       variant="ghost"
          //       size="icon"
          //       className="text-white mr-2 hover:bg-blue-600"
          //       onClick={() => navigateTo("home")}
          //     >
          //       <ArrowLeft className="h-5 w-5" />
          //     </Button>
          //     <h2 className="text-xl font-bold">Help Center</h2>
          //   </div>

          //   <div className="flex-1 p-4 overflow-y-auto">
          //     <h3 className="font-bold text-lg mb-3">Popular Topics</h3>
          //     <div className="space-y-2">
          //       <div className="bg-white rounded-lg p-4 border">
          //         <div className="flex justify-between items-center">
          //           <h4 className="font-medium">Orders & Shipping</h4>
          //           <ChevronRight className="h-5 w-5 text-gray-400" />
          //         </div>
          //       </div>
          //       <div className="bg-white rounded-lg p-4 border">
          //         <div className="flex justify-between items-center">
          //           <h4 className="font-medium">Returns & Refunds</h4>
          //           <ChevronRight className="h-5 w-5 text-gray-400" />
          //         </div>
          //       </div>
          //       <div className="bg-white rounded-lg p-4 border">
          //         <div className="flex justify-between items-center">
          //           <h4 className="font-medium">Account & Security</h4>
          //           <ChevronRight className="h-5 w-5 text-gray-400" />
          //         </div>
          //       </div>
          //       <div className="bg-white rounded-lg p-4 border">
          //         <div className="flex justify-between items-center">
          //           <h4 className="font-medium">Payment Methods</h4>
          //           <ChevronRight className="h-5 w-5 text-gray-400" />
          //         </div>
          //       </div>
          //       <div className="bg-white rounded-lg p-4 border">
          //         <div className="flex justify-between items-center">
          //           <h4 className="font-medium">Technical Support</h4>
          //           <ChevronRight className="h-5 w-5 text-gray-400" />
          //         </div>
          //       </div>
          //     </div>
          //   </div>
          // </div>
          <Help />
        );

      default: // 'home'
        return (
          <>
            <div className="bg-blue-500 text-white rounded-t-2xl p-6">
              <div className="flex justify-between items-start mb-8">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-blue-500 mask-image-[url('/placeholder.svg')] mask-size-contain" />
                </div>
                <div className="flex -space-x-2">
                  <Avatar className="border-2 border-blue-500 w-10 h-10">
                    <AvatarImage
                      src="/placeholder.svg?height=40&width=40"
                      alt="Support Agent"
                    />
                    <AvatarFallback>SA</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-blue-500 w-10 h-10">
                    <AvatarImage
                      src="/placeholder.svg?height=40&width=40"
                      alt="Support Agent"
                    />
                    <AvatarFallback>SA</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-blue-500 w-10 h-10">
                    <AvatarImage
                      src="/placeholder.svg?height=40&width=40"
                      alt="Support Agent"
                    />
                    <AvatarFallback>SA</AvatarFallback>
                  </Avatar>
                </div>
              </div>
              <h2 className="text-4xl font-bold mb-2">Hi there 👋</h2>
              <p className="text-3xl font-bold">How can we help?</p>
            </div>

            <div className="p-4 bg-gradient-to-b from-blue-500 to-blue-400 overflow-y-auto max-h-[300px]">
              <div
                className="bg-white rounded-lg p-4 mb-4 cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => navigateTo("message")}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-lg">Send us a message</h3>
                    <p className="text-gray-500">
                      We'll be back online in 2 hours
                    </p>
                  </div>
                  <Button className="bg-blue-500 hover:bg-blue-600 rounded-full h-10 w-10 p-0">
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div
                className="bg-gray-100 rounded-lg p-4 mb-4 flex items-center cursor-pointer hover:bg-gray-200 transition-colors"
                onClick={() => navigateTo("search")}
              >
                <Search className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-500">Search for help</span>
                <Button className="bg-blue-500 hover:bg-blue-600 rounded-full h-8 w-8 p-0 ml-auto">
                  <Search className="h-4 w-4" />
                </Button>
              </div>

              <div
                className="bg-white rounded-lg p-4 mb-4 cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => navigateTo("medusa")}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-lg">Medusa Coins</h3>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </div>
              </div>

              {/* Additional content to demonstrate scrolling */}
              <div className="bg-white rounded-lg p-4 mb-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-lg">Recent Orders</h3>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 mb-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-lg">Account Settings</h3>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>

            <div className="flex justify-around p-4 bg-white rounded-b-2xl">
              <Button
                variant="ghost"
                className="flex flex-col items-center gap-1 h-auto text-blue-500 cursor-pointer"
                onClick={() => navigateTo("home")}
              >
                <Home className="h-6 w-6" />
                <span className="font-medium">Home</span>
              </Button>
              <Button
                variant="ghost"
                className="flex flex-col items-center gap-1 h-auto text-gray-500 hover:text-blue-500 cursor-pointer"
                onClick={() => navigateTo("message")}
              >
                <MessageCircle className="h-6 w-6" />
                <span className="font-medium">Messages</span>
              </Button>
              <Button
                variant="ghost"
                className="flex flex-col items-center gap-1 h-auto text-gray-500 hover:text-blue-500 cursor-pointer"
                onClick={() => navigateTo("help")}
              >
                <HelpCircle className="h-8 w-8" />
                <span className="font-medium">Help</span>
              </Button>
            </div>
          </>
        );
    }
  };

  return (
    <>
      <Image
        src="/hero.png"
        alt="hero-image"
        // width={120}
        // height={120}
        fill
      />

      <div className="fixed bottom-8 right-8 z-40">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button className="h-12 w-12 rounded-full shadow-lg cursor-pointer transition-transform duration-200 hover:scale-110 p-0 flex items-center justify-center">
              <MessageSquare className="h-10 w-10" />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="w-80 sm:w-96 p-0 rounded-2xl border-none shadow-xl"
            align="end"
            side="top"
            style={{ maxHeight: "calc(100vh - 100px)" }}
          >
            <div className="flex flex-col h-[500px]">{renderPage()}</div>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
}
