import store from "../store";
import types from "../types";
const { dispatch } = store;
export const loginData = (data) => {
    console.log(data, "login data from actions")
    dispatch({
        type: types.LOGIN,
        payload: data
    })
}
export const Logout = () => {
    dispatch({
        type: types.LOGOUT,
    })
}
