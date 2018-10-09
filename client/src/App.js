import React, { Component } from 'react';

import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';


import Header from './layout/Header';
import Main from './layout/Main';
import RentalDetail from './layout/rental/RentalDetail';

//redux
import {Provider} from 'react-redux';
import store from './store/store';

//style
import 'bootstrap/dist/css/bootstrap.css';
import 'material-design-icons/iconfont/material-icons.css';
import './css/main.css';
import './css/color.css';
import './App.css';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <Router>
                <div className='app'>
                    <Header />
                    <Route exact path='/' render={() => <Redirect to='/rentals' />} />
                    <Route exact path='/rentals' component={Main} />
                    <Route path='/rental/:id' component={RentalDetail} />
                </div>
            </Router>
        </Provider>
    );
  }
}

export default App;
