"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MessageSquare } from "lucide-react";
import Message from "@/components/homepage/Message";
import IframeComponent from "@/components/homepage/IframeComponent";

export default function ChatButton() {
  const [open, setOpen] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("https://www.mulphilog.com/");

  const renderPage = () => {
    return (
      <Message
        onUrlDetected={(url) => {
          setCurrentUrl(url);
        }}
      />
    );
  };

  return (
    <div className="flex flex-col items-center py-8 px-4 py-0 text-white h-full">
      <div className="w-full max-w-4xl text-center mt-2">
        <div className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-transparent">
            This is not the Official M&P Website
          </h1>
        </div>
      </div>

      <IframeComponent currentUrl={currentUrl} />

      {/* Chat Button - unchanged */}
      <div className="fixed bottom-8 right-8 z-40">
        {!open && (
          <div className="absolute -top-4 -left-24 flex items-center gap-2">
            <span className="text-2xl text-orange-400 bg-gray-800 px-2 py-1 rounded-lg shadow border border-gray-700 animate-bounce">
              Try me!
            </span>
          </div>
        )}

        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              className={`h-14 w-14 rounded-full shadow-xl cursor-pointer transition-all duration-300 ${
                !open && "hover:scale-110"
              } bg-gradient-to-br from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 p-0 flex items-center justify-center`}
              aria-label="Open chat"
            >
              <MessageSquare className="h-6 w-6 text-white" />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="w-80 sm:w-96 p-0 rounded-2xl border border-gray-700 shadow-2xl bg-gray-900 overflow-hidden"
            align="end"
            side="top"
            style={{ maxHeight: "calc(100vh - 95px)" }}
          >
            <div className="flex flex-col h-[500px]">{renderPage()}</div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
