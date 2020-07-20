import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Brewery from './components/brewery/Brewery';
import BreweryState from './context/brewery/BreweryState';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import AlertState from './context/alert/AlertState';

const App = () => {
  return (
    <BreweryState>
      <AlertState>
        <Router>
          <Navbar />
          <div className='container'>
            <Alert />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/brewery/:id' component={Brewery} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </AlertState>
    </BreweryState>
  );
};

export default App;
