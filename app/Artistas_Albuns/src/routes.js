import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import SignIn from './pages/SignIn';

import Artistas from './pages/Artistas';
import InserirEditar from './pages/Artistas/inserirEditar';
import Profile from './pages/Profile';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          // SelectRevendedor,
        }),
        App: createSwitchNavigator({
          Artistas,
          InserirEditar,
          Profile,
        }),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      },
    ),
  );
