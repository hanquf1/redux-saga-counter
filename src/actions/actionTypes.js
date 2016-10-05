
// Action types
export const INCREMENT = 'INCREMENT';
export function increment() {
    return({
        type: INCREMENT
    });
}

export const DECREMENT = 'DECREMENT';
export function decrement() {
    return({
        type: DECREMENT
    });
}

export const INCREMENT_IF_ODD = 'INCREMENT_IF_ODD';
export function incrementIfOdd() {
    return({
        type: INCREMENT_IF_ODD
    });
}

export const INCREMENT_ASYNC = 'INCREMENT_ASYNC';
export function incrementAsync(sec) {
    return({
        type: INCREMENT_ASYNC, value:sec
    });
}

export const CANCEL_INCREMENT_ASYNC = 'CANCEL_INCREMENT_ASYNC';
export function cancelIncrementAsync() {
    return({
        type: CANCEL_INCREMENT_ASYNC
    });
}

export const COUNTDOWN_TERMINATED = 'COUNTDOWN_TERMINATED';
export function countdownTeminated() {
    return({
        type: COUNTDOWN_TERMINATED
    });
}
