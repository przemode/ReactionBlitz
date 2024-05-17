import Home from './screens/home/Home';
import Game from './screens/game/Game';
import Settings from './screens/settings/Settings';
import Ranking from './screens/ranking/Ranking';

const Routes = {
  Home: {
    Name: 'Home',
    Screen: Home,
  },
  Game: {
    Name: 'Game',
    Screen: Game,
  },
  Settings: {
    Name: 'Settings',
    Screen: Settings,
  },
  Ranking: {
    Name: 'Ranking',
    Screen: Ranking,
  }
};

export default Routes;
