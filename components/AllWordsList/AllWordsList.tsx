import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../state';
import { addWords } from '../../state/words/words.reducer';
import { selectAllWords } from '../../state/words/words.selectors';
import { TWordsList } from '../../types';
import { WordsList } from '../WordsList/WordsList';

export const AllWordsList: FC = () => {
  const dispatch = useAppDispatch();
  const allWords = useSelector(selectAllWords);

  useEffect(() => {
    fetch('data/words.json')
      .then(res => res.json())
      .then((res: TWordsList) => {
        dispatch(addWords({ items: res }));
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <h2>All Words</h2>
      <WordsList words={Object.values(allWords)} />
    </>
  );
};
