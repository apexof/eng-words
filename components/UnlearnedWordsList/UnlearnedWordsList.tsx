import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectUnlearnedWords } from '../../state/words/words.selectors';
import { WordsList } from '../WordsList/WordsList';

export const UnlearnedWordsList: FC = () => {
  const unlearnedWords = useSelector(selectUnlearnedWords);

  return (
    <>
      <h2>Unlearned Words</h2>
      <WordsList words={Object.values(unlearnedWords)} />
    </>
  );
};
