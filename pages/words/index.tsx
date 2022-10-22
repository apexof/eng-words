import { NextPage } from 'next';
import React, { useEffect } from 'react';
import { addWords } from '../../state/words/words.reducer';
import { useSelector } from 'react-redux';
import { AppState, useAppDispatch } from '../../state';
import s from './index.module.scss';
import { TWordsList } from '../../types';
import { WordsList } from '../../components/WordsList/WordsList';

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

  const unCatWords = Object.values(allWords).filter(word => word.tags.length === 0);

  return (
    <div className={s['words-page']}>
      <div className={s['words-block']}>
        <h2>All Words</h2>
        <WordsList switchLayout words={Object.values(allWords)} />
      </div>
      <div className={s['words-block']}>
        <h2>Unlearned Words</h2>
        <WordsList words={Object.values(unlearnedWords)} />
      </div>
      {/* <div className={s['words-block']}>
        <h2>Words Without Сategory </h2>
        <WordsList words={unCatWords} />
      </div> */}
    </div>
  );
};

export default WordsPage;
