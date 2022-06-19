import store from "../store";
import types from "../types";
import auth from "@react-native-firebase/auth"
import { showMessage } from "react-native-flash-message";
import { setLogin } from "../../utils/utils";
const { dispatch } = store;

//.................signup.................//
export const signUp = (data) => {
    console.log(data, "data from sign up");
    dispatch({
        type: types.SIGNUP,
        payload: data
    })

}
export const SignUpHandle = async (email, password) => {
    console.log(email, password, "email and password is:-")

    try {
        const user = await auth().createUserWithEmailAndPassword(email, password);
        console.log(user, "sign up data")
        signIn(email, password);
    } catch (error) {
        console.log(error, "error occurred")

    }

}



//...............login..................//

export const loginData = (data) => {
    // console.log(data, "login data from actions")
    dispatch({
        type: types.LOGIN,
        payload: data

    })
    setLogin(data)
}
export const signIn = async (email, password) => {
    console.log(email, password)

    try {
        let user = await auth().signInWithEmailAndPassword(email, password);
        alert("login sucessfully")
        // console.log(user, "user>>")
        loginData(user)


    } catch (error) {
        console.log(error, "errror occurred")
        alert(" There is no user record corresponding to this identifier")

    }

}
//............logout...............//
export const Logout = async () => {
    try {

        await auth().signOut();
        dispatch({
            type: types.LOGOUT,

        })

    } catch (error) {
        console.log(error, "cannot logout")

    }
}

