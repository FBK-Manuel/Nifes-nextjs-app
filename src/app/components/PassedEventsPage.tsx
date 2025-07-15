// import React from 'react'
"use client";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { FaRegCalendarXmark } from "react-icons/fa6";
import { PassedEventCardProps } from "../types/datatypes";

export default function PassedEventsPage({
  id,
  title,
  content,
  imageUrl,
  createdAt,
  eventDate,
}: // movedAt,
PassedEventCardProps) {
  const isPastEvent = eventDate < new Date();
  return (
    <div>
      <div
        className={`bg-[#202650] rounded-lg overflow-hidden shadow-lg flex flex-col relative`}
      >
        <div className="relative w-full h-48">
          <Image src={imageUrl} alt={title} fill className="object-cover" />
          {isPastEvent && (
            <div className="absolute top-2 left-2 bg-red-600 text-xs text-white px-2 py-1 rounded flex items-center gap-1">
              <FaRegCalendarXmark size={14} />
              <span>Event Passed</span>
            </div>
          )}
        </div>
        <div className="p-4 flex-1 flex flex-col">
          <p className="text-xs text-gray-400 mb-1">
            Event Date: {format(eventDate, "MMMM d, yyyy")}
          </p>
          <p className="text-xs text-gray-400 mb-2">
            Posted on {format(createdAt, "MMMM d, yyyy")}
          </p>
          <h2 className="text-lg font-semibold text-white mb-2">{title}</h2>
          <p className="text-sm text-gray-300 mb-4 line-clamp-3">{content}</p>
          <div className="flex items-center justify-between mt-auto">
            <>
              <Link
                href={`/passed-events/${id}`}
                className="mt-auto inline-block text-sm text-blue-400 hover:underline"
              >
                Read More →
              </Link>
            </>
          </div>
        </div>
      </div>
    </div>
  );
}
