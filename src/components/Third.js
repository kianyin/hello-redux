import React, { Component } from 'react';
import Forth from './Forth'

class Third extends Component {
    render() {
        return (
            <div>
                third:{this.props.third}
                <Forth forth={this.props.forth} />
            </div>
        );
    }
}

export default Third;
