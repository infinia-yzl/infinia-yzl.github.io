import { atom } from 'recoil';
import type { RecoilState } from 'recoil';

import { localStorageEffect } from '../_helper/store';

export {
  currentPromptAtom, recentPromptsAtom, promptVariationAtom,
};

const currentPromptAtom = atom<string>({
  key: 'selectedUser',
  default: '',
});

const promptVariationAtom = atom<'character' | 'landscape' | 'other' | null>({
  key: 'promptVariation',
  default: null,
});

const recentPromptsAtom: RecoilState<string[]> = atom<string[]>({
  key: 'recentPrompts',
  default: [],
  effects: [
    localStorageEffect('recentPrompts'),
  ],
});
