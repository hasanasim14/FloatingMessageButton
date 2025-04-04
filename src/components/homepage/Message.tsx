"use client";

import type React from "react";

import { ArrowUp, Clock } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { useState, useRef, useEffect } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function Message() {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sessionid, setSessionid] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!message.trim() || isLoading) return;

    const userQuery = message.trim();
    // Add user message to chat
    setMessages((prev) => [...prev, { role: "user", content: userQuery }]);
    setMessage("");
    setIsLoading(true);

    const timeout = 30 * 1000;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
      const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/agent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: userQuery,
          sessionid: sessionid,
        }),
        signal: controller.signal,
      });

      if (!res.ok) throw new Error(`API responded with status: ${res.status}`);

      const data = await res.json();

      // Update session ID if received
      if (data.data?.sessionID) {
        setSessionid(data.data.sessionID);
      }

      console.log("Api's", data.data);

      // Add assistant response to chat
      const assistantMessage =
        data.data?.Message || "I couldn't process that request.";
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: assistantMessage },
      ]);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("API Error:", error);
        const errorMessage =
          error.name === "AbortError"
            ? "Sorry, the chat API took too long to respond. Please try again later."
            : "Sorry, there was an error processing your request. Please try again at a later time";

        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: errorMessage },
        ]);
      }
    } finally {
      clearTimeout(timeoutId);
      setIsLoading(false);
      inputRef.current?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center p-4 border-b">
        <div className="flex items-center">
          <div>
            <h2 className="font-bold text-xl">M&P</h2>
          </div>
        </div>
      </div>

      {/* Chat area - with proper overflow handling */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          {messages.length === 0 ? (
            <div className="text-center text-gray-600 my-8">
              <p className="text-s">
                Ask us anything. We&apos;re here to help :)
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl rounded-lg px-4 py-2 ${
                      msg.role === "user"
                        ? "bg-[#f46117] text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{msg.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-200 text-gray-800 rounded-lg px-4 py-2">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce"></div>
                      <div
                        className="w-2 h-2 rounded-full bg-gray-500 animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                      <div
                        className="w-2 h-2 rounded-full bg-gray-500 animate-bounce"
                        style={{ animationDelay: "0.4s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>
      </div>

      {/* Message input */}
      <div className="p-4 border-t bg-white">
        <div className="bg-gray-100 rounded-3xl p-2">
          <div className="flex items-end">
            <Textarea
              ref={inputRef}
              placeholder="Message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              className="border-none bg-transparent resize-none px-2 py-1 focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none shadow-none flex-1 min-h-[40px] max-h-[120px]"
              style={{ border: "none", outline: "none", boxShadow: "none" }}
              disabled={isLoading}
            />
            <button
              onClick={sendMessage}
              disabled={isLoading || !message.trim()}
              className="ml-2 bg-gray-200 rounded-full p-2 hover:bg-gray-300 cursor-pointer disabled:opacity-50"
            >
              {isLoading ? (
                <Clock className="h-5 w-5 text-gray-500" />
              ) : (
                <ArrowUp className="h-5 w-5 text-gray-500" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
