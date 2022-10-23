import React, { FC, useMemo, useState } from 'react';
import { TWord } from '../../types';
import { SimpleWordsList } from './SimpleWordsList';
import { WordsListHeader } from '../WordsListHeader/WordsListHeader';
import { AllCategoryList } from './AllCategoryList';

interface Props {
  words: TWord[];
}

export const WordsList: FC<Props> = props => {
  const { words } = props;
  const [showByCategory, setShowByCategory] = useState(false);
  const [sorted, setSorted] = useState(false);

  const sortedWords = useMemo(() => {
    return !sorted ? words : [...words].sort((a, b) => a.value.localeCompare(b.value));
  }, [sorted, words]);

  return (
    <div>
      <WordsListHeader showByCategory={showByCategory} sorted={sorted} setShowByCategory={setShowByCategory} setSorted={setSorted} />
      {showByCategory ? <AllCategoryList words={sortedWords} /> : <SimpleWordsList words={sortedWords} />}
    </div>
  );
};
