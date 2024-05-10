import Home from './screens/home/Home';
import Game from './screens/game/Game';
import Settings from './screens/settings/Settings';

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
  }
};

export default Routes;
