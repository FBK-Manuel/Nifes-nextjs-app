import Link from "next/link";
import ImageSlides from "./components/ImageSlides";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { IoArrowRedoSharp } from "react-icons/io5";
export default function Home() {
  return (
    <div>
      <ImageSlides />
      {/* welcome address about the retreat */}
      <div className="py-12">
        <h1 className="md:text-5xl sm:text-2xl font-bold text-center mb-6">
          Present NIFES Leadership Camping Retreat
        </h1>
        <p className="text-center text-gray-700 max-w-2xl mx-auto">
          Join us for a transformative experience filled with spiritual growth,
          fellowship, and community. Our retreat offers a unique opportunity to
          connect with God and fellow believers in a serene environment.
        </p>
      </div>
      <div className="py-12 bg-gray-200">
        <h1 className="font-bold md:text-3xl sm:text-xl text-center">
          Featuring Activities
        </h1>

        <div className="max-w-4xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <p className="flex items-center justify-center">
            <IoArrowRedoSharp className="inline mr-2 text-2xl text-[#e5408f]" />
            High Praise Music
          </p>
          <p className="flex items-center justify-center">
            <IoArrowRedoSharp className="inline mr-2 text-2xl text-[#e5408f]" />
            Spiritual Growth
          </p>
          <p className="flex items-center justify-center">
            <IoArrowRedoSharp className="inline mr-2 text-2xl text-[#e5408f]" />
            Team Building
          </p>
          <p className="flex items-center justify-center">
            <IoArrowRedoSharp className="inline mr-2 text-2xl text-[#e5408f]" />
            Intensive Worship
          </p>
          <p className="flex items-center justify-center">
            <IoArrowRedoSharp className="inline mr-2 text-2xl text-[#e5408f]" />
            Bible Studies
          </p>
          <p className="flex items-center justify-center">
            <IoArrowRedoSharp className="inline mr-2 text-2xl text-[#e5408f]" />
            Intensive Prayer
          </p>
          <p className="flex items-center justify-center">
            <IoArrowRedoSharp className="inline mr-2 text-2xl text-[#e5408f]" />
            Bible Debate
          </p>
          <p className="flex items-center justify-center">
            <IoArrowRedoSharp className="inline mr-2 text-2xl text-[#e5408f]" />
            Seminar Workshop
          </p>
          <p className="flex items-center justify-center">
            <IoArrowRedoSharp className="inline mr-2 text-2xl text-[#e5408f]" />
            Praise Day...
          </p>
        </div>
      </div>
      <div className="mt-8 text-center">
        <Link
          href="/register"
          className="inline-block bg-[#e5408f] text-white px-6 py-3 rounded-lg hover:bg-[#1f1218] transition-colors"
        >
          Register Now For Free{" "}
          <MdOutlineDoubleArrow className="inline ml-2 text-white" />
        </Link>
      </div>

      {/* now vision and mission statement */}
      <div className="py-12">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 sm:grid-cols-1 gap-8">
          {/* Vision Section */}
          <div className="flex flex-col items-center">
            <h1 className="text-5xl font-bold text-center mb-6 border-b-4 border-[#e5408f]">
              Our Vision
            </h1>
            <p className="text-center text-gray-700 max-w-2xl">
              To be a movement of Christ-like students in Nigeria’s tertiary
              institutions transforming the campus, and society upon graduation.
            </p>
          </div>

          {/* Mission Section */}
          <div className="flex flex-col items-center">
            <h1 className="text-5xl font-bold text-center mb-6 border-b-4 border-[#e5408f]">
              Our Mission
            </h1>
            <p className="text-center text-gray-700 max-w-2xl">
              NIFES exists to reach out to students through evangelism and
              discipleship training, to mobilize them upon graduation to impact
              the Campus, Church, and Society with godly values.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
