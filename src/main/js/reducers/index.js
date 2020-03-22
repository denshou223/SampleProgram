import { combineReducers } from "redux";

import commonReducer from "./commonReducer";
import tweetsReducer from "./tweetsReducer";
import userReducer from "./userReducer";

export default combineReducers({
  commonReducer,
  tweetsReducer,
  userReducer,
})