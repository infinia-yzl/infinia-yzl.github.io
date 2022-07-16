import type { SelectProps } from '@mui/material';
import type { RecoilState } from 'recoil';

export type { IDropdown };

interface IDropdown extends SelectProps {
  atom: RecoilState<string>;
  id: string;
  text: string;
  values: string[];
  allowEmpty?: boolean;
}
