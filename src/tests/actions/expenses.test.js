import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  startAddExpense,
  addExpense,
  editExpense,
  removeExpense,
  setExpenses,
  startSetExpenses,
  startRemoveExpense,
  startEditExpense
 } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const uid = 'thisisatestuid';
const defaultAuthState = { auth: { uid }};
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const expensesData = {};
  expenses.forEach(({id, description, amount, note, createdAt}) => {
    expensesData[id] = {description, amount, note, createdAt}
  });
  database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done());
})

test('should add expense to database and store', (done) => {
  const store = createMockStore(defaultAuthState);
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
    return database.ref(`users/${uid}/expenses/${actions[0].expenses.id}`).once('value');
  }).then( (snapshot) => {
    expect(snapshot.val()).toEqual(expenseData);
    done();
  })

});

test('should add expense with defaults to the store and DB', (done) => {
  const store = createMockStore(defaultAuthState);
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
    return database.ref(`users/${uid}/expenses/${actions[0].expenses.id}`).once('value');
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

test('should remove expense from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  const id = expenses[1].id
  store.dispatch(startRemoveExpense({id})).then( () => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "REMOVE_EXPENSE",
      id
    })
    return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then( (snapshot) => {
      expect(snapshot.val()).toBe(null);
      done();
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

test('should edit expense from firebase', (done)=> {
  const store = createMockStore(defaultAuthState);
  const id = expenses[1].id;
  const updates = {
    description: 'not power bill'
  };
  store.dispatch(startEditExpense(id, updates)).then( ()=> {
    const action = store.getActions();
    expect(action[0]).toEqual({
      type: "EDIT_EXPENSE",
      id,
      updates
    });
    return database.ref(`users/${uid}/expenses/${id}`).once('value');
  }).then( (snapshot) => {
    expect(snapshot.val().description).toBe(updates.description);
    done();
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
  const store = createMockStore(defaultAuthState);
  store.dispatch(startSetExpenses()).then( () => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type:"SET_EXPENSES",
      expenses
    });
    done();
  })
});
