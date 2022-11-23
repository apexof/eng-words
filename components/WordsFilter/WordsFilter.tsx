import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { AppState, useAppDispatch } from '../../state';
import { toggleCoverTranslate, toggleShowByCategory, toggleSort } from '../../state/words/words.reducer';
import s from './WordsFilter.module.scss';

export const WordsFilter: FC = () => {
  const dispatch = useAppDispatch();
  const coverTranslate = useSelector((state: AppState) => state.words.coverTranslate);
  const showByCategory = useSelector((state: AppState) => state.words.showByCategory);
  const sorted = useSelector((state: AppState) => state.words.sort);

  return (
    <div className={s['words-filter']}>
      <h4 onClick={() => dispatch(toggleShowByCategory())}>Layout:&nbsp;[{showByCategory ? 'By category' : 'Everything'}]</h4>
      <h4 className={s['sort-btn']} onClick={() => dispatch(toggleSort())}>
        Sort by:&nbsp;[{sorted ? 'alphabet' : 'date'}]
      </h4>
      <h4 onClick={() => dispatch(toggleCoverTranslate())}>Cover: [{coverTranslate ? 'translate' : 'value'}]</h4>
    </div>
  );
};
