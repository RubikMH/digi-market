import { combineReducers } from "redux";
import registerReducer from "./reducers/registerReducer";
import loginReducer from "./reducers/loginReducer";

const rootReducer = combineReducers({
    register: registerReducer,
    login: loginReducer,
});

export default rootReducer;