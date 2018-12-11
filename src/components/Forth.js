import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Forth extends Component {
    static contextTypes = {
        forth: PropTypes.number,
    }

    render() {
        return (
            <div>
                forth:{this.context.forth}
            </div>
        );
    }
}

export default Forth;