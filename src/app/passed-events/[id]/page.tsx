import { doc, getDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";
import Image from "next/image";
import { format } from "date-fns";
import { notFound } from "next/navigation";
// import { Props } from "../../types/datatypes";
import { TiArrowForward } from "react-icons/ti";

export default async function PassedEventDetailPage(props: {
  params: { id: string };
}) {
  const { id } = await props.params;

  const docRef = doc(db, "passedEvents", id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    notFound();
  }

  const data = docSnap.data();
  const movedAt = data.movedAt?.toDate() ?? new Date();

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <div className="relative w-full h-64 md:h-96 lg:h-[700px] mb-6">
        <Image
          src={data.imageUrl}
          alt={data.title}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <p className="text-xs text-gray-400 mb-2">
        Passed on {format(movedAt, "MMMM d, yyyy")}
      </p>
      <h1 className="text-2xl font-bold text-black mb-4">{data.title}</h1>
      <p className="text-[#202650] whitespace-pre-line">{data.content}</p>
      <div className="flex items-center justify-center mt-7 gap-4">
        <button
          disabled
          className="inline-block bg-[#202650] text-white px-6 py-3 rounded-lg hover:bg-[#e5408f] hover:text-black delay-150 duration-300 ease-in-out transition"
        >
          Apply Now{" "}
          <TiArrowForward className="inline ml-2 text-white hover:text-black text-3xl animate-pulse" />
        </button>
      </div>
    </main>
  );
}
