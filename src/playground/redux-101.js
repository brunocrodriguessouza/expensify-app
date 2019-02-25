import { createStore } from 'redux';

// Action generators - functions that returns action objects

const incrementCount = ({ incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({ decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({ count } = {}) => ({
    type: 'SET',
    count 
})

const resetCount = () => ({
    type: 'RESET', 
    count: 0
})

// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

// Actions - than an object that gets sent to the store

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 101 }));

// I'd like to increment the count

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

// store.dispatch({
//     type: 'INCREMENT'
// });

// RESET - set the count equal to zero
// store.dispatch({
//     type: 'RESET'
// });

// store.dispatch({
//     type: 'DECREMENT'
// });

// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 5
// });

// store.dispatch({
//     type: 'SET',
//     count: 101
// });
