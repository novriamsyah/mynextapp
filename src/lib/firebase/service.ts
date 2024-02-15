import { collection, getDocs, getFirestore } from "firebase/firestore";
import firebase_app from "./init";

const firestore = getFirestore(firebase_app);

export async function retrieveData(collectionName: string) {
    const snapshot = await getDocs(collection(firestore, collectionName));


    const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));

    return data;
}