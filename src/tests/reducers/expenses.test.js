import expenseReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses'

test('should set default state of expenses', () => {
    const state = expenseReducer(undefined, { type: '@@init' });
    expect(state).toEqual([]);
})

test('should call add expense', () => {
    const expense = {
            id: '4',
            description: 'coffee',
            amount: 300,
            createdAt: 2000000,
            note: 'latte'
        };
    const action = {
        type: "ADD_EXPENSE",
        expenses: expense
    };
    
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([...expenses, expense ]);
});

test('should delete expense', () => {
    const action = {
        type: "REMOVE_EXPENSE", 
        id: expenses[1].id
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should return same state, invalid delete expense', () => {
    const action = {
        type: "REMOVE_EXPENSE", 
        id: '4'
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses);
});
//
test('should return edited expense', () => {
    const note = 'new note'
    const action = {
        type: "EDIT_EXPENSE", 
        id: expenses[0].id,
        updates: {
            note
        }
    };
    const state = expenseReducer(expenses, action);
    expect(state[0].note).toBe(note);
});

test('should not return edited expense', () => {
    const note = 'new note'
    const action = {
        type: "EDIT_EXPENSE", 
        id: '494',
        updates: {
            note
        }
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses);
});
