import React, { FC, useState } from 'react';
import { TWord } from '../../types';
import { SimpleWordsList } from '../WordsList/SimpleWordsList';
import s from './WordsListByCategory.module.scss';

interface Props {
  words: TWord[];
  categoryName: string;
}

export const WordsListByCategory: FC<Props> = props => {
  const [isOpen, setIsOpen] = useState(true);
  const { words, categoryName } = props;

  return (
    <div className={s['word-list-by-category']}>
      <div onClick={() => setIsOpen(!isOpen)} className={s['category-header']}>
        <div className={s['show-btn']}>{isOpen ? '-' : '+'}</div>
        <div className={s['category-title']}>[{categoryName}]</div>
      </div>

      {isOpen && <SimpleWordsList className={s.infinite} words={words} />}
    </div>
  );
};
