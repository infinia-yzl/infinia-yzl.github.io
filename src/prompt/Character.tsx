import { MenuItem } from '@mui/material';
import { Dropdown } from '../_component';

export { Character };

function Character() {
  return (
    <>
      <Dropdown id="person" text="Person" allowEmpty>
        <MenuItem value="boy">Boy</MenuItem>
        <MenuItem value="girl">Girl</MenuItem>
        <MenuItem value="man">Man</MenuItem>
        <MenuItem value="woman">Woman</MenuItem>
      </Dropdown>
      <Dropdown id="titles" text="Titles" allowEmpty>
        <MenuItem value="lord">Lord</MenuItem>
        <MenuItem value="lady">Lady</MenuItem>
        <MenuItem value="duke">Duke</MenuItem>
        <MenuItem value="duchess">Duchess</MenuItem>
      </Dropdown>
      <Dropdown id="race" text="Race" allowEmpty>
        <MenuItem value="asian">Asian</MenuItem>
        <MenuItem value="japanese">Japanese</MenuItem>
        <MenuItem value="chinese">Chinese</MenuItem>
        <MenuItem value="indian">Indian</MenuItem>
        <MenuItem value="american">American</MenuItem>
        <MenuItem value="european">European</MenuItem>
        <MenuItem value="dragonkin">Dragonkin</MenuItem>
        <MenuItem value="orc">Orc</MenuItem>
        <MenuItem value="elf">Elf</MenuItem>
      </Dropdown>
    </>
  );
}
