import Home from './routes/Home';
import YearInReview from './routes/YearInReview';
import Developer from './routes/Developer';
import FilmMaker from './routes/FilmMaker';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/developer',
    component: Developer
  },
  {
    path: '/filmmaker',
    component: FilmMaker
  },
  {
    path: '/2018',
    component: YearInReview
  }
];

export default routes;
