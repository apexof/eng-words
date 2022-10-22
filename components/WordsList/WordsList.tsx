import React, { FC } from 'react';
import { WordItem } from '../../components/WordItem/WordItem';
import { WordType } from '../../types';

interface Props {
  words: WordType[];
}

export const WordsList: FC<Props> = props => {
  const { words } = props;

  return (
    <div>
      {words.map(word => (
        <WordItem word={word} />
      ))}
    </div>
  );
};
