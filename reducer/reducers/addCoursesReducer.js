import actionTypes from "../../configs/actionTypes";

const initialValue = {
    add: false,
    courses: [],
    loading: false,
};

const addCoursesReducer = (state = initialValue, action) => {
    switch (action.type) {
        case actionTypes.ADD_COURSES_SUCCES:
            return {
                ...state,
                courses: state.courses.concat(action.payload.courses),
                add: action.payload.add,
            };

        default:
            return state;
    }
};
export default addCoursesReducer;