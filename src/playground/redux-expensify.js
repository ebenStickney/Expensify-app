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
    expenses: {
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

//EDIT_EXPENSE 
const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
    
})

//Expenses Reducer

const expenseReducerDefaultState = [];

const expenseReducer = (state = expenseReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_EXPENSE": 
        return [
            ...state,
            action.expenses
        ];
        break; 
//        
        case "REMOVE_EXPENSE": 
        return state.filter(( {id} ) => action.id !== id);
        break;
//        
        case "EDIT_EXPENSE": 
        return state.map((expense) => {
            if (expense.id === action.id) {
              return {
                  ...expenses, 
                  ...action.updates
              }  
            } else {
                return expenses;
            }
        });
        break; 
            
        default: 
        return state;
    }
};

//SET_TEXT

const setTextFilter = ( text ) => ({
    type: "SET_TEXT",
    text
});

//SORT_BY_DATE
const sortByDate = () => ({
    type: "SORT_BY_DATE"
});

//SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: "SORT_BY_AMOUNT"
});

//SET_START_DATE 
const setStartDate = ( startDate ) => ({
    type: "SET_START_DATE",
    startDate
});

//SET_END_DATE 
const setEndDate = ( endDate ) => ({
    type: "SET_END_DATE",
    endDate
});

//Filters reducer 
const filtersReducerDefaults = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaults, action) => {
    switch (action.type) {
        case "SET_TEXT":
        return {
            ...state, 
            text: action.text
        };
        break;
        case "SORT_BY_DATE":
        return {
            ...state, 
            sortBy: 'date'
        };
        break;
        case "SORT_BY_AMOUNT":
        return {
            ...state, 
            sortBy: 'amount'
        };
        break;
        case "SET_START_DATE":
        return {
            ...state,
            startDate: action.startDate
        };
        break;
         case "SET_END_DATE":
        return {
            ...state,
            endDate: action.endDate
        };
        break;
        default: 
         return state;
    }
};


//visible expenses

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate; 
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase()) ? true: false;
        
        return startDateMatch && endDateMatch && textMatch;
        });
};
                           

//store creation
const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filtersReducer
    })
                          );

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense( { description: 'Rent', amount: 40000, createdAt: 1000} ));
const expenseTwo = store.dispatch(addExpense( { description: 'Car', amount: 30000, createdAt: -1000 } ));

//store.dispatch(removeExpense( { id: expenseOne.expense.id } ));
//
//store.dispatch(editExpense( expenseTwo.expense.id, { amount: 29700}));
//
store.dispatch(setTextFilter('re'));
//store.dispatch(setTextFilter(''));
//
//store.dispatch(sortByAmount());
//
//store.dispatch(sortByDate());

//store.dispatch(setStartDate( 0 )); 
////store.dispatch(setStartDate( )); 
////
//store.dispatch(setEndDate( 125 )); 


const demoState = {
    expenses: [{
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

