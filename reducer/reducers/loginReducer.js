import actionTypes from "../../configs/actionTypes";

const initialValue = {
    user: null,
    loading: false,
    logged: false,
};

export default function loginReducer(state = initialValue, action) {
    switch (action.type) {
        case actionTypes.LOGIN_STARTED:
            return {
                ...state,
                loading: action.loading,
                logged: action.logged,
                user: action.user,
            };
        case actionTypes.LOGIN_SUCCES:
            return {
                ...state,
                loading: action.loading,
                logged: action.logged,
                user: action.user,
            };
        case actionTypes.LOGIN_FAILD:
            return {
                ...state,

                loading: action.loading,
                logged: action.logged,
                Error: action.error,
            };
        default:
            return state;
    }
}