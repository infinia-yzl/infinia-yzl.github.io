import { atom } from 'recoil';

export { navMenuOpenAtom };

const navMenuOpenAtom = atom<boolean>({
  key: 'navMenuOpen',
  default: true,
});
