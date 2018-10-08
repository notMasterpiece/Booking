import React, { Component } from 'react';

import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';


import Header from './layout/Header';
import Main from './layout/Main';
import RentalDetail from './layout/rental/RentalDetail';

class App extends Component {
  render() {
    return (
        <Router>
            <div className='app'>
                <Header />
                <Route exact path='/' render={() => {return <Redirect to={'/rentals'} />} } />
                <Route exact path='/rentals' component={Main} />
                <Route path='/rental/:id' component={RentalDetail} />
            </div>
        </Router>
    );
  }
}

export default App;
