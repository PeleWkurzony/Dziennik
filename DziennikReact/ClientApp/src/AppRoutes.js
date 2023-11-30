import { Dziennik } from "./components/Dziennik";
import { Dodaj } from "./components/Form/Dodaj";

const AppRoutes = [
  {
    index: true,
    element: <Dziennik />
  },
  {
    path: '/dodaj',
    element: <Dodaj />
  }
];

export default AppRoutes;
