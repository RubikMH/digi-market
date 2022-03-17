import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";
import rootReducer from "../reducer/rootReducer";

const composeEnhancers = composeWithDevTools({
    name: "COURSES",
});

const createMyStore = () => {
    const store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};

export default createMyStore;