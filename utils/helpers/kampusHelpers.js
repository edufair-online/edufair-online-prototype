import firebase from "firebase/app";
import initFirebase from "../initFirebase";
initFirebase();
const firestore = firebase.firestore();
const kampusRef = firestore.collection("kampus");

/**
 * get all Kampus
 *
 *
 * @return{array} return collection of Kampus
 *
 */

const getAllKampus = async () => {
  const kampusDoc = await kampusRef.get();
  if (kampusDoc.empty) {
    return [];
  }

  return kampusDoc.docs.map((kampus) => {
    return { ...kampus.data(), id: kampus.id };
  });
};

/**
 * get Kampus by id
 *
 * @param{string} Kampus id
 *
 * @return{object} return a kampus
 */

const getKampus = async (kampusId) => {
  return await kampusRef
    .doc(kampusId)
    .get()
    .then((doc) => doc.data());
};

export { getAllKampus, getKampus };
