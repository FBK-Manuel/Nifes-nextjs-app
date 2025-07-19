"use client";
import { IMAGES } from "./constants/images";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaHouse } from "react-icons/fa6";
import "./globals.css";
import { useRouter } from "next/navigation";

function NotFound() {
  const router = useRouter();

  return (
    <section className="relative w-full px-2 flex items-center justify-center">
      <div className="w-full max-w-[34rem] mx-auto my-10 flex flex-col items-center gap-2 relative z-10">
        <Image
          src={IMAGES.ROBOT}
          width={4}
          height={5}
          className="size-[12.75rem] sm:size-[14.75rem] md:size[16.75rem] lg:size-[17.75rem] max-w-full aspect-square"
          alt="lost robot"
        />
        <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl text-center text-ukraftGray900">
          Page Not Found
        </h1>
        <p className="font-normal text-ukraftGray700 text-center">
          Oops! This page isn&#39;t here. It may have been moved or deleted.
          Let&#39;s get you back on track!
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
          <button
            onClick={() => router.back()}
            type="button"
            className="group flex items-center justify-center gap-2 text-base lg:text-lg font-medium tracking-wide bg-[#e5408f] text-ukraftGray00 py-2 px-4 rounded-sm font-poppins transition-all duration-300 mt-4"
          >
            <FaArrowLeft className="text-ukraftGray00 size-5 transform group-hover:-translate-x-1 transition-all duration-300" />
            <span>Go back</span>
          </button>
          <Link
            href="/"
            className="group flex items-center justify-center gap-2 text-base lg:text-lg font-medium tracking-wide bg-ukraftGray00 border border-[#e5408f] text-[#e5408f] py-2 px-4 rounded-sm font-poppins transition-all duration-300 mt-4"
          >
            <FaHouse className="text-[#e5408f] size-4" />
            <span>Go to home</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
