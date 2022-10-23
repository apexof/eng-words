import React, { FC } from 'react';
import { TWord } from '../../types';
import { Word } from '../WordItem/WordItem';
import s from './SimpleWordsList.module.scss';

interface Props {
  words: TWord[];
}

export const SimpleWordsList: FC<Props> = props => {
  const { words } = props;

  return (
    <div className={s['word-list']}>
      {words.map(word => (
        <Word word={word} />
      ))}
    </div>
  );
};
