import React, { createContext, useState } from "react";
import auth from "@react-native-firebase/auth";
import { Alert } from "react-native";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import { showMessage } from "react-native-flash-message";



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
                googleLogin: async () => {
                    try {

                        const { idToken } = await GoogleSignin.signIn();
                        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
                        await auth().signInWithCredential(googleCredential);
                    } catch (error) {
                        console.log("error in goolge login")

                    }
                },
                facebookLogin: async () => {
                    try {
                        const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

                        if (result.isCancelled) {
                            throw 'User cancelled the login process';
                        }
                        const data = await AccessToken.getCurrentAccessToken();

                        if (!data) {
                            throw 'Something went wrong obtaining access token';
                        }
                        const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);


                        await auth().signInWithCredential(facebookCredential);
                    } catch (error) {
                        console.log("error occurred during facebook login", error)

                    }

                },
                register: async (email, password) => {
                    try {
                        await auth().createUserWithEmailAndPassword(email, password);
                    } catch (error) {
                        console.log(error)

                    }
                },
                forgetPassword: async (email) => {
                    try {
                        if (email=="")
                        await auth().sendPasswordResetEmail(email)
                        showMessage({
                            message: "message sent sucessfully to the mail",
                            type: "success",
                            color: "yellow"

                        })

                        return true

                    } catch (error) {
                        showMessage({
                            message: "An email address must be provided",
                            type: "danger",
                                                    

                        })
                        console.log(error, "An email address must be provided ")
                        return false
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