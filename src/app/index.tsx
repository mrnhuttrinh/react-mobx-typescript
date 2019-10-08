import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { Router, Route, Switch } from 'react-router';
import { Root } from 'app/containers/Root';
import { MessagesApp } from 'app/containers/MessagesApp';
import { TodoApp } from 'app/containers/TodoApp';

// render react DOM
export const App = hot(({ history }) => (
  <Root>
    <Router history={history}>
      <Switch>
        <Route path="/todo" component={TodoApp} />
        <Route path="/" component={MessagesApp} />
      </Switch>
    </Router>
  </Root>
));
