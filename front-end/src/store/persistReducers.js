import storage from 'redux-persist/es/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persisteReducer = persistReducer(
    {
      key: 'FRONT_END_BANDAS',
      storage,
      whitelist: ['auth'],
    },
    reducers
  );
  return persisteReducer;
};
