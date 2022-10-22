import React, { FC, useState } from 'react';
import { WordType } from '../../types';
import s from './WordItem.module.scss';
import cx from 'classnames';

interface Props {
  word: WordType;
}

export const WordItem: FC<Props> = props => {
  const { word } = props;
  const [cover, setCover] = useState(true);

  const coverToggle = () => {
    setCover(cover => !cover);
  };

  return (
    <div className={s['word-item']}>
      <div className="value">{word.value}</div>&nbsp;-&nbsp;
      <div className={cx(s.translate, cover && s.cover)} onClick={coverToggle}>
        {word.translate}
      </div>
    </div>
  );
};
