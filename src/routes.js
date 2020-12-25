import Home from "./routes/Home";
import Eighteen from "./routes/Eighteen";
import Nineteen from "./routes/Nineteen";
import Twenty from "./routes/Twenty";
import FilmMaker from "./containers/FilmMaker";
import SoftwareEngineer from "./containers/SoftwareEngineer";
import MusicProducer from "./containers/Music";

export const routes = [
  {
    path: "*",
    component: Home,
  },
  {
    path: "/2018",
    component: Eighteen,
  },
  {
    path: "/2019",
    component: Nineteen,
  },
  {
    path: "/2020",
    component: Twenty,
  },
  {
    path: "*",
    component: null,
  },
];

export const homeRoutes = [
  {
    path: "/",
    component: SoftwareEngineer,
  },
  {
    path: "/filmmaker",
    component: FilmMaker,
  },
  {
    path: "/music",
    component: MusicProducer,
  },
];
