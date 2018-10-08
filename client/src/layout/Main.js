import React, {Component} from 'react';
import PropTypes from 'prop-types';


import RentalList from './rental/RentalList';

class Main extends Component {
    render() {
        return (
            <main id="tg-main" className="tg-main tg-sectionspace tg-haslayout">
                <div className="container-fluid">
                    <h1>Ви можете замовити</h1>
                    <RentalList />
                </div>
            </main>
        );
    }
}

Main.propTypes = {};

export default Main;
