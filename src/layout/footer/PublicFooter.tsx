import {
  Typography,
  Grid,
  IconButton,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export { PublicFooter };

function PublicFooter() {
  return (
    <footer>
      <Typography sx={{ marginTop: 2 }}>
        <code>Made with Vite, React, React-Router, Recoil</code>
      </Typography>
      <Grid container sx={{ marginTop: 1 }}>
        <Grid item xs>
          <IconButton size="large" href="https://www.linkedin.com/in/infinia/" target="_blank" rel="noreferrer">
            <LinkedInIcon />
          </IconButton>
          <IconButton size="large" href="https://github.com/infinia-yzl" target="_blank" rel="noreferrer">
            <GitHubIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Typography variant="h6">
        explore@infinia.space
      </Typography>
    </footer>
  );
}
