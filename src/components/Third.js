import React, { Component } from 'react';
import Forth from './Forth';
import  connect  from '../redux/connect';

class Third extends Component {
    constructor(){
        super()
        this.state={}
    }
    plus(){
        this.props.dispatch({
            type: 'AddTen',
        })
    }

    render() {
        return (
            <div>
                third:{this.props.third}
                <button
                    onClick={this.plus.bind(this)}
                >
                    +10
                </button>
                <Forth />
            </div>
        );
    }
}

export default connect(Third);

