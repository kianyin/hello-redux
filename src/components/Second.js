import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Third from './Third'

class Second extends Component {
    static contextTypes = {
        second: PropTypes.number,
    }
    render() {
        return (
            <div>
                second:{this.context.second}
                <Third/>
            </div>
        );
    }
}

export default Second;
