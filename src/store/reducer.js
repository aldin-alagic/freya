import { combineReducers } from "redux";

import authReducer from "./auth";
import vehiclesReducer from "./vehicles";
import entitiesReducer from "./entities";

export default combineReducers({
  auth: authReducer,
  entities: entitiesReducer,
  vehicles: vehiclesReducer,
});
