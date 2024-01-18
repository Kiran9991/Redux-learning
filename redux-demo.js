const redux = require('redux');

const counterReducer = (state = { counter: 0 }, action) => {
    if(action.type === 'increment') return { counter: state.counter + 1 };
    if(action.type === 'decrement') return { counter: state.counter - 1 };
    if(action.type === 'incrementBy2') return { counter: state.counter + 2 };
    if(action.type === 'decrementBy2') return { counter: state.counter - 2 };
    return state;
}

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState)
}

store.subscribe(counterSubscriber);

store.dispatch({ type: 'incrementBy2' });
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'increment' });

store.dispatch({ type: 'decrementBy2' })