import {
  HomeTwoTone as HomeTwoToneIcon,
  Contactless as ContactlessIcon,
  PrecisionManufacturing as PrecisionManufacturingIcon,
} from '@mui/icons-material';

export const menuItems = [{
  key: '/',
  primary: 'Home',
  icon: <HomeTwoToneIcon />,
}, {
  key: 'pay',
  primary: 'Pay',
  icon: <ContactlessIcon />,
}, {
  key: 'prompt',
  primary: 'Prompt',
  icon: <PrecisionManufacturingIcon />,
}];
