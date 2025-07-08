// import React from 'react'
"use client";

import Image from "next/image";
import { IMAGES } from "../constants/images";
import Link from "next/link";
import { TiArrowForward } from "react-icons/ti";

export default function UpcomingEventsTable() {
  return (
    <div>
      <div className="">
        <Image
          src={IMAGES.ASSOCIATE}
          alt="Upcoming Events"
          width={800}
          height={600}
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="flex items-center justify-center mt-7 gap-4">
        <Link
          href="/reunion-registration"
          className="inline-block bg-[#e5408f] text-white px-6 py-3 rounded-lg hover:bg-gray-300 hover:text-black delay-150 duration-300 ease-in-out transition"
        >
          Apply Now{" "}
          <TiArrowForward className="inline ml-2 text-white hover:text-black text-3xl animate-pulse" />
        </Link>
      </div>
    </div>
  );
}
