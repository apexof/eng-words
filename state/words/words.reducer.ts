import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TWordsList, TWord } from '../../types';

type TWordsState = {
  allWords: TWordsList;
  unlearnedWords: TWordsList;
};

const initialState: TWordsState = {
  allWords: {},
  unlearnedWords: {},
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
  },
});

export const { addWords, addWordToUnlearned, removeWordFromUnlearned } = words.actions;
