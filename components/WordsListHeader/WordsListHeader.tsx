import React, { FC } from 'react';
import s from './WordsListHeader.module.scss';

interface Props {
  showByCategory: boolean;
  sorted: boolean;
  setShowByCategory: (value: boolean) => void;
  setSorted: (value: boolean) => void;
}

export const WordsListHeader: FC<Props> = props => {
  const { showByCategory, setShowByCategory, setSorted, sorted } = props;

  return (
    <div className={s['words-list-header']}>
      <h3 className={s['show-type-btn']} onClick={() => setShowByCategory(!showByCategory)}>
        Layout:&nbsp;[{showByCategory ? 'By category' : 'Everything'}]
      </h3>
      <h3 className={s['sort-btn']} onClick={() => setSorted(!sorted)}>
        Sort by:&nbsp;[{sorted ? 'alphabet' : 'date'}]
      </h3>
    </div>
  );
};
