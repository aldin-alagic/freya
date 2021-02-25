import { combineReducers } from "redux";

import solutionsReducer from "./solutions";
import issuesReducer from "./issues";

export default combineReducers({
  solutions: solutionsReducer,
  issues: issuesReducer,
});
