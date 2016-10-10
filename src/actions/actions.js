
// Actions

export const RESET = 'RESET';
export function reset() {
    console.debug(`#\n\nACTION  :: RESET \n\n  ⬇\n\n`);
    return({
        type: RESET
    });
}

export const INCREMENT = 'INCREMENT';
export function increment() {
    console.debug(`#\n\nACTION  :: INCREMENT \n\n  ⬇\n\n`);
    return({
        type: INCREMENT
    });
}

export const INCREMENT_ASYNC = 'INCREMENT_ASYNC';
export function incrementAsync(sec) {
    console.debug(`#\n\nACTION  :: INCREMENT_ASYNC :: ${sec}sec \n\n  ⬇\n\n`);
    return({
        type: INCREMENT_ASYNC, value:sec
    });
}

export const CANCEL_INCREMENT_ASYNC = 'CANCEL_INCREMENT_ASYNC';
export function cancelIncrementAsync() {
    console.debug('### INTERRUPT ###');
    console.debug('ACTION  :: CANCEL_INCREMENT_ASYNC\n\n  ⬇\n\n');
    return({
        type: CANCEL_INCREMENT_ASYNC
    });
}

export const DECREMENT = 'DECREMENT';
export function decrement() {
    console.debug(`#\n\nACTION  :: DECREMENT \n\n  ⬇\n\n`);
    return({
        type: DECREMENT
    });
}


export const DECREMENT_ASYNC = 'DECREMENT_ASYNC';
export function decrementAsync(sec) {
    console.debug(`#\n\nACTION  :: DECREMENT_ASYNC :: ${sec}sec  \n\n  ⬇\n\n`);
    return({
        type: DECREMENT_ASYNC, value:sec
    });
}

export const INCREMENT_IF_ODD = 'INCREMENT_IF_ODD';
export function incrementIfOdd() {
    console.debug(`#\n\nACTION  :: INCREMENT_IF_ODD \n\n  ⬇\n\n`);
    return({
        type: INCREMENT_IF_ODD
    });
}


export const COUNTDOWN_TERMINATED = 'COUNTDOWN_TERMINATED';
export function countdownTeminated() {
    console.debug('ACTION  :: COUNTDOWN_TERMINATED');
    return({
        type: COUNTDOWN_TERMINATED
    });
}
