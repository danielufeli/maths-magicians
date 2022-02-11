import { PureComponent, Fragment } from 'react';
import Calculator from './components/Calculator';
import './App.css';

class App extends PureComponent {
  render() {
    return (
      <>
        <Calculator />
      </>
    );
  }
}

export default App;
