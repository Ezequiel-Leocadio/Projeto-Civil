import {combineReducers} from 'redux';

import {toastReducer as toast} from 'react-native-redux-toast';
import auth from './auth/reducer';
import all from './all/reducer';

export default combineReducers({
  auth,
  all,
  toast,
});
