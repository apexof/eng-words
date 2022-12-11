import { createSelector } from '@reduxjs/toolkit';
import { AppState } from '..';
import { TWord, TWordsList } from '../../types';

export const selectUnlearnedWords = (state: AppState) => state.words.unlearnedWords;
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

export const selectAllFilteredWords = createSelector([selectAllWords, selectWordsComplexity], (words: TWordsList, complexity: number) => {
  return Object.values(words).filter(word => word.сomplexity >= complexity);
});

export const selectUnlearnedFilteredWords = createSelector([selectUnlearnedWords, selectWordsComplexity], (words: TWordsList, complexity: number) => {
  return Object.values(words).filter(word => word.сomplexity >= complexity);
});

const sortFunc = (a, b) => a.value.localeCompare(b.value);

export const selectSortedUnlearnedWords = createSelector([selectUnlearnedFilteredWords, selectWordsSort], (words: TWord[], sorted: boolean) => {
  return !sorted ? words : [...words].sort(sortFunc);
});

export const selectSortedAllWords = createSelector([selectAllFilteredWords, selectWordsSort], (words: TWord[], sorted: boolean) => {
  return !sorted ? words : [...words].sort(sortFunc);
});
