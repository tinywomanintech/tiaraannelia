import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from '../pages/About';
import Blog from '../pages/Blog';
import Contacts from '../pages/Contacts';
import Homepage from '../pages/Homepage';
import Projects from '../pages/Projects';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/tiaraannelia" exact>
          <Homepage />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/projects" exact>
          <Projects />
        </Route>
        <Route path="/blog" exact>
          <Blog />
        </Route>
        <Route path="/contacts" exact>
          <Contacts />
        </Route>
      </Switch>
    </Router>
  );
}
