import { createStore } from 'redux';

// Action Generators: functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy // shorthand for: incrementBy: incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({ count }) => ({
    type: 'SET',
    count
});

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            }
        default:
            return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 7 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

// unsubscribe();

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 8 }));

// store.dispatch({
//     type: 'SET',
//     count: 101
// });

store.dispatch(setCount({ count: 500 }));


// // EXAMPLE
// const add = (data) => {
//     return data.a + data.b;
// };

// console.log(add({ a: 1, b: 12}));

// const add = ({a, b}) => {
//     return a + b;
// };

// console.log(add({ a: 1, b: 12}));