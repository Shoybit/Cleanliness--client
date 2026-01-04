import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";

export const AuthContext = createContext();

const API_URL = "http://localhost:3000";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  // 🔹 Save user to backend
  const saveUserToDB = async (user) => {
    if (!user?.email) return;

    await fetch(`${API_URL}/users`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name: user.displayName || "Anonymous",
        email: user.email,
      }),
    });
  };

  // 🔹 Get role from backend
  const fetchUserRole = async (email) => {
    const res = await fetch(`${API_URL}/users/role/${email}`);
    const data = await res.json();
    setRole(data.role);
  };

  // Google login
  const googleSignIn = async () => {
    setLoading(true);
    const result = await signInWithPopup(auth, googleProvider);
    await saveUserToDB(result.user);
    await fetchUserRole(result.user.email);
    return result;
  };

  // Email signup
  const createUser = async (email, password) => {
    setLoading(true);
    const result = await createUserWithEmailAndPassword(auth, email, password);
    await saveUserToDB(result.user);
    await fetchUserRole(result.user.email);
    return result;
  };

  // Email login
  const loginUser = async (email, password) => {
    setLoading(true);
    const result = await signInWithEmailAndPassword(auth, email, password);
    await fetchUserRole(result.user.email);
    return result;
  };

  const logOut = async () => {
    setLoading(true);
    setRole(null);
    await signOut(auth);
  };

  // 🔁 Auth state observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser?.email) {
        await fetchUserRole(currentUser.email);
      } else {
        setRole(null);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    role,
    loading,
    googleSignIn,
    createUser,
    loginUser,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
