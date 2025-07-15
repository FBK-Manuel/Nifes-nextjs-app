import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../lib/firebase";
import PassedEventsPage from "../components/PassedEventsPage";
import { BsTrash3Fill } from "react-icons/bs";

export default async function PassedEvents() {
  const q = query(collection(db, "passedEvents"), orderBy("eventDate", "desc"));
  const snapshot = await getDocs(q);

  const events = snapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      title: data.title,
      content: data.content,
      imageUrl: data.imageUrl,
      check: data.check,
      createdAt: data.createdAt?.toDate() ?? new Date(),
      movedAt: data.movedAt?.toDate() ?? new Date(),
      eventDate: data.eventDate?.toDate() ?? new Date(),
    };
  });

  return (
    <main className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-6">
          <BsTrash3Fill className="text-black text-3xl mb-2" />
          <p className="text-gray-600">No passed events found.</p>
        </div>
      ) : (
        events.map((event) => <PassedEventsPage key={event.id} {...event} />)
      )}
    </main>
  );
}

// "use client";

// import { movePastedEvents } from "../lib/movePassedEvents";

// export default function MovePastEventsPage() {
//   const handleMove = async () => {
//     try {
//       await movePastedEvents();
//       alert("Past events moved successfully.");
//     } catch (error) {
//       console.error("Error moving events:", error);
//       alert("Error moving events. Check console.");
//     }
//   };

//   return (
//     <div className="max-w-xl mx-auto p-8">
//       <h1 className="text-xl font-bold mb-4">Move Past Events</h1>
//       <button
//         onClick={handleMove}
//         className="bg-blue-600 text-white px-4 py-2 rounded"
//       >
//         Move Past Events
//       </button>
//     </div>
//   );
// }
