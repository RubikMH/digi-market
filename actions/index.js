import actionTypes from "../configs/actionTypes";
import fetchUrl from "../utils/fetchUrl";

const LOGIN_ACTION = () => {
    return async(dispatch) => {
        dispatch({
            type: actionTypes.LOGIN_STARTED,
            logged: false,
            loading: true,
            user: {},
        });
        try {
            setTimeout(async() => {
                const { user } = await fetchUrl({
                    url: "http://127.0.0.1:5000/login.json",
                    method: "GET",
                });
                dispatch({
                    type: actionTypes.LOGIN_SUCCES,
                    logged: true,
                    loading: false,
                    user: user,
                });
            }, 1000);
        } catch (error) {
            console.log("error", error);
            dispatch({
                type: actionTypes.LOGIN_FAILD,
                logged: false,
                loading: false,
                error: true,
            });
        }
    };
};

export { LOGIN_ACTION };