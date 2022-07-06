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
    // console.log(email, password, "email and password is:-")

    try {
        const user = await auth().createUserWithEmailAndPassword(email, password);
        // console.log(user, "sign up data")

        // alert("login sucessfully")
        signIn(email, password);
    } catch (error) {
        console.log(error, "the input fields are incorrect")

    }

}



//...............login..................//

export const loginData = (data) => {
    //  console.log(data, "login data from actions")
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
        console.log(user, "userrrrrrr")
        showMessage({
            message: "login sucessfully",
            type: "success"
        })
        loginData(user)


    } catch (error) {
        console.log(error, "errror occurred")
        showMessage({
            message: "There is no user record corresponding to this identifier",
            type: "danger"
        })
        // alert(" There is no user record corresponding to this identifier")

    }

}
//............logout...............//
export const Logout = () => {
    try {

        //  await auth().signOut();
        dispatch({
            type: types.LOGOUT,

        })

    } catch (error) {
        console.log(error, "cannot logout")

    }
}
//...............add to cart...............//
export const addToCart = (data) => {
    dispatch({
        type: types.ADD_TO_CART,
        payload: data
    })
//   console.log(data, "data to add items ")
}

//............increment........//
export const Increment = (data) => {
    console.log(data, "increment")
    dispatch({
        type: types.INCREMENT,
        payload: data
    })
}

//........decrement........//
export const Decrement = (data) => {
    console.log(data, "decrement")
    dispatch({
        type: types.DECREMENT,
        payload: data
    })
}

//...........delete item.........//
// export const deleteItem=(id)=>{
//     console.log(id,"id is>>>>>")
//     dispatch({
//         type:types.DELETE_ITEM,
//         payload:id
//     })

// }
