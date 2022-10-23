import { NextPage } from 'next';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { WordsList } from '../components/WordsList/WordsList';
import { AppState, useAppDispatch } from '../state';
import { addWords } from '../state/words/words.reducer';
import { TWordsList } from '../types';
import s from './index.module.scss';

const WordsPage: NextPage = () => {
  const dispatch = useAppDispatch();
  const { allWords, unlearnedWords } = useSelector((state: AppState) => state.words);

  useEffect(() => {
    fetch('data/words.json')
      .then(res => res.json())
      .then((res: TWordsList) => {
        dispatch(addWords({ items: res }));
      })
      .catch(console.error);
  }, []);

  return (
    <div className={s['words-page']}>
      <div className={s['words-block']}>
        <h2>All Words</h2>
        <WordsList words={Object.values(allWords)} />
      </div>
      <div className={s['words-block']}>
        <h2>Unlearned Words</h2>
        <WordsList words={Object.values(unlearnedWords)} />
      </div>
    </div>
  );
};

export default WordsPage;
