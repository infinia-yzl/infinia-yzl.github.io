// Only Auth route

import { Outlet } from 'react-router-dom';
import { Item } from '../../_component';

export { Content };

function Content() {
  return (
    <main>
      <Item>
        <Outlet />
      </Item>
    </main>
  );
}
