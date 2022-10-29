import { NextPage } from 'next';
import React from 'react';
import { useSelector } from 'react-redux';
import { WordsList } from '../components/WordsList/WordsList';
import { AppState } from '../state';
import { AllWordsList } from '../components/AllWordsList/AllWordsList';
import s from './index.module.scss';

const WordsPage: NextPage = () => {
  const unlearnedWords = useSelector((state: AppState) => state.words.unlearnedWords);

  console.log('WordsPage render');
  return (
    <div className={s['words-page']}>
      <div className={s['words-block']}>
        <AllWordsList />
      </div>
      <div className={s['words-block']}>
        <h2>Unlearned Words</h2>
        <WordsList words={Object.values(unlearnedWords)} />
      </div>
    </div>
  );
};

export default WordsPage;
