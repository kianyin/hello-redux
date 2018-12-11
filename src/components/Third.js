import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Forth from './Forth'

class Third extends Component {
    static contextTypes = {
        third: PropTypes.number,
    }
    render() {
        return (
            <div>
                third:{this.context.third}
                <Forth />
            </div>
        );
    }
}

export default Third;
