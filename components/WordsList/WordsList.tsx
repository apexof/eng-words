import React, { FC, useMemo, useState } from 'react';
import { TWord } from '../../types';
import { SimpleWordsList } from './SimpleWordsList';
import { WordsListHeader } from '../WordsFilter/WordsFilter';
import { AllCategoryList } from './AllCategoryList';
import { useSelector } from 'react-redux';
import { AppState } from '../../state';
import { selectSortedAllWords } from '../../state/words/words.selectors';

interface Props {
  words: TWord[];
}

export const WordsList: FC<Props> = props => {
  const { words } = props;
  const showByCategory = useSelector((state: AppState) => state.words.showByCategory);

  return showByCategory ? <AllCategoryList words={words} /> : <SimpleWordsList words={words} />;
};
