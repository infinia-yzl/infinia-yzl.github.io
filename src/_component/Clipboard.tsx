import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { IconButton, Tooltip } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { yellow } from '@mui/material/colors';
import type { IClipboard } from '../_interface';

export { Clipboard };

function Clipboard(props: IClipboard) {
  const {
    text,
    size,
    color,
    showIcon,
  } = props;

  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  const highlightStyle = open ? { color: yellow['300'] } : { };

  if (!showIcon) {
    return (
      <CopyToClipboard text={text} onCopy={handleTooltipOpen}>
        <Tooltip
          onClose={handleTooltipClose}
          open={open}
          title="Copied!"
          leaveDelay={420}
          arrow
        >
          <span style={highlightStyle}>{text}</span>
        </Tooltip>
      </CopyToClipboard>
    );
  }

  return (
    <CopyToClipboard text={text}>
      <IconButton size={size} color={color}>
        <ContentCopyIcon fontSize="small" />
      </IconButton>
    </CopyToClipboard>
  );
}
