"use client";

import Link from "next/link";
import RegisterForm from "../components/RegisterForm";

export default function Register() {
  return (
    <div className="">
      <div className="mb-5">
        <nav className="bg-blue-200 rounded font-bold">
          <ul className="flex justify-center space-x-4 p-4">
            <li>
              <Link
                href="/register"
                className="text-gray-600 hover:text-[#e5408f] hover:shadow-2xl bg-white rounded-2xl px-4 py-2"
              >
                Retreat Registration
              </Link>
            </li>
            <li>
              <Link
                href="/reunion-registration"
                className="text-gray-600 hover:text-[#e5408f] hover:shadow-2xl bg-white rounded-2xl px-4 py-2"
              >
                Reunion Registration
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <main className="min-h-screen p-4">
        <RegisterForm />
      </main>
    </div>
  );
}
