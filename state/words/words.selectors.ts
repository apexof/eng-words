import { createSelector } from '@reduxjs/toolkit';
import { AppState } from '..';
import { AllCategoryList } from '../../components/WordsList/AllCategoryList';
import { TWordsList } from '../../types';

export const selectUnlearnedWords = (state: AppState) => state.words.unlearnedWords;
export const selectAllWords = (state: AppState) => state.words.allWords;

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
