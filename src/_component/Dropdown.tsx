import { useRecoilState } from 'recoil';
import type { SelectChangeEvent } from '@mui/material';
import {
  Box, FormControl, InputLabel, Select, MenuItem,
} from '@mui/material';

import type { IDropdown } from '../_interface';

export { Dropdown };

/**
 * Accepts `<MenuItem>` as children; or `<Select>` children
 */
function Dropdown(props: IDropdown) {
  const {
    atom,
    id,
    text,
    values,
    allowEmpty,
    children,
  } = props;
  const [value, setValue] = useRecoilState(atom);

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };

  return (
    <Box sx={{ maxWidth: 130 }}>
      <FormControl fullWidth>
        <InputLabel id={`${id}-label`}>{text}</InputLabel>
        <Select
          labelId={`${id}-label`}
          id={`${id}-select`}
          value={value}
          label={text}
          onChange={handleChange}
        >
          {allowEmpty && (
            <MenuItem value="">
              <em>Empty</em>
            </MenuItem>
          )}
          {values.map((item) => (
            <MenuItem
              key={item}
              value={item}
            >
              {item}
            </MenuItem>
          ))}
          {children}
        </Select>
      </FormControl>
    </Box>
  );
}
