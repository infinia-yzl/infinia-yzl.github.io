import { useRecoilState } from 'recoil';
import type { SelectChangeEvent, Theme } from '@mui/material';
import {
  useTheme,
  Chip, OutlinedInput,
  Box, FormControl, InputLabel, Select, MenuItem,
} from '@mui/material';

import type { IDropdownMulti } from '../_interface';

export { DropdownMulti };

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(item: string, val: readonly string[], theme: Theme) {
  return {
    fontWeight:
      val.indexOf(item) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function DropdownMulti(props: IDropdownMulti) {
  const {
    atom,
    id,
    text,
    values,
    children,
  } = props;

  const theme = useTheme();
  const [val, setVal] = useRecoilState(atom);

  const handleChange = (event: SelectChangeEvent<typeof val>) => {
    const { target: { value } } = event;
    setVal(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <Box sx={{ maxWidth: 130 }}>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id={`${id}-multi-label`}>{text}</InputLabel>
        <Select
          labelId={`${id}-multi-label`}
          id={`${id}-multi-select`}
          multiple
          value={val}
          label={text}
          onChange={handleChange}
          input={<OutlinedInput id={`${id}-multi-select-chip`} label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{
              display: 'flex', flexWrap: 'wrap', gap: 0.5,
            }}
            >
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {values.map((item) => (
            <MenuItem
              key={item}
              value={item}
              style={getStyles(item, val, theme)}
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
