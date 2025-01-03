import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase_config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create new account
    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // signin with account
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


     // update user profile
     const updateUserProfile = (updateData) => {
        return updateProfile(auth.currentUser, updateData);
    }

    // logout
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    // observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('this is current user', currentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    }, [])


    const authInfo = {
        user,
        setUser,
        loading,
        createNewUser,
        signIn,
        logOut,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;