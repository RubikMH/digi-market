import { combineReducers } from "redux";
import registerReducer from "./reducers/registerReducer";
import loginReducer from "./reducers/loginReducer";
import loadCourses from "./reducers/loadCoursesReducer";

const rootReducer = combineReducers({
    register: registerReducer,
    login: loginReducer,
    courses: loadCourses,
});

export default rootReducer;