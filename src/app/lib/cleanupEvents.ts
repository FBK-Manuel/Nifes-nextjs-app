// lib/cleanupExpiredEvents.ts
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "./firebase"; // adjust this import if your firebase.ts is elsewhere

/**
 * This function checks all events in the "events" collection.
 * If an event date has passed, it moves it to "passedEvents" and deletes it from "events".
 */
export async function cleanupExpiredEvents() {
  console.log("Running cleanupExpiredEvents...");

  const now = new Date();

  // Get all documents in the "events" collection
  const snapshot = await getDocs(collection(db, "events"));

  const expiredEventPromises: Promise<void>[] = [];

  snapshot.docs.forEach((docSnap) => {
    const data = docSnap.data();

    // Make sure eventDate exists and is a Firestore Timestamp
    const eventDate = data.eventDate?.toDate?.() ?? null;

    if (!eventDate) {
      console.warn(`Event "${data.title}" has no eventDate. Skipping.`);
      return;
    }

    if (eventDate < now) {
      console.log(`Moving expired event "${data.title}"...`);

      // Move to "passedEvents"
      const movePromise = (async () => {
        await addDoc(collection(db, "passedEvents"), {
          ...data,
          movedAt: new Date(),
        });

        // Delete from "events"
        await deleteDoc(doc(db, "events", docSnap.id));
      })();

      expiredEventPromises.push(movePromise);
    }
  });

  if (expiredEventPromises.length > 0) {
    await Promise.all(expiredEventPromises);
    console.log("Expired events moved successfully.");
  } else {
    console.log("No expired events to move.");
  }
}
