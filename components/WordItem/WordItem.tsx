import React, { FC, useState } from 'react';
import { WordType } from '../../types';
import s from './WordItem.module.scss';
import cx from 'classnames';
import { AppState, useAppDispatch } from '../../state';
import { addWordToUnlearned, removeWordFromUnlearned } from '../../state/words/words.reducer';
import { useSelector } from 'react-redux';
interface Props {
  word: WordType;
}

export const WordItem: FC<Props> = props => {
  const { word } = props;
  const [cover, setCover] = useState(true);
  const { unlearnedWords } = useSelector((state: AppState) => state.words);
  const d = useAppDispatch();

  const coverToggle = () => {
    setCover(cover => !cover);
  };

  const addIcon = () => {
    return (
      <div className={cx(s['add-icon'], s.icon)} onClick={() => d(addWordToUnlearned({ word }))}>
        +
      </div>
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
      <div className="value">{word.value}</div>&nbsp;-&nbsp;
      <div className={cx(s.translate, cover && s.cover)} onClick={coverToggle}>
        {word.translate}
      </div>
    </div>
  );
};
