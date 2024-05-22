import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "@redux-devtools/extension"
import {thunk} from "redux-thunk"
import userReducer from "./userReducer";
import objectReducer from "./objectReducer";

const rootReducer = combineReducers({
    user: userReducer,
    objects: objectReducer
})
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))