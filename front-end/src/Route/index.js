import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '../pages/Login';
import Artista from '../pages/Artista';
import ArtistaInserirEditar from '../pages/Artista/inserirEditar';

export default function Routes() {
  return (
    <Switch>
      <Route isPrivate path="/" exact component={Artista} />

      <Route path="/login" component={Login} />
      <Route isPrivate path="/artista" component={Artista} />
      <Route
        isPrivate
        path="/artista-inserir"
        component={ArtistaInserirEditar}
      />
      <Route
        isPrivate
        path="/artista-editar/:id"
        component={ArtistaInserirEditar}
      />
    </Switch>
  );
}
