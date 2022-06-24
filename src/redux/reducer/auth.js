import { removeData, removeItem, setItem, setLogin } from "../../utils/utils";
import types from "../types";
import auth from "@react-native-firebase/auth"
const initialState = {
    userData: {},
    products: [],
    total: 0,
}

export const userStatus = (state = initialState, action) => {

    switch (action.type) {
        case types.LOGIN: {
            const data = action.payload;
            console.log(data, "data on action login")
            return {
                userData: data
            }
        }
        case types.SIGNUP: {
            return {
                ...state
            }
        }
        case types.LOGOUT:
            removeData().then((res) => {
                console.log(res, "res from reducer>>")
                return { ...state.userData, userData: res }
            })
            return { ...state.userData, userData: undefined }

        case types.ADD_TO_CART:

            const data = action.payload
            console.log(data, "dataaaa>>>>")
            return { ...state, products: data }

        case types.INCREMENT:
            let dataa = action.payload
            console.log(dataa, "dataaaaa")
            return { ...state, total: dataa + 1 }

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