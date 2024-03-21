import { createContext, useContext, useEffect, useState } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../Config/firebase";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }){
    const [user, setUser] = useState("");

    function signUp(email, password){
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function login(email, password){
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logOut(){
        return signOut(auth);
    }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    }, []);

    return (
        <userAuthContext.Provider value={{ user, login, logOut, signUp }}>
            { children }
        </userAuthContext.Provider>
    );
}

export function useUserAuth(){
    return useContext(userAuthContext);
}