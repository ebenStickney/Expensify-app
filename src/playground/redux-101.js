import { createStore } from 'redux';

const store = createStore((state = {count: 0},action ) => {
    switch (action.type) {
        case "INCREMENT": 
          const incrementBy = typeof action.incrementBy === 'number'? action.incrementBy : 1;
          return {
           count: state.count + incrementBy
       };
        break;
        case "DECREMENT":
          const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
          return {
           count: state.count - decrementBy
          };
        break;
        case "RESET": 
          return {
           count: 0
            };
        break;
        default: 
          return state;
    }
});

console.log(store.getState());

store.dispatch({
    type: "INCREMENT",
    incrementBy: 5
});

console.log(store.getState());

store.dispatch({
    type: "INCREMENT"
});

console.log(store.getState());

store.dispatch({
    type: "INCREMENT"
});

console.log(store.getState());

store.dispatch({
    type: "DECREMENT",
    decrementBy: 3
});

console.log(store.getState());

store.dispatch({
  type: "RESET"
});

console.log(store.getState());

store.dispatch({
    type: "INCREMENT"
});

console.log(store.getState());

