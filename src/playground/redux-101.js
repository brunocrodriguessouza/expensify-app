import { createStore } from 'redux';

const store = createStore((state = { count: 10 }) => {
  return state;
});

console.log(store.getState());

// Actions
// I'd like to increment the count
// I'd like to reset the count to zero