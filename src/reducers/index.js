import { combineReducers } from "redux";

import counterReducer from "./counter";
import pingReducer from "./pingReducer";
import fetchUserReducer from "./fetchUserReducer";

export const rootReducer = combineReducers({
  counter: counterReducer,
  pingPong: pingReducer,
  currentUser: fetchUserReducer,
});
