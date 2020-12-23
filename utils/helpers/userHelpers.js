import firebase from "firebase/app";
import initFirebase from "../initFirebase";
initFirebase();
const firestore = firebase.firestore();

const getUserData = async (userId) => {
  const usersRef = firestore.collection("users");
  const doc = await usersRef.doc(userId).get();
  if (doc.exists) {
    return doc.data();
  }
};

export { getUserData };
