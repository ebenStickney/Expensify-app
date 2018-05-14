import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 with no expenses', () => {
    const res = selectExpensesTotal([]);
    expect(res).toBe(0);
});

test('should return amount value of multiple expenses', ()=> {
    const res = selectExpensesTotal(expenses);
    expect(res).toBe(148407);
});

test('should return amount value of single expense', ()=> {
    const res = selectExpensesTotal([expenses[1]]);
    expect(res).toBe(expenses[1].amount);
});