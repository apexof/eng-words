import React, { FC, useState } from 'react';
import s from './WordItem.module.scss';
import cx from 'classnames';
import { AppState, useAppDispatch } from '../../state';
import { addWordToUnlearned, removeWordFromUnlearned } from '../../state/words/words.reducer';
import { useSelector } from 'react-redux';
import { TWord } from '../../types';
import { selectUnlearnedWords } from '../../state/words/words.selectors';
import App from 'next/app';

interface Props {
  word: TWord;
}

export const Word: FC<Props> = props => {
  const { word } = props;
  const [cover, setCover] = useState(true);
  const unlearnedWords = useSelector(selectUnlearnedWords);
  const coverTranslate = useSelector((state: AppState) => state.words.coverTranslate);
  const d = useAppDispatch();

  const addIcon = () => {
    return (
      <span className={cx(s['add-icon'], s.icon)} onClick={() => d(addWordToUnlearned({ word }))}>
        +
      </span>
    );
  };

  const removeIcon = () => {
    return (
      <div className={cx(s['remove-icon'], s.icon)} onClick={() => d(removeWordFromUnlearned({ key: word.value }))}>
        -
      </div>
    );
  };

  const isUnlearned = unlearnedWords[word.value];

  return (
    <div className={s['word-item']}>
      {isUnlearned ? removeIcon() : addIcon()}
      <div
        className={cx(s.value, cover && !coverTranslate && s.cover, !coverTranslate && s.coverable)}
        onClick={() => {
          !coverTranslate && setCover(!cover);
        }}
      >
        {word.value}
      </div>
      &nbsp;-&nbsp;
      <div
        className={cx(s.translate, cover && coverTranslate && s.cover, coverTranslate && s.coverable)}
        onClick={() => {
          coverTranslate && setCover(!cover);
        }}
      >
        {word.translate}
      </div>
    </div>
  );
};
