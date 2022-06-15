import store from "../store";
import types from "../types";
import auth from "@react-native-firebase/auth"
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
        const user = await auth().createUserWithEmailAndPassword(email,password);
        console.log(user, "sign up data")
        loginData(email,password);
    } catch (error) {
        console.log(error, "error occurred")

    }

}



//...............login..................//

export const loginData = (data) => {
    console.log(data, "login data from actions")
    dispatch({
        type: types.LOGIN,
        payload: data

    })
}
export const signIn = (email, password) => {
    console.log(email, password)
   
    try {
         let user = auth().signInWithEmailAndPassword(email, password);
    console.log(user, "user>>")
        dispatch(loginData(user))


    } catch (error) {
        console.log(error, "errror occurred")

    }

}
//............logout...............//
export const Logout = () => {
    dispatch({
        type: types.LOGOUT,

    })

}
export const logouthandle = async () => {

    try {
        await
            auth().signOut().then(() => {
                Logout()
            })

    } catch (error) {
        console.log(error, "error occurred")

    }

}
