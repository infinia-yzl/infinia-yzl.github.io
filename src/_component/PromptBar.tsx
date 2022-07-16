import {
  Autocomplete, Button, TextField,
} from '@mui/material';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { DeleteForever as DeleteForeverIcon } from '@mui/icons-material';

import {
  currentPromptAtom,
  recentPromptsAtom,
} from '../_state';
import { Item } from './Item';

export { PromptBar };

function PromptBar() {
  const [currentPrompt, setCurrentPrompt] = useRecoilState(currentPromptAtom);
  const [recentPrompts, setRecentPrompts] = useRecoilState(recentPromptsAtom);
  const resetRecentPrompts = useResetRecoilState(recentPromptsAtom);

  const onPromptChange = (value: string | null) => {
    if (!value) return;
    setCurrentPrompt(value);
    setRecentPrompts((recentSelections) => {
      const x = [...recentSelections].filter((email) => email !== value);
      if (x.length > 8) x.splice(8);
      return [
        value,
        ...x,
      ];
    });
  };

  return (
    <>
      <Autocomplete
        disablePortal
        freeSolo
        options={recentPrompts}
        inputValue={currentPrompt}
        onChange={
          (event, value: string | null, reason: string) => {
            onPromptChange(value);
            if (reason === 'clear') {
              setCurrentPrompt('');
            }
          }
        }
        renderInput={(params) => (
          <TextField
            autoFocus
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...params}
            label="Prompt is built here. You may paste an existing prompt here to prepopulate the customization options."
            variant="filled"
          />
        )}
      />
      <Item textAlign="right">
        <Button onClick={resetRecentPrompts} size="small">
          <DeleteForeverIcon />
          Clear all recent prompts
        </Button>
      </Item>
    </>
  );
}
