import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense, setExpenses, startSetExpenses } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';


const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const expensesData = {};
  expenses.forEach(({id, description, amount, note, createdAt}) => {
    expensesData[id] = {description, amount, note, createdAt}
  });
  database.ref('expenses').set(expensesData).then(() => done());
})

test('should add expense to database and store', (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: 'toothpick',
    amount: 10000,
    note: 'made from real unicorn',
    createdAt: 304928483939
  };
  store.dispatch(startAddExpense(expenseData)).then( ()=> {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expenses: {
        id: expect.any(String),
        ...expenseData
      }
    });
    return database.ref(`expenses/${actions[0].expenses.id}`).once('value');
  }).then( (snapshot) => {
    expect(snapshot.val()).toEqual(expenseData);
    done();
  })

});

test('should add expense with defaults to the store and DB', (done) => {
  const store = createMockStore({});
  const expenseDefaults = {
    description: '',
    amount: 0,
    note: '',
    createdAt: 0
  };
  store.dispatch(startAddExpense({})).then( ()=> {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expenses: {
        id: expect.any(String),
        ...expenseDefaults
      }
    });
    return database.ref(`expenses/${actions[0].expenses.id}`).once('value');
  }).then( (snapshot) => {
    expect(snapshot.val()).toEqual(expenseDefaults);
    done();
  })
})

test('should set up remove expense action object', () => {
    const action = removeExpense( { id: '123abc' } );
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should call editExpense action object', () => {
    const action = editExpense(  '123abc'  , { note: 'New note' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
          note: 'New note'
        }

    });
});

test('Should set up add ADD_EXPENSE action object, with provided values', () => {

    const action = addExpense( expenses[1] );

    expect(action).toEqual({
       type: 'ADD_EXPENSE',
        expenses: expenses[1]
    });

});


test('should setup set expenses action with values', () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  });
});

test('should fetch the expense from Firebase', (done) => {
  const store = createMockStore({});
  store.dispatch(startSetExpenses()).then( () => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type:"SET_EXPENSES",
      expenses
    });
    done();
  })
})
