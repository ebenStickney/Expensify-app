import {createStore, combineReducers} from 'redux';



//Expenses Reducer

const expenseReducerDefaultState = [];

const expenseReducer = (state = expenseReducerDefaultState, action) => {
    switch (action.type) {
//        case ADD_EXPENSE: 
//        return {};
//        break; 
//        
//        case REMOVE_EXPENSE: 
//        return {};
//        break;
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
        expenses: expenseReducer,
        filters: filtersReducer
    })
                          );


console.log(store.getState());

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

