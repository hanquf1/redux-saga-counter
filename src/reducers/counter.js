import {
    RESET,
    INCREMENT,
    DECREMENT,
    DECREMENT_ASYNC,
    INCREMENT_IF_ODD,
    INCREMENT_ASYNC,
    CANCEL_INCREMENT_ASYNC,
    COUNTDOWN_TERMINATED
} from '../actions/actions'

export function countdown(state = 0, action) {
    switch (action.type) {
        case INCREMENT_ASYNC:
            console.debug('REDUCER :: countdown :: INCREMENT_ASYNC\n\n  ⬇\n\n');
            return action.value;
        case DECREMENT_ASYNC:
            console.debug('REDUCER :: countdown :: DECREMENT_ASYNC\n\n  ⬇\n\n');
            return 0;
        case COUNTDOWN_TERMINATED:
        case CANCEL_INCREMENT_ASYNC:
            console.debug('REDUCER :: countdown :: COUNTDOWN_TERMINATED');
            console.debug('REDUCER :: countdown :: CANCEL_INCREMENT_ASYNC\n\n  ⬇\n\n');
            return 0;
        default:
            return state;
    }
}

export function counter(state = 0, action) {
    switch (action.type) {
        case RESET:
            console.debug('REDUCER :: counter :: RESET\n\n');
            return 0;
        case INCREMENT:
            console.debug('REDUCER :: counter :: INCREMENT\n\n');
            return state + 1;
        case DECREMENT:
            console.debug('REDUCER :: counter :: DECREMENT\n\n');
            return state - 1;
        case INCREMENT_IF_ODD:
            console.debug('REDUCER :: counter :: INCREMENT_IF_ODD\n\n');
            return state % 2 ? state + 1 : state;
        default:
            return state;
    }
}
