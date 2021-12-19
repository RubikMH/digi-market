import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducer/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancers = composeWithDevTools({
    Name: "shop",
});

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;