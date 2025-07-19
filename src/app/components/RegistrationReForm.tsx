"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { IMAGES } from "../constants/images";
import Swal from "sweetalert2";
import axios from "axios";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";
import { VscLoading } from "react-icons/vsc";

export default function RegisterReForm() {
  const [profileImage, setProfileImage] = useState<string>(IMAGES.AVATER_2);
  const [uploading, setUploading] = useState<boolean>(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    department: "",
    fellowship: "",
    level: "",
    school: "",
    phone: "",
    email: "",
    gender: "",
  });

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
      setImageFile(file);
    } else {
      setProfileImage("");
      setImageFile(null);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData, imageFile);
    // Add your save logic here

    if (!profileImage && !imageFile) {
      Swal.fire({
        icon: "error",
        title: "No Image Selected",
        text: "Please select a profile image before submitting.",
      });
      return;
    }
    setUploading(true);

    try {
      // Upload to Cloudinary
      const formDataUpload = new FormData();
      formDataUpload.append("file", imageFile!);
      formDataUpload.append("upload_preset", "nifes_unsigned_preset"); // Your preset name

      const cloudinaryRes = await axios.post(
        `${process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_IMAGE_URL}`,
        formDataUpload
      );
      console.log("cloudinary adding post:", cloudinaryRes.data);

      const imageUrl = cloudinaryRes.data.secure_url; // Get the uploaded image URL

      await addDoc(collection(db, "reunion"), {
        ...formData,
        profileImage: imageUrl,
        createdAt: serverTimestamp(),
      });
      // profileImage: IMAGES.AVATER_2, // Reset to default image
      setFormData({
        firstName: "",
        lastName: "",
        department: "",
        fellowship: "",
        level: "",
        gender: "",
        school: "",
        phone: "",
        email: "",
      });
      setProfileImage(IMAGES.AVATER_2);
      setImageFile(null);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Application Successful",
        text: "Your application has been submitted successfully.",
        showConfirmButton: false,
        timer: 5000,
      });
    } catch (error) {
      console.error("Error adding post:", error);
      console.error("Error saving registration:", error);
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: "There was an error saving your registration. Please try again.",
      });

      return;
    } finally {
      setUploading(false);
      // Reset the form and image after submission
      setProfileImage(IMAGES.AVATER_2); // Reset to default image
      if (fileInputRef.current) {
        fileInputRef.current.value = ""; // Clear the file input
      }
      console.clear();
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-12 rounded-xl bg-white border border-gray-500 p-8 text-black shadow-lg">
      <h2 className="md:text-2xl sm:text-lg font-semibold mb-6 text-center text-[#e5408f] hover:text-black transition duration-300 ease-in-out">
        Registration For Reunion
      </h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-400">
            <Image
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-cover"
              width={10}
              height={10}
            />
          </div>
          <button
            type="button"
            onClick={handleImageClick}
            className="mt-4 text-[#e5408f] hover:underline hover:text-[#3e4095]"
          >
            Upload image
          </button>
          <input
            type="file"
            ref={fileInputRef}
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </div>

        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1 text-[#3e4095]">
              First Name
            </label>
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full rounded border border-gray-400 bg-white p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
            />
          </div>
          <div>
            <label className="block text-sm mb-1 text-[#3e4095]">
              Last Name
            </label>
            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full rounded border border-gray-400 bg-white p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
            />
          </div>
          <div>
            <label className="block text-sm mb-1 text-[#3e4095]">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full rounded border border-gray-400 bg-white p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1 text-[#3e4095]">
              Phone Number
            </label>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded border border-gray-400 bg-white p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm mb-1 text-[#3e4095]">
              Email Address
            </label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded border border-gray-400 bg-white p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm mb-1 text-[#3e4095]">
              Institution
            </label>
            <input
              name="school"
              value={formData.school}
              onChange={handleChange}
              className="w-full rounded border border-gray-400 bg-white p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
            />
          </div>
          <div>
            <label className="block text-sm mb-1 text-[#3e4095]">
              Department
            </label>
            <input
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full rounded border border-gray-400 bg-white p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
            />
          </div>
          <div>
            <label className="block text-sm mb-1 text-[#3e4095]">Level</label>
            <select
              name="level"
              value={formData.level}
              onChange={handleChange}
              className="w-full rounded border border-gray-400 bg-white p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Level</option>
              <option value="ND1">ND1</option>
              <option value="ND2 ">ND2</option>
              <option value="HND1">HND1</option>
              <option value="HND2">HND2</option>
              <option value="IT">IT</option>
              <option value="OTHERS">OTHERS</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm mb-1 text-[#3e4095]">
              Fellowship
            </label>
            <select
              name="fellowship"
              value={formData.fellowship}
              onChange={handleChange}
              className="w-full rounded border border-gray-400 bg-white p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Fellowship</option>
              <option value="Nifes">NIFES</option>
              <option value="Casor">CASOR</option>
              <option value="Effac">EFFAC</option>
              <option value="Nfcs">NFCS</option>
              <option value="Rcf">RCF</option>
              <option value="Watchman">WATCHMAN</option>
              <option value="Wcf">WCF</option>
              <option value="Others">OTHERS</option>
            </select>
          </div>
        </div>

        <div className="md:col-span-3 flex justify-end gap-3 mt-4">
          <button
            type="button"
            className="rounded transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 text-gray-200 bg-gray-800 px-4 py-2 hover:bg-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded bg-[#e5408f] text-black px-4 py-2 font-semibold hover:bg-[#c2255c] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          >
            {uploading ? (
              <VscLoading className="animate-spin text-white text-2xl" />
            ) : (
              "Save Changes"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
