import Home from './routes/Home';
import YearInReview from './routes/YearInReview';
import Projects from './routes/Projects';
import FilmMaker from './routes/FilmMaker';
import Goals from './routes/Goals';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/projects',
    component: Projects
  },
  {
    path: '/filmmaker',
    component: FilmMaker
  },
  {
    path: '/2018',
    component: YearInReview
  },
  {
    path: '/goals',
    component: Goals
  }
];

export default routes;
