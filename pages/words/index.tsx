import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { WordItem } from '../../components/WordItem/WordItem';
import { WordType } from '../../types';

const WordsPage: NextPage = () => {
  const [words, setWords] = useState<WordType[]>([]);

  useEffect(() => {
    fetch('data/words.json')
      .then(res => res.json())
      .then((words: WordType[]) => setWords(words))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>All Words</h1>
      {words.map(word => (
        <WordItem word={word} />
      ))}
    </div>
  );
};

export default WordsPage;
