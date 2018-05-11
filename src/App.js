import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import Header from './shared/Header';
import Home from './containers/home/Home';
import History from './containers/history/History';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />

        <main className="main">
          <Route exact path="/" component={Home} />
          <Route path="/history" component={History} />
        </main>
      </div>
    </Router>
  );
};

export default App;
