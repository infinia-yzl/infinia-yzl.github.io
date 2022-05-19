import { atom } from 'recoil';

export { colorModeAtom };

const colorModeAtom = atom<'light' | 'dark' | null>({
  key: 'colorMode',
  default: null,
});
