import { useMemo } from 'react';
import { useRecoilState } from 'recoil';
import {
  Button, Card, CardContent,
} from '@mui/material';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';

import { promptVariationAtom } from '../_state';
import { Item, PromptBar } from '../_component';
import { Character, Variation } from '.';

export { Prompt };

function Prompt() {
  const [promptVariation, setPromptVariation] = useRecoilState(promptVariationAtom);
  const contentToRender = useMemo(() => {
    if (promptVariation === 'character') {
      return <Character />;
    }
    if (promptVariation === 'landscape') {
      return null;
    }
    if (promptVariation === 'other') {
      return null;
    }
    return <Variation />;
  }, [promptVariation]);

  return (
    <Card>
      <PromptBar />
      <CardContent>
        {promptVariation && (
          <Item textAlign="left">
            <Button variant="outlined" onClick={() => setPromptVariation(null)}>
              <ArrowBackIcon />
              Go Back
            </Button>
          </Item>
        )}
        <Item>
          {contentToRender}
        </Item>
      </CardContent>
    </Card>
  );
}
