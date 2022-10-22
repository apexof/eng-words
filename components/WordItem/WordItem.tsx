import React, { FC, useState } from 'react';
import s from './WordItem.module.scss';
import cx from 'classnames';
import { AppState, useAppDispatch } from '../../state';
import { addWordToUnlearned, removeWordFromUnlearned } from '../../state/words/words.reducer';
import { useSelector } from 'react-redux';
import { TWord } from '../../types';
import { Tooltip } from 'antd';

interface Props {
  word: TWord;
}

export const Word: FC<Props> = props => {
  const { word } = props;
  const [cover, setCover] = useState(true);
  const { unlearnedWords } = useSelector((state: AppState) => state.words);
  const d = useAppDispatch();

  const coverToggle = () => {
    setCover(cover => !cover);
  };

  const addIcon = () => {
    return (
      <Tooltip placement="topLeft" title="Add to unlearned words">
        <span className={cx(s['add-icon'], s.icon)} onClick={() => d(addWordToUnlearned({ word }))}>
          +
        </span>
      </Tooltip>
    );
  };

  const removeIcon = () => {
    return (
      <Tooltip placement="topLeft" title="Remove from unlearned words">
        <div className={cx(s['remove-icon'], s.icon)} onClick={() => d(removeWordFromUnlearned({ key: word.value }))}>
          -
        </div>
      </Tooltip>
    );
  };

  const isUnlearned = unlearnedWords[word.value];

  const translateJsx = () => {
    return (
      <div className={cx(s.translate, cover && s.cover)} onClick={coverToggle}>
        {word.translate}
      </div>
    );
  };

  return (
    <div className={s['word-item']}>
      {isUnlearned ? removeIcon() : addIcon()}
      <div className="value">{word.value}</div>&nbsp;-&nbsp;
      {cover ? (
        <Tooltip placement="topLeft" title={'Click for discover'}>
          {translateJsx()}
        </Tooltip>
      ) : (
        translateJsx()
      )}
    </div>
  );
};
