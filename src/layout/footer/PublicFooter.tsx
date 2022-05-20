import { Typography } from '@mui/material';

export { PublicFooter };

function PublicFooter() {
  return (
    <footer>
      <Typography sx={{ marginTop: '5em' }} variant="h6">
        <code>Made with Vite, React, React-Router, Recoil</code>
      </Typography>
      <Typography variant="h6">
        explore@infinia.space
      </Typography>
    </footer>
  );
}
