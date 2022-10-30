import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { AppState, useAppDispatch } from '../../state';
import { toggleCoverTranslate } from '../../state/words/words.reducer';
import s from './WordsListHeader.module.scss';

interface Props {
  showByCategory: boolean;
  sorted: boolean;
  setShowByCategory: (value: boolean) => void;
  setSorted: (value: boolean) => void;
}

export const WordsListHeader: FC<Props> = props => {
  const { showByCategory, setShowByCategory, setSorted, sorted } = props;
  const dispatch = useAppDispatch();
  const coverTranslate = useSelector((state: AppState) => state.words.coverTranslate);

  return (
    <div className={s['words-list-header']}>
      <h4 onClick={() => setShowByCategory(!showByCategory)}>Layout:&nbsp;[{showByCategory ? 'By category' : 'Everything'}]</h4>
      <h4 className={s['sort-btn']} onClick={() => setSorted(!sorted)}>
        Sort by:&nbsp;[{sorted ? 'alphabet' : 'date'}]
      </h4>
      <h4 onClick={() => dispatch(toggleCoverTranslate())}>Cover: [{coverTranslate ? 'translate' : 'value'}]</h4>
    </div>
  );
};
