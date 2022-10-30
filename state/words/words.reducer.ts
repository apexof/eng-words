import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TWordsList, TWord } from '../../types';

type TWordsState = {
  allWords: TWordsList;
  unlearnedWords: TWordsList;
  coverTranslate: boolean;
};

const initialState: TWordsState = {
  allWords: {},
  unlearnedWords: {},
  coverTranslate: true,
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
  },
});

export const { toggleCoverTranslate, addWords, addWordToUnlearned, removeWordFromUnlearned } = words.actions;
