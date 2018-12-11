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

    render() {
        return (
            <div>
                second:{this.state.second}
                <Third/>
            </div>
        );
    }
}

export default Second;
