import { useRecoilState } from 'recoil';
import { Masonry } from '@mui/lab';
import {
  Typography, Card, CardActionArea, CardMedia, CardContent,
} from '@mui/material';

import { promptVariationAtom } from '../_state';

export { Variation };

function Variation() {
  const [, setPromptVariation] = useRecoilState(promptVariationAtom);
  return (
    <>
      <Typography variant="h4" gutterBottom>
        What would you like to generate?
      </Typography>
      <Masonry columns={3} spacing={2}>
        <Card variant="outlined">
          <CardActionArea onClick={() => setPromptVariation('character')}>
            <CardMedia
              component="img"
              image="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/963b1112-28b8-412b-890f-129201ebdf56/df914uj-312e59f0-523d-4eb4-8926-1eb9ac970943.png/v1/fill/w_1280,h_1280,q_80,strp/young_boy_ez_by_infiniaspace_df914uj-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzk2M2IxMTEyLTI4YjgtNDEyYi04OTBmLTEyOTIwMWViZGY1NlwvZGY5MTR1ai0zMTJlNTlmMC01MjNkLTRlYjQtODkyNi0xZWI5YWM5NzA5NDMucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.cp5OD-e6l94yaEdaaKDt-GJSzGft8ziME_DpGHjtKh4"
              alt="character portrait"
            />
            <CardContent>
              <Typography variant="body1" gutterBottom>
                Character
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card variant="outlined">
          <CardActionArea onClick={() => setPromptVariation('landscape')}>
            <CardMedia
              component="img"
              image="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/963b1112-28b8-412b-890f-129201ebdf56/df9c95h-dd7ce40e-2bc0-4e88-b237-5c94c979d398.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk2M2IxMTEyLTI4YjgtNDEyYi04OTBmLTEyOTIwMWViZGY1NlwvZGY5Yzk1aC1kZDdjZTQwZS0yYmMwLTRlODgtYjIzNy01Yzk0Yzk3OWQzOTgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.iKuzFWV9s28zfMpd6iEaYCf6e4oou5PSytJW-8aGl6A"
              alt="environment art"
            />
            <CardContent>
              <Typography variant="body1" gutterBottom>
                Landscape or environment
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card variant="outlined">
          <CardActionArea onClick={() => setPromptVariation('other')}>
            <CardMedia
              component="img"
              image="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/963b1112-28b8-412b-890f-129201ebdf56/df9c55z-eb8ee536-c2ea-405f-b586-9c0514992f24.png/v1/fill/w_1280,h_1280,q_80,strp/cosmic_beast_by_infiniaspace_df9c55z-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzk2M2IxMTEyLTI4YjgtNDEyYi04OTBmLTEyOTIwMWViZGY1NlwvZGY5YzU1ei1lYjhlZTUzNi1jMmVhLTQwNWYtYjU4Ni05YzA1MTQ5OTJmMjQucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.05-23FDccX3b51qvl2vdsEEjKfcOMPg3sh8tVUF9dpc"
              alt="other art"
            />
            <CardContent>
              <Typography variant="body1" gutterBottom>
                Other
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Masonry>
    </>
  );
}
