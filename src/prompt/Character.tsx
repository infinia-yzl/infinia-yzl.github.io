import { Dropdown, DropdownMulti } from '../_component';
import {
  personAtom, flavorsAtom, titlesAtom, outfitsAtom,
} from '../_state';

export { Character };

const persons = [
  'Boy',
  'Man',

  'Girl',
  'Woman',
];

const titles = [
  'Lord',
  'Duke',
  'Baron',
  'Count',
  'Emperor',
  'King',
  'Prince',
  'Priest',

  'Lady',
  'Duchess',
  'Baroness',
  'Countess',
  'Empress',
  'Queen',
  'Princess',
  'Priestess',

  'Noble',
  'Barbarian',
  'Warrior',
  'Wizard',
  'Witch',
  'Astronaut',
  'Hunter',
  'Pilot',
];

const flavors = [
  'African',
  'Asian',
  'Japanese',
  'Chinese',
  'Indian',
  'Greek',
  'Roman',
  'Latin',
  'Mexican',
  'American',
  'European',
  'Persian',
  'Arabian',
  'Dragonkin',
  'Orc',
  'Elf',
];

const outfits = [
  'singlet',
  'hoodie',
  'jacket',
  't-shirt',
  'suit',
  'dress',

  'top hat',
  'hat',
  'glasses',
  'spectacles',
  'shades',
  'sunglasses',
  'mask',
  'facemask',
  'tie',
  'bowtie',

  'formal',
  'casual',
  'business',
  'techwear',
];

function Character() {
  return (
    <>
      <Dropdown atom={personAtom} id="person" text="Person" values={persons} allowEmpty />
      <DropdownMulti atom={titlesAtom} id="titles" text="Titles" values={titles} />
      <DropdownMulti atom={flavorsAtom} id="flavor" text="Flavor" values={flavors} />
      <DropdownMulti atom={outfitsAtom} id="outfit" text="Outfit" values={outfits} />
    </>
  );
}
