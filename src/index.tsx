import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Home from './App';
import * as serviceWorker from './serviceWorker';
/*HasRouter because we're note doing web request*/
import { HashRouter as Router, Route } from 'react-router-dom';
import About from './pages/About';
import Content from './pages/Content';
import Menu from './component/Menu';
import Footer from './component/Footer';


ReactDOM.render(
  <Router>
    <div>
      <Menu></Menu>
      <main>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/content" component={Content}></Route>
      </main>
      <Footer></Footer>
    </div>
  </Router>,  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
