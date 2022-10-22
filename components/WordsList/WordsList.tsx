import React, { FC, useState } from 'react';
import { Word } from '../../components/WordItem/WordItem';
import { TWord } from '../../types';
import s from './WordsList.module.scss';
import { Tooltip } from 'antd';

interface Props {
  words: TWord[];
  switchLayout?: boolean;
}

type TAllCategories = { [key: string]: string };

export const WordsList: FC<Props> = props => {
  const { words: unsortedWords, switchLayout } = props;
  const [showByCategory, setShowByCategory] = useState(false);
  const words = unsortedWords.sort((a, b) => a.value.localeCompare(b.value));

  const layoutSwitcher = () => {
    return (
      <Tooltip placement="topLeft" title="Click to switch Layout">
        <h3 className={s['show-type']} onClick={() => setShowByCategory(value => !value)}>
          Layout: {showByCategory ? 'By category' : 'Everything'}
        </h3>
      </Tooltip>
    );
  };

  if (showByCategory && switchLayout) {
    const allCategories: TAllCategories = words.reduce((acc, word) => {
      word.tags.forEach(tag => {
        acc[tag] = tag;
      });
      return acc;
    }, {});
    return (
      <div>
        {layoutSwitcher()}
        {Object.values(allCategories).map(cat => {
          const wordOfCurrentCat = words.filter(word => word.tags.includes(cat));
          return (
            <>
              <div className={s['category-title']}>[{cat}]</div>
              <div className={s['word-list']}>
                {wordOfCurrentCat.map(word => (
                  <Word word={word} />
                ))}
              </div>
            </>
          );
        })}
      </div>
    );
  }
  return (
    <div>
      {switchLayout && layoutSwitcher()}
      <div className={s['word-list']}>
        {words.map(word => (
          <Word word={word} />
        ))}
      </div>
    </div>
  );
};
