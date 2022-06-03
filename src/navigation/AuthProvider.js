import React, { createContext, useState } from "react";
import auth from "@react-native-firebase/auth";


export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    // console.log("children",children)
    const [user, setUser] = useState(null);
    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login: async (email, password) => {
                    try {
                        await auth().signInWithEmailAndPassword(email, password);
                    } catch (error) {
                        console.log(error, "error occurred at auth proviider")

                    }
                },
                register: async (email, password) => {
                    try {
                        await auth().createUserWithEmailAndPassword(email, password);
                    } catch (error) {
                        alert("error occurred",error)
                        console.log(error)

                    }
                },
                logout: async () => {
                    try {
                        await auth().signOut();
                    } catch (error) {
                        console.log(error)
                    }
                }

            }}>

            {children}
        </AuthContext.Provider>
    )
}