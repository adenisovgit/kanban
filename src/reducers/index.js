import { combineReducers } from "redux";

import tasksReducer, { actions as tasksActions } from "../features/tasksSlice";

export default combineReducers({
  tasks: tasksReducer,
});

export const actions = {
  ...tasksActions,
};
