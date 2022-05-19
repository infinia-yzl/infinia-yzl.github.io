import { IconButtonProps } from '@mui/material';

export type { IClipboard };

interface IClipboard extends IconButtonProps {
  text: string;
  showIcon: boolean;
}
