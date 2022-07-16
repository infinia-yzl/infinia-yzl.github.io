import type { SelectProps } from '@mui/material';

export type { IDropdown };

interface IDropdown extends SelectProps {
  id: string;
  text: string;
  allowEmpty?: boolean;
}
