import { Grid, Typography } from '@mui/material';
import {
  Dropdown, DropdownMulti, Item, StyleList,
} from '../_component';
import {
  persons, titles, flavors, outfits, lightings,
} from '../_constants';
import {
  personAtom, flavorsAtom, titlesAtom, outfitsAtom, stylesAtom, lightingsAtom,
} from '../_state';

export { Character };

const styles = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Makoto Shinkai',
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'WLOP',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Yoshitaka Amano',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];

function Character() {
  return (
    <>
      <Item>
        <Dropdown atom={personAtom} id="person" text="Person" values={persons} allowEmpty />
      </Item>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{
          xs: 4, sm: 8, md: 12,
        }}
      >
        {/* <Grid item xs={2} sm={4} md={4}>
    </Grid> */}
        <Grid item xs={2} sm={4} md={4}>
          <DropdownMulti atom={titlesAtom} id="titles" text="Titles" values={titles} />
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <DropdownMulti atom={flavorsAtom} id="flavor" text="Flavor" values={flavors} />
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <DropdownMulti atom={outfitsAtom} id="outfit" text="Outfit" values={outfits} />
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <DropdownMulti atom={lightingsAtom} id="lighting" text="Lighting & Temperature" values={lightings} />
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Typography variant="h5">
            Face by
          </Typography>
          <StyleList atom={stylesAtom} itemData={styles} />
          <Typography variant="h5">
            Style
          </Typography>
          <StyleList atom={stylesAtom} itemData={styles} />
        </Grid>
        {/* --stop 50? */}
      </Grid>
    </>
  );
}
