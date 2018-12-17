import { createLogger } from "redux-logger";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import display from "./display";

const rootReducer = combineReducers({ display });

const middleware = composeWithDevTools(applyMiddleware(createLogger({ collapsed: true })));

const store = createStore(rootReducer, middleware);

export default store;

export const aCF = (type, payload) => ({
  type,
  payload,
});

export const inputType = {
  NUMBER: "NUMBER",
  OPERATION: "OPERATION",
  MEMORY: "MEMORY",
  CLEAR: "CLEAR",
  EQUALS: "EQUALS",
  DOT: "DOT",
  ALL_CLEAR: "ALL_CLEAR",
  NEGATE: "NEGATE",
};
