import store from "../store";
import types from "../types";
import auth from "@react-native-firebase/auth"
const { dispatch } = store;
export const loginData = (data) => {
    console.log(data, "login data from actions")
    dispatch({
        type: types.LOGIN,
        payload: data

    })
}
export const signIn = (email, password) => {
    console.log(email, password)
    let user = auth().signInWithEmailAndPassword(email, password);
    console.log(user, "user>>")
    try {
        dispatch(loginData(user))


    } catch (error) {
        console.log(error, "errror occurred")

    }



}
export const Logout = () => {
    dispatch({
        type: types.LOGOUT,
    })
}
