import { createSlice } from '@reduxjs/toolkit';

export const words = createSlice({
  name: 'words',
  initialState: {
    allWords: [],
  },
  reducers: {
    addWords: (state, action) => {
      state.allWords = action.payload.items;
    },
  },
});

export const { addWords } = words.actions;
