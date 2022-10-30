import React, { FC } from 'react';
import s from './AllCategoryList.module.scss';
import { WordsListByCategory } from '../WordsListByCategory/WordsListByCategory';
import { useSelector } from 'react-redux';
import { selectAllCategories } from '../../state/words/words.selectors';
import { TWord } from '../../types';

interface Props {
  words: TWord[];
}

export const AllCategoryList: FC<Props> = props => {
  const { words } = props;
  const allCategories = useSelector(selectAllCategories);

  return (
    <div className={s['all-category-list']}>
      {allCategories.map(categoryName => {
        const wordOfCurrentCat = words.filter(word => word.tags.includes(categoryName));

        return <WordsListByCategory key={categoryName} words={wordOfCurrentCat} categoryName={categoryName} />;
      })}
    </div>
  );
};
