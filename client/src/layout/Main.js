import React, {Component} from 'react';
import PropTypes from 'prop-types';


import RentalList from './rental/RentalList';

class Main extends Component {
    render() {
        return (
            <main id="tg-main" className="tg-main tg-sectionspace tg-haslayout">
                <div className="container-fluid">
                    <div className="col-sm-12">
                        <h2>Ви можете замовити</h2>
                    </div>
                    <RentalList />
                </div>
            </main>
        );
    }
}

Main.propTypes = {};

export default Main;
