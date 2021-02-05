import React from 'react';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Router, BrowserRouter } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './config/reactotronConfig';

import history from './services/history';
import Routes from './Route';
import { store, persistor } from './store';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router history={history}>
        <BrowserRouter>
          <ToastContainer style={{ zIndex: 99999 }} autoClose={5000} />
          <Routes />
        </BrowserRouter>
      </Router>
    </PersistGate>
  </Provider>
);

export default App;
