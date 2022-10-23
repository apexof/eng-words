import React, { FC } from 'react';
import { TWord } from '../../types';
import s from './AllCategoryList.module.scss';
import { WordsListByCategory } from '../WordsListByCategory/WordsListByCategory';

interface Props {
  words: TWord[];
}

type TAllCategories = { [key: string]: string };

export const AllCategoryList: FC<Props> = props => {
  const { words } = props;

  const allCategories: TAllCategories = words.reduce((acc, word) => {
    word.tags.forEach(tag => {
      acc[tag] = tag;
    });
    return acc;
  }, {});

  return (
    <div className={s['all-category-list']}>
      {Object.values(allCategories).map(categoryName => {
        const wordOfCurrentCat = words.filter(word => word.tags.includes(categoryName));
        return <WordsListByCategory words={wordOfCurrentCat} categoryName={categoryName} />;
      })}
    </div>
  );
};
