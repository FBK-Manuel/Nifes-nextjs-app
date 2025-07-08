"use client";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import { useState } from "react";
import { IMAGES } from "../constants/images";

import { db } from "../lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import { v4 as uuidv4 } from "uuid";
import { VscLoading } from "react-icons/vsc";
import Swal from "sweetalert2";

export default function ContactForm() {
  const [profileImage, setProfileImage] = useState<string>(IMAGES.AVATER_2);
  const [uploading, setUploading] = useState<boolean>(false);
  //   const fileInputRef = useRef<HTMLInputElement>(null);
  //   const [imageFile, setImageFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your save logic here
    setUploading(true);
    try {
      // 2️⃣ Send email via EmailJS
      await emailjs.send(
        "service_r4riw4t",
        "template_du54xpz",
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
        },
        "a8Cp8ygp9jYyndrwn"
      );
    } catch (error) {
      console.error("Error sending email:", error);
      Swal.fire({
        icon: "error",
        title: "Email Sending Failed",
        text: "There was an error sending your email. Please try again.",
      });
      setUploading(false);
      return;
    }

    try {
      await addDoc(collection(db, "contact"), {
        ...formData,
        createdAt: serverTimestamp(),
      });
      // profileImage: IMAGES.AVATER_2, // Reset to default image
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
      });
      setProfileImage(IMAGES.AVATER_2);

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Contact Form Submited Successful",
        text: "Your form has been submitted successfully.",
        showConfirmButton: false,
        timer: 5000,
      });
    } catch (error) {
      console.error("Error adding post:", error);
      console.error("Error saving registration:", error);
      Swal.fire({
        icon: "error",
        title: "Contact Form Failed",
        text: "There was an error submiting your form. Please try again.",
      });

      return;
    } finally {
      setUploading(false);
      // Reset the form and image after submission
    }
  };
  return (
    <div>
      <div className="max-w-7xl mx-auto mt-12 relative w-full aspect-[4/3]">
        <Image
          src={IMAGES.CONTACT_US}
          alt="Contact Us"
          fill
          className="rounded object-cover"
        />
      </div>

      <div className="max-w-3xl mx-auto mt-12 rounded-xl bg-white border border-gray-500 p-8 text-black shadow-lg">
        <h2 className="md:text-5xl sm:text-2xl font-semibold mb-6 text-center text-[#e5408f] hover:text-black transition duration-300 ease-in-out">
          Contact Us
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
                required
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
                required
              />
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
                required
              />
            </div>

            <div className="">
              <label className="block text-sm mb-1 text-[#3e4095]">
                Email Address
              </label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded border border-gray-400 bg-white p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm mb-1 text-[#3e4095]">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="w-full h-30 resize-none rounded border border-gray-400 bg-white p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Write your message..."
              />
            </div>
          </div>

          <div className="md:col-span-3 flex justify-end gap-3 mt-4">
            <button
              //   onClick={}
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
                "Submit"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
