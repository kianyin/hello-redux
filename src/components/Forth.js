import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Forth extends Component {
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
        store.subscribe(() => this._updateState())
    }
    _updateState() {
        const { store } = this.context;
        const state = store.getState();
        this.setState(state)
    }
    plus(){
        const { store } = this.context;
        store.dispatch({
            type: 'AddHunreds',
        })
    }

    render() {
        return (
            <div>
                forth:{this.state.forth}
                <button
                    onClick={this.plus.bind(this)}
                >
                    +100
                </button>
            </div>
        );
    }
}

export default Forth;