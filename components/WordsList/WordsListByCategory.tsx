import React, { FC } from 'react';
import { TWord } from '../../types';
import s from './WordsListByCategory.module.scss';
import { SimpleWordsList } from './SimpleWordsList';

interface Props {
  words: TWord[];
}

type TAllCategories = { [key: string]: string };

export const WordsListByCategory: FC<Props> = props => {
  const { words } = props;

  const allCategories: TAllCategories = words.reduce((acc, word) => {
    word.tags.forEach(tag => {
      acc[tag] = tag;
    });
    return acc;
  }, {});

  return (
    <div>
      {Object.values(allCategories).map(cat => {
        const wordOfCurrentCat = words.filter(word => word.tags.includes(cat));
        return (
          <>
            <div className={s['category-title']}>[{cat}]</div>
            <SimpleWordsList words={wordOfCurrentCat} />
          </>
        );
      })}
    </div>
  );
};
