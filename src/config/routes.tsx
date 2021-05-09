import { lazy } from 'react';

const Home = lazy(() => import('../views/pages/Home'));
const About = lazy(() => import('../views/pages/About'));

export default {
    Home,
    About,
}
