import { db } from "../firebase";
import {
	collection,
	query,
	doc,
	addDoc,
	getDocs,
	updateDoc,
	deleteDoc,
} from "firebase/firestore";

export const serverCalls = {
	get: async () => {
		const q = query(collection(db, "cars"));
		const querySnapshot = await getDocs(q);
		let carsArray: any = [];
		querySnapshot.forEach((doc) => {
			// doc.data() is never undefined for query doc snapshots
			// console.log(doc.id, " => ", doc.data());
			carsArray.push({ ...doc.data().data, id: doc.id });
		});
        // console.log(carsArray);
        return carsArray;
	},

	create: async (data: any) => {
		const response = await addDoc(collection(db, "cars"), {
			data,
			completed: false,
		});
		// console.log( response);

		return response;
	},

	update: async (id: string, data: {}) => {

		const response = await updateDoc(doc(db, "cars", id), { data });

		// console.log(response);
	},

	delete: async (id: string) => {
		const response = await deleteDoc(doc(db, "cars", id));
		// console.log(response);
	},
};
