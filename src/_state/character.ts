import { atom } from 'recoil';

export {
  personAtom, titlesAtom, flavorsAtom, outfitsAtom,
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
