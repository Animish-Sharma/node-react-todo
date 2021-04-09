import React from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import TodoHome from './containers/TodoHome';
import TodoDetail from './containers/TodoDetail';
import TodoUpdate from './containers/TodoUpdate';
import TodoCreate from './containers/TodoCreate';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={TodoHome} />
        <Route exact path="/create" component={TodoCreate}/>
        <Route exact path="/:id" component={TodoDetail}/>
        <Route exact path="/:id/update" component={TodoUpdate} />
      </Switch>
    </Router>
  );
}

export default App;
