import {
  Button,
  Card,
  CardContent,
  Typography,
  Divider,
  Box,
} from '@mui/material';

export { Home };

function Home() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h2">
          Greetings!
        </Typography>
        <Typography variant="h6" gutterBottom>
          Welcome to my personal space.
        </Typography>
        <Typography>
          I&apos;m a software engineer based in Singapore
          {' '}
          - expanding the horizons of DeFi
          <Button href="https://cakedefi.com" target="_blank" rel="noreferrer">
            @CakeDeFi
          </Button>
          .
        </Typography>
        <Typography>
          My current passions include crypto, decentralized finance, web3, AI and gaming.
        </Typography>
        <Typography variant="body2" gutterBottom>
          Currently
          {' '}
          exploring AI tools like GPT &amp; Midjourney, Unreal Engine 5, metaverse
          {' '}
          &amp; DeFi projects.
        </Typography>
        <Box sx={{ m: 2 }} />
        <Divider variant="middle" />
        <Box sx={{ m: 2 }} />
        <Typography variant="h5" component="div" gutterBottom>
          Looking to collaborate?
        </Typography>
        <Typography variant="caption">
          Send me an email:
          {' '}
          <Typography variant="h6">explore@infinia.space</Typography>
        </Typography>
      </CardContent>
    </Card>
  );
}
