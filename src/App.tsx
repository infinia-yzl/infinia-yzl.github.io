import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

const Home = lazy(() => import('./views/pages/Home'));
const About = lazy(() => import('./views/pages/About'));

class App extends React.Component {
  state = {
    isReady: false,
  }

  render() {
    // const { isReady } = this.state;
    // if (!isReady) {
    //   return (
    //     <div className="full-window flex-center">
    //       {/* <Spinner></Spinner> */}
    //     </div>
    //   );
    // }
    return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
          </Switch>
        </Suspense>
      </Router>
    );
  }
}

export default App;
