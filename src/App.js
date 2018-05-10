import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import Home from './containers/Home';
import History from './containers/History';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Header />

        <Route exact path="/" component={Home} />
        <Route path="/history-browser" component={History} />
      </div>
    </Router>
  );
};

export default App;
