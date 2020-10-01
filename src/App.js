import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
import Navbar from './Navbar';
import NotFoundPage from './pages/NotFoundPage';


class App extends Component {
  render (){
    return (
      <Router>
      <div className="App">
        <Navbar />
        <div id="page-body">
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/about" component={AboutPage}  />
            <Route path="/articles-list" component={ArticlesListPage}  />
            <Route path="/article/:name" component={ArticlePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
      </Router>

    );
  }
}

export default App;
