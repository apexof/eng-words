import { createAction } from '@reduxjs/toolkit';
import { WordType } from '../../types';

const addWords = createAction<{ items: WordType[] }>('words/addWords');
