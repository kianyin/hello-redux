import React, { Component } from 'react';
import Third from './Third'

class Second extends Component {
    render() {
        return (
            <div>
                second:{this.props.second}
                <Third third={this.props.third} forth={this.props.forth} />
            </div>
        );
    }
}

export default Second;
