import actionTypes from "../../configs/actionTypes";

const initialValue = {
    add: false,
    courses: [],
    loading: false,
    del: false,
};

const addCoursesReducer = (state = initialValue, action) => {
    switch (action.type) {
        case actionTypes.ADD_COURSES_SUCCES:
            return {
                ...state,
                courses: state.courses.concat(action.payload.courses),
                add: action.payload.add,
                del: action.payload.del,
            };
        case actionTypes.DELETE_COURSES_SUCCES:
            return {
                ...state,
                courses: state.courses.filter(
                    (course) => course.sys.id !== action.payload.courses.sys.id
                ),
                del: action.payload.del,
                add: action.payload.add,
            };

        default:
            return state;
    }
};
export default addCoursesReducer;