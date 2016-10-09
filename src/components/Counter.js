/*eslint-disable no-unused-vars*/
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import {
    reset,
    increment,
    incrementAsync,
    cancelIncrementAsync,
    decrement,
    decrementAsync,
    incrementIfOdd
} from '../actions/actions'

class Counter extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 center">
                        <div className="card teal">
                            <div className="card-content white-text">
                                <span className="card-title" style={{color:'yellow'}}>
                                    Value: {this.props.counter}
                                </span>
                                <p> this is a simple counter.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col s12 center">
                        <a className="waves-effect waves-light btn" onClick={() => this.props.decrementAsync(1)}>
                            Decrement after 1s (uncancellable)
                        </a>{' '}
                        <a className="waves-effect waves-light btn"
                           onClick={!this.props.countdown
                               ? () => this.props.incrementAsync(3)
                               : this.props.cancelIncrementAsync}
                           style={{color: this.props.countdown ? 'yellow' : 'white'}}>
                            {this.props.countdown ? `Cancel increment (${this.props.countdown})` : `increment after 3s (cancellable)`}
                        </a>
                    </div>
                </div>

                <div className="row">
                    <div className="col s12 center">

                        <a className="waves-effect waves-light btn" onClick={this.props.decrement}>Decrement</a>{' '}
                        <a className="waves-effect waves-light btn" onClick={this.props.reset}>Reset</a>{' '}
                        <a className="waves-effect waves-light btn" onClick={this.props.increment}>Increment</a>{' '}
                        <a className="waves-effect waves-light btn" onClick={this.props.incrementIfOdd}>
                            Increment if odd
                        </a>{' '}
                    </div>
                </div>
            </div>
        );
    }
}

Counter.propTypes = {
    counter: PropTypes.number.isRequired,
    countdown: PropTypes.number.isRequired
};

let mapStateToProps = (state) => {
    return {
        counter: state.counter,
        countdown: state.countdown
    };
};

let mapDispatchToProps = (dispatch) => {
    return ({
        reset: () => dispatch(reset()),
        increment: () => dispatch(increment()),
        incrementAsync: (sec) => dispatch(incrementAsync(sec)),
        cancelIncrementAsync: () => dispatch(cancelIncrementAsync()),
        decrement: () => dispatch(decrement()),
        decrementAsync: (sec) => dispatch(decrementAsync(sec)),
        incrementIfOdd: () => dispatch(incrementIfOdd())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
