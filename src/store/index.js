import { createLogger } from "redux-logger";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import input from "./input";

const rootReducer = combineReducers({ input });

const middleware = composeWithDevTools(applyMiddleware(createLogger({ collapsed: true })));

const store = createStore(rootReducer, middleware);

export default store;
