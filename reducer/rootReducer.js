import { combineReducers } from "redux";
import registerReducer from "./reducers/registerReducer";
import loginReducer from "./reducers/loginReducer";
import loadCoursesReducer from "./reducers/loadCoursesReducer";
import addCoursesReducer from "./reducers/addCoursesReducer";

const rootReducer = combineReducers({
    register: registerReducer,
    login: loginReducer,
    courses: loadCoursesReducer,
    addCourses: addCoursesReducer,
});

export default rootReducer;