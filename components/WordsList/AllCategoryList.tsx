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
  const wordsWithoutCategory = words.filter(word => !word.tags.length);
  return (
    <div className={s['all-category-list']}>
      {allCategories.reduce((acc: JSX.Element[], categoryName) => {
        const wordOfCurrentCat = words.filter(word => word.tags.includes(categoryName));
        if (wordOfCurrentCat.length) {
          acc.push(<WordsListByCategory key={categoryName} words={wordOfCurrentCat} categoryName={categoryName} />);
        }
        return acc;
      }, [])}
      <WordsListByCategory words={wordsWithoutCategory} categoryName="without category" />
    </div>
  );
};
