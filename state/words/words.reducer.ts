import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WordType } from '../../types';

type WordsState = {
  allWords: WordType[];
  unlearnedWords: {
    [key: string]: WordType;
  };
};

// const lastBarsCache: Map<string, Bar> = new Map();

const initialState: WordsState = {
  allWords: [],
  unlearnedWords: {},
};

export const words = createSlice({
  name: 'words',
  initialState,
  reducers: {
    addWords: (state, action: PayloadAction<{ items: WordType[] }>) => {
      const { items } = action.payload;

      state.allWords = items;
    },
    addWordToUnlearned: (state, action: PayloadAction<{ word: WordType }>) => {
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
