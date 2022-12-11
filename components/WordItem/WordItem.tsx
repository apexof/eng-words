import React, { FC, useState } from 'react';
import s from './WordItem.module.scss';
import cx from 'classnames';
import { AppState } from '../../state';
import { useSelector } from 'react-redux';
import { TWord } from '../../types';

interface Props {
  word: TWord;
}

export const Word: FC<Props> = props => {
  const { word } = props;
  const [cover, setCover] = useState(true);
  const coverTranslate = useSelector((state: AppState) => state.words.coverTranslate);

  return (
    <div className={s['word-item']}>
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
