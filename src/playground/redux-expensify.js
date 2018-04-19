import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

//ADD_EXPENSE
const addExpense = (
    { 
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = {} 
  ) => ({
    type: "ADD_EXPENSE", 
    expense: {
      id: uuid(),
      description, 
      note,
      amount, 
      createdAt
    }
});

//REMOVE_EXPENSE
const removeExpense = ( { id } = {} ) => ({
    type: "REMOVE_EXPENSE",
    id
    
})

//Expenses Reducer

const expenseReducerDefaultState = [];

const expenseReducer = (state = expenseReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_EXPENSE": 
        return [
            ...state,
            action.expense
        ];
        break; 
//        
        case "REMOVE_EXPENSE": 
        return state.filter(( {id} ) => action.id !== id);
        break;
//        
//        case EDIT_EXPENSE: 
//        return {};
//        break; 
            
        default: 
        return state;
    }
};

//Filters reducer 
const filtersReducerDefaults = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaults, action) => {
    switch (action.type) {
        default: 
         return state;
    }
};

//store expenses 

const store = createStore(
    combineReducers({
        expense: expenseReducer,
        filters: filtersReducer
    })
                          );

store.subscribe(() => {
   console.log(store.getState()); 
})

const expenseOne = store.dispatch(addExpense( { description: 'Rent', amount: 40000 } ));
const expenseTwo = store.dispatch(addExpense( { description: 'Car', amount: 30000 } ));

store.dispatch(removeExpense( { id: expenseOne.expense.id } ));




const demoState = {
    expense: [{
        id: 'fdfafag',
        description: 'Jan Rent',
        note: 'This was my last rent for this place',
        amount: 65900,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
}

