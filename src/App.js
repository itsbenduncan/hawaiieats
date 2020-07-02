import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Welcome from './components/welcome/Welcome';
import About from './components/about/About';
import Documentary from './components/documentary/Documentary';
import Talk from './components/talk/Talk';
import Resources from './components/resources/Resources';

class App extends Component {

  constructor() {
    super();
    this.state = {
      route: 'About'
    }
  }

  onRouteChange = (route) => {
    this.setState({route: route});
  }

  render() {
    return (
          <Router >
            <div className="nav-container">
              <div className="logo-container">
                <Link className="logo-name" to="/">Hawai`i Eats Sustainable</Link>
              </div>
              <nav>
                  <ul className="nav-list">
                      <li className="nav-list-item">
                        <Link to="/About">About</Link>
                      </li>
                      <li className="nav-list-item">
                        <Link to="/Resources">Resources</Link>
                      </li>
                      <li className="nav-list-item">
                        <Link to="/Documentary">Documentary</Link>
                      </li>
                      <li className="nav-list-item">
                        {/* <button className="nav-button-style"> */}
                          <Link to="/Talk">Talk</Link>
                        {/* </button> */}
                      </li>
                  </ul>
              </nav>
            </div>

            <Switch>
              <Route path="/Resources">
                <Resources />
              </Route>
              <Route path="/Documentary">
                <Documentary />
              </Route>
              <Route path="/Talk">
                <Talk />
              </Route>
              <Route path="/About">
                <About />
              </Route>
              <Route path="/">
                <Welcome />
              </Route>
            </Switch>
        </Router>
    );
  }
}
export default App;