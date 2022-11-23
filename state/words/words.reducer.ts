import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TWordsList, TWord } from '../../types';

type TWordsState = {
  allWords: TWordsList;
  unlearnedWords: TWordsList;
  coverTranslate: boolean;
  showByCategory: boolean;
  sort: boolean;
};

const initialState: TWordsState = {
  allWords: {},
  unlearnedWords: {},
  coverTranslate: true,
  showByCategory: false,
  sort: false,
};

export const words = createSlice({
  name: 'words',
  initialState,
  reducers: {
    addWords: (state, action: PayloadAction<{ items: TWordsList }>) => {
      const { items } = action.payload;

      state.allWords = items;
    },
    addWordToUnlearned: (state, action: PayloadAction<{ word: TWord }>) => {
      const { word } = action.payload;

      state.unlearnedWords[word.value] = word;
    },
    removeWordFromUnlearned: (state, action: PayloadAction<{ key: string }>) => {
      const { key } = action.payload;

      delete state.unlearnedWords[key];
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

export const { toggleSort, toggleShowByCategory, toggleCoverTranslate, addWords, addWordToUnlearned, removeWordFromUnlearned } = words.actions;
