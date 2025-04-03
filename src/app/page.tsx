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
  Search,
  ArrowLeft,
  Home,
  MessageCircle,
  HelpCircle,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Message from "@/components/homepage/Message";
import Help from "@/components/homepage/Help";
import HomePage from "@/components/homepage/Home";

type PopoverPage = "home" | "message" | "search" | "medusa" | "help";

export default function ChatButton() {
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<PopoverPage>("home");
  const [searchQuery, setSearchQuery] = useState("");

  const navigateTo = (page: PopoverPage) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "message":
        return (
          <>
            <Message />
            <div className="flex justify-around p-4 bg-white rounded-b-2xl sticky bottom-0">
              <Button
                variant="ghost"
                className="flex flex-col items-center gap-1 h-auto text-gray-500 hover:text-[#f46117] cursor-pointer"
                onClick={() => navigateTo("home")}
              >
                <Home className="h-6 w-6" />
                <span className="font-medium">Home</span>
              </Button>
              <Button
                variant="ghost"
                className="flex flex-col items-center gap-1 h-auto text-[#f46117] cursor-pointer"
                onClick={() => navigateTo("message")}
              >
                <MessageCircle className="h-6 w-6" />
                <span className="font-medium">Messages</span>
              </Button>
              <Button
                variant="ghost"
                className="flex flex-col items-center gap-1 h-auto text-gray-500 hover:text-[#f46117] cursor-pointer"
                onClick={() => navigateTo("help")}
              >
                <HelpCircle className="h-8 w-8" />
                <span className="font-medium">Help</span>
              </Button>
            </div>
          </>
        );

      case "search":
        return (
          <div className="flex flex-col h-full">
            <div className="bg-[#f46117] text-white p-4 flex items-center">
              <Button
                variant="ghost"
                size="icon"
                className="text-white mr-2"
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
            <div className="flex justify-around p-4 bg-white rounded-b-2xl sticky bottom-0">
              <Button
                variant="ghost"
                className="flex flex-col items-center gap-1 h-auto text-gray-500 hover:text-[#f46117] cursor-pointer"
                onClick={() => navigateTo("home")}
              >
                <Home className="h-6 w-6" />
                <span className="font-medium">Home</span>
              </Button>
              <Button
                variant="ghost"
                className="flex flex-col items-center gap-1 h-auto text-gray-500 hover:text-[#f46117] cursor-pointer"
                onClick={() => navigateTo("message")}
              >
                <MessageCircle className="h-6 w-6" />
                <span className="font-medium">Messages</span>
              </Button>
              <Button
                variant="ghost"
                className="flex flex-col items-center gap-1 h-auto text-gray-500 hover:text-[#f46117] cursor-pointer"
                onClick={() => navigateTo("help")}
              >
                <HelpCircle className="h-8 w-8" />
                <span className="font-medium">Help</span>
              </Button>
            </div>
          </div>
        );

      case "medusa":
        return (
          <div className="flex flex-col h-full">
            <div className=" text-white p-4 flex items-center">
              <Button
                variant="ghost"
                size="icon"
                className="text-white mr-2"
                onClick={() => navigateTo("home")}
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <h2 className="text-xl font-bold">Medusa Coins</h2>
            </div>

            <div className="flex-1 p-4 overflow-y-auto">
              <div className="rounded-lg p-4 mb-4 border">
                <h3 className="font-bold text-lg">Your Balance</h3>
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
            <div className="flex justify-around p-4 bg-white rounded-b-2xl sticky bottom-0">
              <Button
                variant="ghost"
                className="flex flex-col items-center gap-1 h-auto text-gray-500 hover:text-[#f46117] cursor-pointer"
                onClick={() => navigateTo("home")}
              >
                <Home className="h-6 w-6" />
                <span className="font-medium">Home</span>
              </Button>
              <Button
                variant="ghost"
                className="flex flex-col items-center gap-1 h-auto text-gray-500 hover:text-[#f46117] cursor-pointer"
                onClick={() => navigateTo("message")}
              >
                <MessageCircle className="h-6 w-6" />
                <span className="font-medium">Messages</span>
              </Button>
              <Button
                variant="ghost"
                className="flex flex-col items-center gap-1 h-auto text-gray-500 hover:text-[#f46117] cursor-pointer"
                onClick={() => navigateTo("help")}
              >
                <HelpCircle className="h-8 w-8" />
                <span className="font-medium">Help</span>
              </Button>
            </div>
          </div>
        );

      case "help":
        return (
          <>
            <Help />
            <div className="flex justify-around p-4 bg-white rounded-b-2xl sticky bottom-0">
              <Button
                variant="ghost"
                className="flex flex-col items-center gap-1 h-auto text-gray-500 hover:text-[#f46117] cursor-pointer"
                onClick={() => navigateTo("home")}
              >
                <Home className="h-6 w-6" />
                <span className="font-medium">Home</span>
              </Button>
              <Button
                variant="ghost"
                className="flex flex-col items-center gap-1 h-auto text-gray-500 hover:text-[#f46117] cursor-pointer"
                onClick={() => navigateTo("message")}
              >
                <MessageCircle className="h-6 w-6" />
                <span className="font-medium">Messages</span>
              </Button>
              <Button
                variant="ghost"
                className="flex flex-col items-center gap-1 h-auto text-[#f46117] cursor-pointer"
                onClick={() => navigateTo("help")}
              >
                <HelpCircle className="h-8 w-8" />
                <span className="font-medium">Help</span>
              </Button>
            </div>
          </>
        );

      default: // 'home'
        return (
          <>
            <HomePage />
            <div className="flex justify-around p-4 bg-white rounded-b-2xl sticky bottom-0">
              <Button
                variant="ghost"
                className="flex flex-col items-center gap-1 h-auto text-[#f46117] cursor-pointer"
                onClick={() => navigateTo("home")}
              >
                <Home className="h-6 w-6" />
                <span className="font-medium">Home</span>
              </Button>
              <Button
                variant="ghost"
                className="flex flex-col items-center gap-1 h-auto text-gray-500 hover:text-[#f46117] cursor-pointer"
                onClick={() => navigateTo("message")}
              >
                <MessageCircle className="h-6 w-6" />
                <span className="font-medium">Messages</span>
              </Button>
              <Button
                variant="ghost"
                className="flex flex-col items-center gap-1 h-auto text-gray-500 hover:text-[#f46117] cursor-pointer"
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
      {/* <Image
        src="/hero.png"
        alt="hero-image"
        // width={120}
        // height={120}
        fill
      /> */}

      <div className="fixed bottom-8 right-8 z-40">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button className="h-12 w-12 rounded-full shadow-lg cursor-pointer transition-transform duration-200 hover:scale-110 hover:bg-[#f46117] p-0 flex items-center justify-center bg-[#f46117]">
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
