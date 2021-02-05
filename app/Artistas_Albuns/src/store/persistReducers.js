import storage from 'redux-persist/es/storage';
import {persistReducer} from 'redux-persist';

export default (reducers) => {
  const persisteReducer = persistReducer(
    {
      key: 'Artista_Albuns',
      storage,
      whitelist: ['auth', 'all'],
    },
    reducers,
  );
  return persisteReducer;
};
