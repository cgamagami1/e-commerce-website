import { compose, legacy_createStore, applyMiddleware } from "redux";
import { rootReducer } from "./root-reducer";

export const store = legacy_createStore(rootReducer);