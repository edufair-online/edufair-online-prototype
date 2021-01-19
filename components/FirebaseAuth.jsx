import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/app";
import "firebase/auth";
import initFirebase from "@/utils/initFirebase";
import { setUserCookie } from "@/utils/userCookies";
import { mapUserData } from "@/utils/mapUserData";
import { getUserData, saveUserData } from "@/utils/helpers/userHelpers";

// Init the Firebase app.
initFirebase();

const firebaseAuthConfig = {
  signInFlow: "popup",
  // Auth providers
  // https://github.com/firebase/firebaseui-web#configure-oauth-providers
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  signInSuccessUrl: "/",
  credentialHelper: "none",
  callbacks: {
    signInSuccessWithAuthResult: ({ user }) => {
      const successCallback = async () => {
        const userData = await mapUserData(user);
        const userDoc = await getUserData(user.uid);
        if (!userDoc) {
          delete userData.token;
          const data = {
            ...userData,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
          };
          saveUserData(user.uid, data);
        }
        setUserCookie(userData);
      };
      successCallback();
      // return false;
    },
  },
};

const FirebaseAuth = (props) => {
  return (
    <div>
      <StyledFirebaseAuth
        uiConfig={firebaseAuthConfig}
        firebaseAuth={firebase.auth()}
        {...props}
      />
    </div>
  );
};

export default FirebaseAuth;
