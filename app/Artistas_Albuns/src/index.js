import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';
import './config/reactotronConfig';
import {Toast} from 'react-native-redux-toast';
import {store, persistor} from './store';
import App from './App';

const Index = () => {
  return (
    <Provider store={store}>
      <Toast
        messageStyle={{
          color: 'white',
          textAlign: 'center',
          fontWeight: 'bold',
        }}
      />
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="light-content" backgroundColor="#34495e" />
        <App />
      </PersistGate>
    </Provider>
  );
};

export default Index;
