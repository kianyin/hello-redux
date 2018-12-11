import React, { Component } from 'react'
import PropTypes from 'prop-types'

const connect = (WrappedComponent) => {
  class Connect extends Component {
    static contextTypes = {
      store: PropTypes.object
    }

    render () {
      const { store } = this.context
      let stateProps = store.getState()
      stateProps.dispatch=store.dispatch
      return <WrappedComponent {...stateProps}/>
    }
  }

  return Connect
}

export default connect