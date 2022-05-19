import { atom } from 'recoil';
import { IUser } from '../../_interface';

export { selectedUserAtom };

const selectedUserAtom = atom<IUser | undefined>({
  key: 'selectedUser',
  default: undefined,
});
