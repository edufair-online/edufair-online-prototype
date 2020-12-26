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
const getStampDetail = (stampId) => {
  return firestore
    .collection("stamps")
    .doc(stampId)
    .get()
    .then((doc) => {
      if (doc.exists) return doc.data();
    });
};
//check if user already claims stamps
const checkStamp = async (userId, stampId) => {
  return firestore
    .collection("users")
    .doc(userId)
    .collection("stamps")
    .doc(stampId)
    .get()
    .then((doc) => doc.exists);
};

const claimStamps = async (userId, stampId, stampData) => {
  return await firestore
    .collection("users")
    .doc(userId)
    .collection("stamps")
    .doc(stampId)
    .set(stampData);
};
const getUserStamps = async (userId) => {
  return await firestore
    .collection("users")
    .doc(userId)
    .collection("stamps")
    .get()
    .then((snap) => {
      return snap.empty
        ? []
        : snap.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          });
    });
};
export {
  getUserData,
  saveUserData,
  updateUserData,
  getStampDetail,
  checkStamp,
  claimStamps,
  getUserStamps,
};
