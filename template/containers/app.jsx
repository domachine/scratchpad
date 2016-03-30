import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Root from './root.jsx';

export default function App() {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Root} />
    </Router>
  );
}
