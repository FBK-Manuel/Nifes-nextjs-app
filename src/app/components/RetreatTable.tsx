// import React from 'react'
"use client";

import { MdOutlineVerified } from "react-icons/md";
import Image from "next/image";
import { IMAGES } from "../constants/images";
import { useEffect, useState } from "react";
import { db } from "../lib/firebase";
import { RegisterFormData } from "../types/datatypes";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { RiDeleteBin5Line } from "react-icons/ri";
import { VscLoading } from "react-icons/vsc";
export default function RetreatTable() {
  const [users, setUsers] = useState<RegisterFormData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const q = query(collection(db, "register"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        const docs = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<RegisterFormData, "id">),
        }));
        setUsers(docs);
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching posts:", error);
        setLoading(false);
      }
    );
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="bg-gray-300">
            <tr>
              <>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                  S/N
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                  Image
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                  Full-Name
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                  Gender
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                  Phone Number
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                  Email Address
                </th>{" "}
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                  Institution
                </th>{" "}
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                  Department
                </th>{" "}
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                  Level
                </th>{" "}
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                  Fellowship
                </th>
                {/* <th className="px-4 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                Status
              </th> */}
                <th className="px-4 py-3"></th>
              </>
            </tr>
          </thead>
          <tbody className="bg-gray-100 divide-y divide-gray-700">
            {loading ? (
              <tr>
                <td colSpan={11}>
                  <div className="flex flex-col items-center justify-center py-6">
                    <VscLoading className="animate-spin text-black text-3xl mb-2" />
                    <p className="text-gray-600">Loading...</p>
                  </div>
                </td>
              </tr>
            ) : users.length === 0 ? (
              <tr>
                <td colSpan={11}>
                  <div className="flex flex-col items-center justify-center py-6">
                    <RiDeleteBin5Line className="text-black text-3xl mb-2" />
                    <p className="text-gray-600">No users found.</p>
                  </div>
                </td>
              </tr>
            ) : (
              users.map((user, index) => (
                <tr key={index}>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">
                    {index + 1}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">
                    <Image
                      src={user.profileImage || IMAGES.AVATER_1} // Use a default image if profileImage is not available
                      alt={`${user.firstName} ${user.lastName}`}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">
                    {user.firstName} {user.lastName}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">
                    {user.gender}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">
                    {user.phone}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">
                    {user.email}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">
                    {user.school}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">
                    {user.department}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">
                    {user.level}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">
                    {user.fellowship}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-blue-400 hover:underline">
                      <MdOutlineVerified className="text-green-500 text-lg" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
