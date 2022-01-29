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
            }, 2000);
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
const LOAD_COURSES_ACTION = () => {
    return async(dispatch) => {
        dispatch({
            type: actionTypes.LOAD_COURSES_STARTED,
            loading: true,
            loaded: false,
            courses: {},
        });
        try {
            setTimeout(async() => {
                const { courses } = await fetchUrl({
                    url: "http://127.0.0.1:5000/courses.json",
                    method: "GET",
                });
                dispatch({
                    type: actionTypes.LOAD_COURSES_SUCCES,
                    loading: false,
                    courses: courses,
                    loaded: true,
                });
            }, 2000);
        } catch (error) {
            console.error("error", error);
            dispatch({
                type: actionTypes.LOAD_COURSES_FAILD,
                loading: false,
                loaded: false,
                error: true,
            });
        }
    };
};

export { LOGIN_ACTION, LOAD_COURSES_ACTION };