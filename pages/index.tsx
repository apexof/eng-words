import { NextPage } from 'next';
import React from 'react';
import { AllWordsList } from '../components/AllWordsList/AllWordsList';
import s from './index.module.scss';
import { UnlearnedWordsList } from '../components/UnlearnedWordsList/UnlearnedWordsList';
import { WordsFilter } from '../components/WordsFilter/WordsFilter';

const WordsPage: NextPage = () => {
  return (
    <div className={s['words-page']}>
      <WordsFilter />
      <div className={s['words-blocks']}>
        <div className={s['words-block']}>
          <AllWordsList />
        </div>
        <div className={s['words-block']}>
          <UnlearnedWordsList />
        </div>
      </div>
    </div>
  );
};

export default WordsPage;
