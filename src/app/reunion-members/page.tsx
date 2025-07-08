"use client";
import Link from "next/link";
import ReunionTable from "../components/ReunionTable";

export default function ReunionMembers() {
  return (
    <div>
      <div className="mb-5">
        <nav className="bg-blue-200 rounded font-bold">
          <ul className="flex justify-center space-x-4 p-4">
            <li>
              <Link
                href="/retreat-members"
                className="text-gray-600 hover:text-[#e5408f]"
              >
                Retreat Members
              </Link>
            </li>
            <li>
              <Link
                href="/reunion-members"
                className="text-gray-600 hover:text-[#e5408f]"
              >
                Reunion members
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="max-w-7xl mx-auto min-h-screen p-6">
        <h1 className="text-3xl text-black font-bold mb-4">
          Reunion Member List
        </h1>
        <ReunionTable />
      </div>
    </div>
  );
}
