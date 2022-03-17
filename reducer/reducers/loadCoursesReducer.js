import actionTypes from "../../configs/actionTypes";

const initialValue = {
    loading: false,
    courses: [],
    loaded: false,
};

const loadCoursesReducer = (state = initialValue, action) => {
    switch (action.type) {
        case actionTypes.LOAD_COURSES_STARTED:
            return {
                ...state,
                loading: action.loading,
                loaded: action.loaded,
                courses: action.courses,
            };
        case actionTypes.LOAD_COURSES_SUCCES:
            return {
                ...state,
                loading: action.loading,
                loaded: action.loaded,
                courses: action.courses,
            };
        case actionTypes.LOAD_COURSES_FAILD:
            return {
                ...state,

                loading: action.loading,
                loaded: action.loaded,
                Error: action.error,
            };
        default:
            return state;
    }
};
export default loadCoursesReducer;