const expenseReducerDefaultState = [];

export default (state = expenseReducerDefaultState, action) => {
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