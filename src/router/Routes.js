import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/tiaraannelia" exact>
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
}
