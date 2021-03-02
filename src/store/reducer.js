import { combineReducers } from "redux";

import authReducer from "./auth";
import filesReducer from "./files";
import vehiclesReducer from "./vehicles";
import entitiesReducer from "./entities";

export default combineReducers({
  auth: authReducer,
  files: filesReducer,
  entities: entitiesReducer,
  vehicles: vehiclesReducer,
});
