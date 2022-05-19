import Container from '@mui/material/Container';

import { PublicHeader } from './header';
import { PublicFooter } from './footer';
import { Content } from './content';

export { Layout };

function PublicLayout() {
  return (
    <Container maxWidth="lg">
      <PublicHeader />
      <Content />
      <PublicFooter />
    </Container>
  );
}

function Layout() {
  return PublicLayout();
}
