import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/Counter.actions';

const Counter = React.createClass({
    displayName: 'Counter',

    render() {
        const { increment, decrement, count } = this.props;
        return (
            <div>
                Current counter value: {count}
                <div><button onClick={(e) => increment()}>Increment</button></div>
                <div><button onClick={(e) => decrement()}>Decrement</button></div>
            </div>
        );
    }
});

function mapStateToProps(state) {
    return {
        count: state
    };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
