import React, { Component } from 'react';
import Third from './Third'
import  connect  from '../redux/connect';

class Second extends Component {
    constructor(){
        super()
        this.state={}
    }
    plus(){
        this.props.dispatch({
            type: 'AddOne',
        })
    }

    render() {
        return (
            <div>
                second:{this.props.second}
                <button
                    onClick={this.plus.bind(this)}
                >
                    +1
                </button>
                <Third/>
            </div>
        );
    }
}

export default connect(Second);
