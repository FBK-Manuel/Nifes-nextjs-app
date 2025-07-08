import Image from "next/image";
import { IMAGES } from "../constants/images";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillTikTok } from "react-icons/ai";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="mt-8 bg-gray-100">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        <div className="">
          <div className="py-4 px-4 sm:px-6 lg:px-6">
            <Image
              src={IMAGES.LOGO}
              width={60}
              height={60}
              alt="NIFES"
              className="mx-auto mt-4"
            />
            <p className="text-center text-gray-700 mt-5">
              In every student that steps into the campus is a potential to be
              great and useful to God’s kingdom and humanity. They are arrows
              that could be targeted to nab all the challenges of our day and
              make it the kingdom of our God.
            </p>
            <span className="items-center justify-center flex">
              <i>
                <FaFacebook className="inline text-2xl text-[#e5408f] mt-4 mr-3.5 hover:text-[#0b4b87]" />
              </i>
              <i>
                <IoLogoWhatsapp className="inline text-2xl text-[#e5408f] mt-4 mr-3.5 hover:text-[#40c057]" />
              </i>
              <i>
                <AiFillTikTok className="inline text-2xl text-[#e5408f] mt-4 hover:text-[#000000]" />
              </i>
            </span>
          </div>
        </div>
        <div className="py-10 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold text-[#e5408f]">Quick Links</h1>
          <ul className="mt-4 gap-3">
            <li>
              <Link href="/" className="text-gray-600 hover:text-[#e5408f]">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-[#e5408f]"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/register"
                className="text-gray-600 hover:text-[#e5408f]"
              >
                Register
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                className="text-gray-600 hover:text-[#e5408f]"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                href="/events"
                className="text-gray-600 hover:text-[#e5408f]"
              >
                Upcoming Events
              </Link>
            </li>
            <li>
              <Link
                href="/members"
                className="text-gray-600 hover:text-[#e5408f]"
              >
                Registered-Members
              </Link>
            </li>
            <li>
              <Link
                href="/associates"
                className="text-gray-600 hover:text-[#e5408f]"
              >
                Our Associates
              </Link>
            </li>
          </ul>
        </div>

        <div className="py-10 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold text-[#e5408f] mb-4">
            Contact Us
          </h1>
          <p className="text-gray-600 hover:text-[#e5408f]">
            Federal polytechnic Oko, Atani Campus
          </p>
          <p className="text-gray-600 hover:text-[#e5408f]">
            (+234) 80-1234-5678
          </p>
          <p className="text-gray-600 hover:text-[#e5408f]">
            nifesatani2017@gmail.com
          </p>
        </div>
      </div>

      {/* this the last footer bellow */}
      <div className="w-full border-t bg-[#202650] ">
        <div className="max-w-7xl mx-auto p-4 text-center text-gray-200 text-sm">
          © {new Date().getFullYear()} Nigeria Fellowship Of Evangelical
          Students. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
