import * as admin from "firebase-admin";
const firebasePrivateKey = process.env.FIREBASE_PRIVATE_KEY;
const config = {
  credential: admin.credential.cert({
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    // https://stackoverflow.com/a/41044630/1332513
    privateKey: firebasePrivateKey.replace(/\\n/g, "\n"),
  }),
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
};
if (!admin.apps.length) {
  admin.initializeApp(config);
}
export const verifyIdToken = (token) => {
  return admin
    .auth()
    .verifyIdToken(token)
    .catch((error) => {
      throw error;
    });
};

export const db = admin.firestore();
