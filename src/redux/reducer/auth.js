import { removeItem, setItem, setLogin } from "../../utils/utils";
import types from "../types";
import auth from "@react-native-firebase/auth"
const initialState = {
    userData: {}
}

export const userStatus =  (state = initialState, action) => {

    switch (action.type) {
        case types.LOGIN: {
            const data = action.payload;
            console.log(data, "data on action login")
            return {
                userData: data
            }
        }
        case types.LOGOUT: {
            removeItem("login")
            return {
                userData: undefined
            }
        }
        default: return state
    }
}
















// import types from "../types";
// const initialState = {
//     userData: {},
// };

// export const userStatus = (state = initialState, action) => {
//     switch (action.type) {
//         case types.LOGIN: {

//             const data = action.payload
//             console.log(data, "check login");

//             return {
//                 userData: data

//             }
//         }
//         case types.LOGOUT: {

//         }
//             return state;
//     }
// }