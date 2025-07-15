import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../lib/firebase";

import UpcomingEventsTable from "../components/UpcomingEventsTable";
import { BsTrash3Fill } from "react-icons/bs";
import { cleanupExpiredEvents } from "../lib/cleanupEvents";

export default async function EventsPage() {
  await cleanupExpiredEvents(); // Clean up expired events before rendering
  const q = query(collection(db, "events"), orderBy("createdAt", "desc"));
  const querySnapshot = await getDocs(q);

  const events = querySnapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      title: data.title,
      content: data.content,
      imageUrl: data.imageUrl,
      check: data.check, // <-- make sure you have thi
      createdAt: data.createdAt?.toDate() ?? new Date(),
      eventDate: data.eventDate?.toDate() ?? new Date(), // <-- make sure you have this
    };
  });

  return (
    <main className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-6">
          <BsTrash3Fill className="text-black text-3xl mb-2" />
          <p className="text-gray-600">No upcoming events found.</p>
        </div>
      ) : (
        events.map((event) => <UpcomingEventsTable key={event.id} {...event} />)
      )}
    </main>
  );
}
