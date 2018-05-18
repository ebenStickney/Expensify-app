import { addExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';

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


// test('Should set up add ADD_EXPENSE action object, with default values', () => {
//
//     const action = addExpense();
//
//     expect(action).toEqual({
//        type: 'ADD_EXPENSE',
//         expenses: {
//             description: '',
//             note: '',
//             createdAt: 0,
//             amount: 0,
//             id: expect.any(String)
//         }
//
//     });
// });
