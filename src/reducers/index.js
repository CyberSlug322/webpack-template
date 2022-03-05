import { applyMiddleware, combineReducers, createStore } from "redux";
import repoReducer from "./repoReducer.js";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers( {
    repos: repoReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))