import type { SelectProps } from '@mui/material';
import type { RecoilState } from 'recoil';

export type { IStyleItemData, IStyleList };

interface IStyleItemData {
  img: string;
  title: string;
  author?: string;
  featured?: boolean;
}

interface IStyleList extends SelectProps {
  atom: RecoilState<string[]>;
  itemData: IStyleItemData[];
}
