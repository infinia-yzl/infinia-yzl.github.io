import { atom } from 'recoil';

export { assetListAtom };

// TODO: finish implementation (create interface)
const assetListAtom = atom<any>({
  key: 'assetList',
  default: null,
});
