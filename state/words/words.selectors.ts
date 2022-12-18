import { createSelector } from '@reduxjs/toolkit';
import { AppState } from '..';
import { TWord, TWordsList } from '../../types';

export const selectAllWords = (state: AppState) => state.words.allWords;
export const selectWordsSort = (state: AppState) => state.words.sort;
export const selectWordsComplexity = (state: AppState) => state.words.complexity;

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

export const selectAllFilteredWords = createSelector([selectAllWords, selectWordsComplexity], (words: TWordsList, complexity: number[]) => {
  if (!complexity.length) {
    return Object.values(words);
  }
  return Object.values(words).filter(word => {
    return complexity.includes(word.complexity);
  });
});

const sortFunc = (a, b) => a.value.localeCompare(b.value);

export const selectSortedAllWords = createSelector([selectAllFilteredWords, selectWordsSort], (words: TWord[], sorted: boolean) => {
  return !sorted ? words : [...words].sort(sortFunc);
});
