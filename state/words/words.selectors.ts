import { createSelector } from '@reduxjs/toolkit';
import { AppState } from '..';
import { TWord, TWordsList } from '../../types';

export const selectUnlearnedWords = (state: AppState) => state.words.unlearnedWords;
export const selectAllWords = (state: AppState) => state.words.allWords;
export const selectWordsSort = (state: AppState) => state.words.sort;

export const selectAllWordsFromCategory = (category: string) => {
  return createSelector(selectAllWords, (words: TWordsList) => {
    return Object.values(words).filter(word => word.tags.includes(category));
  });
};

type TAllCategories = { [key: string]: string };

export const selectAllCategories = createSelector(selectAllWords, (words: TWordsList) => {
  const allCategories: TAllCategories = Object.values(words).reduce((acc, word) => {
    word.tags.forEach(tag => {
      acc[tag] = tag;
    });
    return acc;
  }, {});

  return Object.values(allCategories);
});

const sortFunc = (a, b) => a.value.localeCompare(b.value);

export const selectSortedUnlearnedWords = createSelector([selectUnlearnedWords, selectWordsSort], (words: TWordsList, sorted: boolean) => {
  return !sorted ? Object.values(words) : [...Object.values(words)].sort(sortFunc);
});

export const selectSortedAllWords = createSelector([selectAllWords, selectWordsSort], (words: TWordsList, sorted: boolean) => {
  return !sorted ? Object.values(words) : [...Object.values(words)].sort(sortFunc);
});
