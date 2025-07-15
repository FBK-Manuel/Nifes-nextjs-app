import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "./firebase";

export async function movePastedEvents() {
  const snapshot = await getDocs(collection(db, "events"));
  const now = new Date();

  const promises = snapshot.docs.map(async (eventDoc) => {
    const data = eventDoc.data();

    // Check if event date has passed
    const eventDate = data.eventDate?.toDate?.() ?? new Date(); // make sure you save eventDate as Firestore Timestamp

    if (eventDate < now) {
      console.log(`Moving event "${data.title}" to passedEvents...`);

      // Add to passedEvents
      await addDoc(collection(db, "passedEvents"), {
        ...data,
        movedAt: new Date(),
      });

      // Delete from events
      await deleteDoc(doc(db, "events", eventDoc.id));
    }
  });

  await Promise.all(promises);
  console.log("Move completed.");
}
