import actionTypes from "../configs/actionTypes";
import contentful from "../helpers/contentful";
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
//---------------------------------------------------------------------------------
const LOAD_COURSES_ACTION = () => {
    return async(dispatch) => {
        dispatch({
            type: actionTypes.LOAD_COURSES_STARTED,
            loading: true,
            loaded: false,
            courses: [],
        });
        try {
            contentful
                .getEntries({
                    content_type: "cardShop",
                })
                .then((result) => {
                    dispatch({
                        type: actionTypes.LOAD_COURSES_SUCCES,
                        loading: false,
                        courses: result.items,
                        loaded: true,
                    });
                });
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
//----------------------------------------------------------------------------------
const ADD_COURSES_ACTION = (course) => {
    return async(dispatch) => {
        dispatch({
            type: actionTypes.ADD_COURSES_SUCCES,
            payload: { add: true, del: false, courses: course },
        });
    };
};
const DELETE_COURSES_ACTION = (course) => {
    return async(dispatch) => {
        dispatch({
            type: actionTypes.DELETE_COURSES_SUCCES,
            payload: { add: false, del: true, courses: course },
        });
    };
};

export {
    LOGIN_ACTION,
    LOAD_COURSES_ACTION,
    ADD_COURSES_ACTION,
    DELETE_COURSES_ACTION,
};