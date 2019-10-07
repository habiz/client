import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// import all the reducers
import authReducer from "./reducers/authReducer";
import deviceReducer from "./reducers/deviceReducer";
import uiReducer from "./reducers/uiReducer";

// create the initialState

const initialState = {};

const middleware = [thunk];

//combine all the reducers
const reducers = combineReducers({
  auth: authReducer,
  device: deviceReducer,
  UI: uiReducer
});

// redux dev tools setup
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
const enhancer = composeEnhancers(applyMiddleware(...middleware));
const store = createStore(reducers, initialState, enhancer);

export default store;