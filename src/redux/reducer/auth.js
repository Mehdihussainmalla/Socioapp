import { removeData, removeItem, setItem, setLogin } from "../../utils/utils";
import types from "../types";

const initialState = {
    userData: {},
    count: 0,
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

        case types.INCREMENT:
            let data = action.payload
            // console.log(data, "dataaaaa")
            return { ...state }

        case types.DECREMENT:
            let dataa = action.payload
            // console.log(dataa,"decre")
            return { ...state}

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