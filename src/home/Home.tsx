import {
  Card, CardContent, Typography,
} from '@mui/material';

export { Home };

function Home() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h2">
          Hi!H
        </Typography>
        <Typography variant="h6" gutterBottom>
          Welcome to my personal space.
        </Typography>
        <Typography>
          {
            'I\'m a software engineer based in Singapore - expanding the horizons of DeFi @CakeDeFi.'
          }
        </Typography>
        <Typography>
          My current passions include crypto, decentralized finance, web3, and gaming.
        </Typography>
        <Typography variant="body2" gutterBottom>
          Currently
          {' '}
          exploring Unreal Engine 5, metaverse & DeFi projects.
        </Typography>
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
