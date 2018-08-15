import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import promiseMiddleware from "redux-promise-middleware";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(promiseMiddleware()))
);

export default store;
