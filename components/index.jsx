import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, HashRouter } from 'react-router-dom';

import {AppContainer} from './AppContainer.jsx';
import HomeContainer from '../containers/HomeContainer.jsx';
import Login from '../containers/LoginContainer.jsx';
import DashboardContainer from './DashboardContainer.jsx';
import {Provider} from 'react-redux';
import store from '../store';

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
          <div>
            <Route exact path='/' component={HomeContainer}/>
            <Route path ='/login' component={Login}/>
            <Route path ='/patientlist' component={DashboardContainer}/>
          </div>
        </HashRouter>
    </Provider>,
    document.getElementById('app')
);

