import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Third from './Third'

class Second extends Component {
    constructor(){
        super()
        this.state={}
    }
    static contextTypes = {
        store: PropTypes.object
    }
    componentDidMount() {
        const { store } = this.context
        this._updateState()
    }
    _updateState() {
        const { store } = this.context;
        const state = store.getState();
        this.setState(state)
    }
    plus(){
        const { store } = this.context;
        store.dispatch({
            type: 'AddOne',
        })
    }

    render() {
        return (
            <div>
                second:{this.state.second}
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

export default Second;
