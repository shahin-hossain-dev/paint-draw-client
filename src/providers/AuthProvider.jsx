import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateCurrentUser,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // console.log(user);

  // crate user with email & password

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // user & password login

  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google login
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // github login
  const githubLogin = () => {
    return signInWithPopup(auth, githubProvider);
  };

  // update Profile
  const updateUserProfile = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName,
      photoURL,
    });
  };

  const logout = () => {
    return signOut(auth);
  };

  // on auth state change observer

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      return () => {
        unsubscribed();
      };
    });
  }, []);

  const authInfo = {
    user,
    googleLogin,
    logout,
    githubLogin,
    createUser,
    userLogin,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
