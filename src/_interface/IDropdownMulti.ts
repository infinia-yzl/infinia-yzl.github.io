import type { SelectProps } from '@mui/material';
import type { RecoilState } from 'recoil';

export type { IDropdownMulti };

interface IDropdownMulti extends SelectProps {
  atom: RecoilState<string[]>;
  id: string;
  text: string;
  values: string[];
}
