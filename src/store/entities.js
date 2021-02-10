import { combineReducers } from "redux";

import solutionsReducer from "./solutions";

export default combineReducers({
  solutions: solutionsReducer,
});
