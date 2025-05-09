"use client";

import { ChevronRight } from "lucide-react";

interface HomePageProps {
  onCardClick?: (content: string) => void;
}

export default function HomePage({ onCardClick }: HomePageProps) {
  const cardItems = [
    "Which Service should I choose?",
    "Find an Express Center",
    "Job Opportunities",
    "M&P Company Timeline",
    "Leadership Team",
  ];

  const handleCardClick = (content: string) => {
    if (onCardClick) {
      onCardClick(content);
    }
  };

  return (
    <div className="flex flex-col h-full overflow-y-auto">
      <div className="bg-white px-4 py-0">
        <div className="flex justify-between items-start mb-2"></div>
        <h2 className="text-xl font-semibold mb-0 text-[#f46117]">
          👋 How can I help you today?
        </h2>
      </div>

      <div className="px-4 py-2 flex-1 bg-white">
        <div className="flex gap-4 mb-4"></div>

        <div className="max-w-sm mx-auto bg-white rounded-2xl border shadow-sm overflow-hidden">
          <ul className="divide-y divide-gray-200">
            {cardItems.map((item, index) => (
              <li
                key={index}
                onClick={() => handleCardClick(item)}
                className="flex items-center justify-between p-3 group hover:bg-gray-50 transition-colors duration-300 cursor-pointer"
              >
                <span className="text-gray-800 font-medium">{item}</span>
                <ChevronRight className="h-5 w-5 text-gray-400 stroke-[3] transition-colors duration-200 group-hover:text-[#f46117]" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
