import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1} = {}) => ({
    type: "INCREMENT", 
    incrementBy
});

const decrementCount = ( {decrementBy = 1} = {} ) => ({
    type: "DECREMENT",
    decrementBy
});

const setCount = ( {count} = {} ) => ({  //no need for default, since it is required
    type: "SET", 
    count
});

const resetCount = () => ({
    type: "RESET",
})

const store = createStore((state = {count: 0}, action ) => {
    switch (action.type) {
        case "INCREMENT": 
          return {
           count: state.count + action.incrementBy
       };
        break;
        case "DECREMENT":
          return {
           count: state.count - action.decrementBy
          };
        break;
        case "RESET": 
          return {
           count: 0
            };
        break;
        case "SET": 
          return {
            count: action.count
          };
        break;
        default: 
          return state;
    }
});

console.log(store.getState());

store.dispatch(incrementCount({incrementBy: 5}));

console.log(store.getState());


store.dispatch(decrementCount( {decrementBy: 3 } ));

console.log(store.getState());

store.dispatch(resetCount());

console.log(store.getState());

store.dispatch(incrementCount());

console.log(store.getState());

store.dispatch(setCount( {count: 34} ));  //required, so just set the count

console.log(store.getState());

