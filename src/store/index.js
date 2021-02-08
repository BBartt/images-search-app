import { createStore, applyMiddleware, compose, combineReducers } from "redux";

import photosReducer from "../reducers/Photos";
import thunk from "redux-thunk";

const reducers = combineReducers({
  photos: photosReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
