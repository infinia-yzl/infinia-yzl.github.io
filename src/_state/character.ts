import { atom } from 'recoil';

export {
  personAtom, titlesAtom, flavorsAtom, outfitsAtom, lightingsAtom, stylesAtom,
};

const personAtom = atom<string>({
  key: 'person',
  default: '',
});

const titlesAtom = atom<string[]>({
  key: 'titles',
  default: [],
});

const flavorsAtom = atom<string[]>({
  key: 'flavor',
  default: [],
});

const outfitsAtom = atom<string[]>({
  key: 'outfits',
  default: [],
});

const lightingsAtom = atom<string[]>({
  key: 'lightings',
  default: [],
});

const stylesAtom = atom<string[]>({
  key: 'styles',
  default: [],
});
