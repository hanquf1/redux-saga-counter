/*eslint-disable no-unused-vars*/
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import {
    increment,
    decrement,
    incrementIfOdd,
    incrementAsync,
    cancelIncrementAsync
} from '../actions/actionTypes'

class Counter extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s9 m9">
                        <div className="card teal">
                            <div className="card-content white-text">
                            <span className="card-title">
                                Value: {this.props.counter}
                            </span>
                                <p> this is a simple cancellable counter app.</p>
                                <p> you can increment, decrement, increment async, increment if value is odd, and
                                    increment after 3s. </p>
                            </div>
                        </div>
                    </div>
                </div>

                <a className="waves-effect waves-light btn" onClick={this.props.increment}>+</a>{' '}
                <a className="waves-effect waves-light btn" onClick={this.props.decrement}>-</a>{' '}
                <a className="waves-effect waves-light btn" onClick={this.props.incrementIfOdd}>
                    Increment if odd
                </a>{' '}
                <a className="waves-effect waves-light btn"
                   onClick={!this.props.countdown
                       ? () => this.props.incrementAsync(3)
                       : this.props.cancelIncrementAsync}
                   style={{color: this.props.countdown ? 'yellow' : 'white'}}>
                    {this.props.countdown ? `Cancel increment (${this.props.countdown})` : 'increment after 3s (cancellable)'}
                </a>
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
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement()),
        incrementIfOdd: () => dispatch(incrementIfOdd()),
        incrementAsync: (sec) => dispatch(incrementAsync(sec)),
        cancelIncrementAsync: () => dispatch(cancelIncrementAsync())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
