import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import MainContainer from './template/MainContainer';
import PageOne from './page/PageOne';
import PageTwo from './page/PageTwo';
import PageThree from './page/PageThree';
import PageFour from './page/PageFour';

var routes = (
  <Router history={browserHistory}>
    <Route path='/' component={MainContainer}>
      <IndexRoute component={PageOne}/>
      <Route path='1'component={PageOne}/>
      <Route path='2'component={PageTwo}/>
      <Route path='3'component={PageThree}/>
      <Route path='4'component={PageFour}/>
    </Route>
  </Router>
)

ReactDOM.render(routes, document.getElementById('app'));
