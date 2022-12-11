import React, { FC } from 'react';
import { TWord } from '../../types';
import { SimpleWordsList } from './SimpleWordsList';
import { AllCategoryList } from './AllCategoryList';
import { useSelector } from 'react-redux';
import { AppState } from '../../state';

interface Props {
  words: TWord[];
}

export const WordsList: FC<Props> = props => {
  const { words } = props;
  const showByCategory = useSelector((state: AppState) => state.words.showByCategory);

  return showByCategory ? <AllCategoryList words={words} /> : <SimpleWordsList words={words} />;
};
