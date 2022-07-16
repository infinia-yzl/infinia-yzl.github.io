import { atom } from 'recoil';
import type { RecoilState } from 'recoil';

import { localStorageEffect } from '../_helper/store';

export { currentPromptAtom, recentPromptsAtom };

const currentPromptAtom = atom<string>({
  key: 'selectedUser',
  default: '',
});

const recentPromptsAtom: RecoilState<string[]> = atom<string[]>({
  key: 'recentPrompts',
  default: [],
  effects: [
    localStorageEffect('recentPrompts'),
  ],
});
