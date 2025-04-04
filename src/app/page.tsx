"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MessageSquare, Home, MessageCircle, HelpCircle } from "lucide-react";
import Message from "@/components/homepage/Message";
import Help from "@/components/homepage/Help";
import HomePage from "@/components/homepage/Home";

type PopoverPage = "home" | "message" | "help";

export default function ChatButton() {
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<PopoverPage>("home");
  const navbarHeight = "64px";

  const navigateTo = (page: PopoverPage) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "message":
        return (
          <div className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto">
              <Message />
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
          </div>
        );

      case "help":
        return (
          <div className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto">
              <Help />
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
                className="flex flex-col items-center gap-1 h-auto text-[#f46117] cursor-pointer"
                onClick={() => navigateTo("help")}
              >
                <HelpCircle className="h-8 w-8" />
                <span className="font-medium">Help</span>
              </Button>
            </div>
          </div>
        );

      default: // 'home'
        return (
          <div className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto">
              <HomePage onNavigate={navigateTo} />
            </div>
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
          </div>
        );
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-[calc(100vh-64px)] bg-black text-white overflow-hidden"
      style={{ "--navbar-height": navbarHeight } as React.CSSProperties}
    >
      <h1 className="text-center text-7xl font-light tracking-tight">
        <span>Result </span>
        <span className="font-bold">Tracking</span>
        <span className="text-[#f46117] text-7xl">.</span>
      </h1>

      <div className="fixed bottom-8 right-8 z-40">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button className="h-12 w-12 rounded-full shadow-lg cursor-pointer transition-transform duration-200 hover:scale-110 hover:bg-[#f46117] p-0 flex items-center justify-center bg-[#f46117]">
              <MessageSquare className="h-6 w-6" />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="w-80 sm:w-96 p-0 rounded-2xl border-none shadow-xl"
            align="end"
            side="top"
            style={{ maxHeight: "calc(100vh - 100px)" }}
          >
            <div className="flex flex-col h-[500px] overflow-hidden">
              {renderPage()}
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
