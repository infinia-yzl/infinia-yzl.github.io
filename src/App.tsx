import { Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';

import './App.css';
import { Layout } from './layout';
import { Home } from './home';
import { Pay } from './pay';
import { Prompt } from './prompt';
import { getDerivedTheme } from './_style/theme';

export default App;

function App() {
  const theme = getDerivedTheme();

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="pay" element={<Pay />} />
            <Route path="prompt" element={<Prompt />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
}
