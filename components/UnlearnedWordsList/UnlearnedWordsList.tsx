import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectSortedUnlearnedWords } from '../../state/words/words.selectors';
import { WordsList } from '../WordsList/WordsList';

export const UnlearnedWordsList: FC = () => {
  const unlearnedWords = useSelector(selectSortedUnlearnedWords);

  return (
    <>
      <h2>Unlearned Words</h2>
      <WordsList words={unlearnedWords} />
    </>
  );
};
