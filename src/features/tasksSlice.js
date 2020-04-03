/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { uniqueId } from 'lodash';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    inwork: [],
    checking: [],
    done: [],
  }, // items: {id, title, body}

  // redux toolkit take care about immutability
  reducers: {
    addTask: (state, action) => {
      const { payload: { status, title } } = action;
      state[status].push({ id: uniqueId(), title, body: '' });
    },
    updateTaskData: (state, action) => {
      const {
        payload: {
          status, title, body, index,
        },
      } = action;
      state[status][index].title = title;
      state[status][index].body = body;
    },
    moveTask: (state, action) => {
      const { payload: { source, destination } } = action;
      const card = state[source.droppableId][source.index];
      state[source.droppableId].splice([source.index], 1);
      state[destination.droppableId].splice([destination.index], 0, card);
    },
  },
});

export const { actions, reducer } = tasksSlice;
export default reducer;
