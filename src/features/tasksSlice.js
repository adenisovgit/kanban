import { createSlice } from '@reduxjs/toolkit';

import { uniqueId } from 'lodash';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [], // items: {id, status: ('inwork'|'done'|'checking'), title, body}
  reducers: {
    addTask: (state, action) => {
      const { payload: task } = action;
      return [...state, { ...task, id: uniqueId(), body: '' }];
    },
    updateTask: (state, action) => {
      const { payload: task } = action;
      const filteredState = state.filter((t) => t.id !== action.payload.id);
      return [...filteredState, task];
    },
  },
});

export const { actions, reducer } = tasksSlice;
export default reducer;
