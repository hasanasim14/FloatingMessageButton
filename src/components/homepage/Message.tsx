"use client";

import { ArrowLeft, ArrowUp, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function ChatPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <div className="flex items-center p-4 border-b">
        <button className="p-3 cursor-pointer hover:bg-gray-100 rounded-2xl">
          <ArrowLeft className="h-6 w-6 text-gray-700" />
        </button>

        <div className="flex items-center ml-2">
          <div className="ml-8">
            <h2 className="font-bold text-xl">M&P</h2>
            <div className="flex items-center text-gray-500 text-sm">
              <Clock className="h-4 w-4 mr-1" />
              <span>Back in 3 hours</span>
            </div>
          </div>
        </div>
      </div>

      {/* Chat area */}
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="text-center text-gray-600 my-8">
          <p className="text-s">Ask us anything. We&apos;re here to help :)</p>
        </div>

        {/* This area would contain chat messages */}
        <div className="flex-1"></div>
      </div>

      {/* Message input */}
      <div className="p-4">
        <div className="bg-gray-100 rounded-3xl p-4">
          <Input
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-none bg-transparent mb-2 px-0 focus-visible:ring-0"
          />

          <div className="h-px bg-gray-300 my-2"></div>

          <div className="flex items-end">
            <Textarea
              placeholder="Message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border-none bg-transparent resize-none px-0 focus-visible:ring-0 flex-1"
              rows={1}
            />

            <div className="flex items-center">
              <button className="ml-2 bg-gray-200 rounded-full p-3 hover:bg-gray-300 cursor-pointer">
                <ArrowUp className="h-5 w-5 text-gray-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
