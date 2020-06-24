import * as React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import TodoMain from './Todo/TodoMain'
import '../styles/App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Link to="">Home</Link>
        <Route exact={true} path="/" component={TodoMain} />
      </Router>
    );
  }
}

export default App;
