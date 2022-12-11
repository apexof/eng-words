import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TWordsList } from '../../types';

type TWordsState = {
  allWords: TWordsList;
  coverTranslate: boolean;
  showByCategory: boolean;
  sort: boolean;
  complexity: number[];
};

const initialState: TWordsState = {
  allWords: {},
  coverTranslate: true,
  showByCategory: false,
  sort: false,
  complexity: [1],
};

export const words = createSlice({
  name: 'words',
  initialState,
  reducers: {
    setComplexity: (state, action: PayloadAction<number[]>) => {
      const value = action.payload;
      // if (!state.complexity.includes(value)) {
      //   state.complexity.push(value);
      // }
      console.log('value', value);
      value.sort((a, b) => a - b);
      console.log('value', value);

      state.complexity = value;
    },
    addWords: (state, action: PayloadAction<{ items: TWordsList }>) => {
      const { items } = action.payload;

      state.allWords = items;
    },
    toggleCoverTranslate: state => {
      state.coverTranslate = !state.coverTranslate;
    },
    toggleShowByCategory: state => {
      state.showByCategory = !state.showByCategory;
    },
    toggleSort: state => {
      state.sort = !state.sort;
    },
  },
});

export const { setComplexity, toggleSort, toggleShowByCategory, toggleCoverTranslate, addWords } = words.actions;
