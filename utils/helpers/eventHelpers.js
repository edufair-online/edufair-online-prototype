import firebase from "firebase/app";
import initFirebase from "../initFirebase";
initFirebase();
const firestore = firebase.firestore();
const kampusRef = firestore.collection("kampus");
const eventRef = (kampusId) => {
  return kampusRef.doc(kampusId).collection("events");
};

const getAllEvent = async (kampusId) => {
  return await eventRef(kampusId)
    .get()
    .then((snap) => {
      return snap.empty
        ? []
        : snap.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          });
    });
};

/**
 * get Event by id
 *
 * @param{string} Event id
 *
 * @return{object} return an event
 */

const getEvent = async (kampusId, eventId) => {
  return await eventRef(kampusId)
    .doc(eventId)
    .get()
    .then((doc) => doc.data());
};
export { getAllEvent, getEvent };
