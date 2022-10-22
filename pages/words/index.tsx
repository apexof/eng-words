import { NextPage } from 'next';
import React, { useEffect } from 'react';
import { WordItem } from '../../components/WordItem/WordItem';
import { addWords } from '../../state/words/words.reducer';
import { WordType } from '../../types';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppState } from '../../state';

const WordsPage: NextPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { allWords } = useSelector((state: AppState) => state.words);

  useEffect(() => {
    fetch('data/words.json')
      .then(res => res.json())
      .then((res: WordType[]) => {
        dispatch(addWords({ items: res }));
      })
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>All Words</h1>
      {allWords.map(word => (
        <WordItem word={word} />
      ))}
    </div>
  );
};

export default WordsPage;
