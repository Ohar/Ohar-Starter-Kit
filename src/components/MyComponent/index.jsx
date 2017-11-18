import React, { Component } from 'react'
import './style.less'
import doAction from './../../flux/state/actions/doAction'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class MyComponent extends Component {
  constructor () {
    super()

    this.onClick = this.onClick.bind(this)
  }

  onClick () {
    this.props.doAction(this.props.bar + 1)
  }

  render () {
    return (
      <section className='MyComponent'>
        MyComponent
        {this.props.bar}
        <button onClick={this.onClick}>button</button>
      </section>
    )
  }
}

MyComponent.propTypes = {
  bar: PropTypes.number,
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(
    {
      doAction: doAction,
    },
    dispatch,
  )
}

function mapStateToProps (state, ownProps) {
  return {
    ...ownProps,
    bar: state.foo.bar,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyComponent)
