import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Menu } from './components/Menu';
import './index.css';
import { Abc } from './templates/Abc';
import { App } from './templates/App/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route path="/" component={App} />
        <Route path="/abc" component={Abc} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>
);
