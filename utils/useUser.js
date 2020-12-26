import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import firebase from "firebase/app";
import axios from "axios";
import "firebase/auth";
import initFirebase from "./initFirebase";
import {
  removeUserCookie,
  setUserCookie,
  getUserFromCookie,
} from "./userCookies";
import { mapUserData } from "./mapUserData";

initFirebase();

const useUser = () => {
  const [user, setUser] = useState();
  const router = useRouter();

  const logout = async () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        setUser(false);
        router.push("/");
      })
      .catch((e) => {
        console.error(e);
      });
  };
  const updateProfile = (userData) => {
    const user = firebase.auth().currentUser;
    if (user) {
      return user.updateProfile(userData);
    }
  };
  useEffect(() => {
    // Firebase updates the id token every hour, this
    // makes sure the react state and the cookie are
    // both kept up to date
    const cancelAuthListener = firebase
      .auth()
      .onIdTokenChanged(async (user) => {
        if (user) {
          const userData = await mapUserData(user);
          if (userData.role === "admin" || userData.role === "pic") {
            setUserCookie(userData);
            setUser(userData);
          } else {
            removeUserCookie();
            setUser(false);
          }
        } else {
          removeUserCookie();
          setUser(false);
        }
      });

    const userFromCookie = getUserFromCookie();
    if (!userFromCookie) {
      // router.push("/");
      return;
    }

    setUser(userFromCookie);
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${userFromCookie.token}`;
    return () => {
      cancelAuthListener();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { user, updateProfile, logout };
};

export { useUser };
