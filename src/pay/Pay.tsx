import {
  Card,
  CardContent,
  Chip,
  Tooltip,
  Typography,
} from '@mui/material';
import { Clipboard } from '../_component/Clipboard';

export { Pay };

function Pay() {
  return (
    <Card>
      <CardContent>
        <Typography variant="body1" gutterBottom>
          Preferred payment method:
        </Typography>
        <Typography variant="h4">
          <Chip
            label="CRYPTO"
            color="primary"
            sx={{
              marginRight: 1, marginTop: 2, marginBottom: 2,
            }}
          />
          <Tooltip title="Solana SPL Network">
            <span>Solana ($USDC)</span>
          </Tooltip>
        </Typography>
        <div>
          <Typography variant="button" gutterBottom>
            - TO -
          </Typography>
          <Typography gutterBottom>
            <code>
              <Clipboard text="payinfinia.sol" showIcon={false} />
            </code>
          </Typography>
          <Typography variant="button" gutterBottom>
            - OR -
          </Typography>
          <Typography>
            <code>
              <Clipboard text="BC6VUqd5upm84kbm3UKWxyM9P8Rqd2jW9tatQkQTMEzw" showIcon={false} />
            </code>
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}
