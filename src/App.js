import { PureComponent, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Calculator from './components/Calculator';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import Quote from './pages/Quote';
import './App.css';

class App extends PureComponent {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route
            path="/calculator"
            component={Calculator}
          />
          <Route exact path="/" component={Home} />
          <Route path="/qoute" component={Quote} />
        </Switch>
      </>
    );
  }
}

export default App;
