import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { shareLinkReducer } from "./links/reducers";
import logger from 'redux-logger';
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    shareLinkStore: shareLinkReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, logger)));

