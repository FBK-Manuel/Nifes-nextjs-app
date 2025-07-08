"use client";
import { useState } from "react";
import Link from "next/link";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
// import { LuSquareMenu } from "react-icons/lu";
import { IMAGES } from "../constants/images";
import Image from "next/image";
// import { SettingOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiHome3Line, RiUserStarLine } from "react-icons/ri";
import { GrContact } from "react-icons/gr";
import { TbUsersGroup } from "react-icons/tb";
// import { TiImage } from "react-icons/ti";
const items: MenuProps["items"] = [
  {
    key: "1",
    label: <Link href="/gallary">Gallary</Link>,
  },

  {
    type: "divider",
  },
  {
    key: "3",
    label: <Link href="/upcoming-events">Upcoming Events</Link>,
  },
  {
    type: "divider",
  },
  {
    key: "7",
    label: <Link href="/associates">Our Associates</Link>,
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className=" border-b bg-white">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-900">
          <Image src={IMAGES.LOGO} width={40} height={40} alt="NIFES" />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link
              href="/"
              className="hover:text-[#e5408f] flex items-center gap-1"
            >
              <RiHome3Line />
              Home
            </Link>
          </li>
          <li>
            <Dropdown menu={{ items }}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  About Us
                  <MdKeyboardArrowDown />
                </Space>
              </a>
            </Dropdown>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-[#e5408f] flex items-center gap-1"
            >
              <GrContact />
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/register"
              className="hover:text-[#e5408f] flex items-center gap-1"
            >
              <RiUserStarLine />
              Register
            </Link>
          </li>
          <li>
            <Link
              href="/retreat-members"
              className="hover:text-[#e5408f] flex items-center gap-1"
            >
              <TbUsersGroup />
              Registered
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <CgClose size={24} /> : <HiOutlineMenuAlt3 size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t">
          <ul className="flex flex-col space-y-2 px-4 py-4">
            <li>
              <Link
                href="/"
                className="block py-2 hover:text-[#e5408f] flex items-center gap-1"
              >
                <RiHome3Line />
                Home
              </Link>
            </li>

            <li>
              <Dropdown menu={{ items }}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    About Us
                    <MdKeyboardArrowDown />
                  </Space>
                </a>
              </Dropdown>
            </li>
            <li>
              <Link
                href="/contact"
                className="block py-2 hover:text-[#e5408f] flex items-center gap-1"
              >
                <GrContact />
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/register"
                className="block py-2 hover:text-[#e5408f] flex items-center gap-1"
              >
                <RiUserStarLine />
                Register
              </Link>
            </li>
            <li>
              <Link
                href="/retreat-members"
                className="hover:text-[#e5408f] flex items-center gap-1"
              >
                <TbUsersGroup />
                Registered
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
