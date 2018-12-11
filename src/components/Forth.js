import React, { Component } from 'react';
import  connect  from '../redux/connect';

class Forth extends Component {
    constructor(){
        super()
        this.state={}
    }
    plus(){
        this.props.dispatch({
            type: 'AddHunreds',
        })
    }

    render() {
        return (
            <div>
                forth:{this.props.forth}
                <button
                    onClick={this.plus.bind(this)}
                >
                    +100
                </button>
            </div>
        );
    }
}

export default connect((state)=> ({forth:state.forth}))(Forth);