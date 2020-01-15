import Home from './routes/Home';
import Eighteen from './routes/Eighteen';
import Nineteen from './routes/Nineteen';
import Projects from './routes/Projects';
import FilmMaker from './routes/FilmMaker';

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
    component: Eighteen
  },
  {
    path: '/2019',
    component: Nineteen
  }
];

export default routes;
