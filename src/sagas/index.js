/* eslint-disable no-constant-condition */

import {take, put, call, fork, race, cancelled} from 'redux-saga/effects'
import {eventChannel, END, delay, takeEvery} from 'redux-saga'
import {
    INCREMENT_ASYNC,
    INCREMENT,
    DECREMENT,
    DECREMENT_ASYNC,
    CANCEL_INCREMENT_ASYNC,
    COUNTDOWN_TERMINATED
} from '../actions/actions'

const action = type => ({type});

// Our worker Saga: will perform the async decrement task
export function* decrementAsync(action) {
    const sec = action.value;
    console.debug(`SAGA   :: decrementAsync :: ${sec}sec \n\n  ⬇\n\n`);
    yield delay(sec * 1000);
    yield put({type: DECREMENT});
    yield put({type: COUNTDOWN_TERMINATED});

}

/*eslint-disable no-console*/
const countdown = (secs) => {
    return eventChannel(listener => {
            const iv = setInterval(() => {
                secs -= 1;
                if (secs > 0) {
                    console.debug(' SAGA   :: countdown :: listener(secs)', secs);
                    listener(secs);
                }
                else {
                    console.debug(' SAGA   :: countdown :: listener(END)', secs);
                    listener(END);
                    clearInterval(iv);
                    console.debug(' SAGA   :: countdown :: countdown terminated');
                }
            }, 1000);
            return () => {
                clearInterval(iv);
                console.debug(' SAGA   :: countdown :: countdown cancelled');
            }
        }
    )
};

export function* incrementAsync({value}) {
    const chan = yield call(countdown, value);
    try {
        while (true) {
            let seconds = yield take(chan);
            console.debug(' SAGA   :: incrementAsync :: WHILE :: INCREMENT_ASYNC\n\n  ⬇\n\n');
            yield put({type: INCREMENT_ASYNC, value: seconds})

        }
    } finally {
        if (!(yield cancelled())) {
            console.debug(' SAGA   :: incrementAsync :: FINALLY :: INCREMENT');
            yield put(action(INCREMENT));
            console.debug(' SAGA   :: incrementAsync :: FINALLY :: COUNTDOWN_TERMINATED\n\n  ⬇\n\n');
            yield put(action(COUNTDOWN_TERMINATED));
        }
        chan.close()
    }
}

export function* watchIncrementAsync() {
    try {
        while (true) {
            console.debug(' SAGA   :: watchIncrementAsync :: WHILE');
            const action = yield take(INCREMENT_ASYNC);
            // starts a 'Race' between an async increment and a user cancel action
            // if user cancel action wins, the incrementAsync will be cancelled automatically
            yield race([
                call(incrementAsync, action),
                take(CANCEL_INCREMENT_ASYNC)
            ])
        }
    } finally {
        console.debug(' SAGA   :: watchIncrementAsync terminated');
    }
}

// export function* watchDecrementAsync() {
//     try {
//         while (true) {
//             console.debug(' SAGA   :: watchDecrementAsync :: WHILE');
//             const action = yield take(DECREMENT_ASYNC);
//             // starts a 'Race' between an async increment and a user cancel action
//             // if user cancel action wins, the incrementAsync will be cancelled automatically
//             yield race([
//                 call(decrementAsync, action)
//             ])
//         }
//     } finally {
//         console.debug(' SAGA   :: watchIncrementAsync terminated');
//     }
// }

export default function* rootSaga() {
    yield [
        fork(watchIncrementAsync)
    ];
    // yield [
    //     fork(watchDecrementAsync)
    // ];
    yield takeEvery(DECREMENT_ASYNC, decrementAsync);
}
