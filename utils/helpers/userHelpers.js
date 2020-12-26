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

const saveUserData = async (userId, userData) => {
  await firestore
    .collection("users")
    .doc(userId)
    .set({
      ...userData,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
};
const updateUserData = async (userId, userData) => {
  await firestore
    .collection("users")
    .doc(userId)
    .update({
      ...userData,
      // createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
};
export { getUserData, saveUserData, updateUserData };
