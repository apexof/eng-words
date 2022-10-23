import React, { FC } from 'react';
import { TWord } from '../../types';
import { Word } from '../WordItem/WordItem';
import s from './SimpleWordsList.module.scss';
import cx from 'classnames';

interface Props {
  words: TWord[];
  className?: string;
}

export const SimpleWordsList: FC<Props> = props => {
  const { words, className } = props;

  return (
    <div className={cx(s['word-list'], className)}>
      {words.map(word => (
        <Word word={word} />
      ))}
    </div>
  );
};
