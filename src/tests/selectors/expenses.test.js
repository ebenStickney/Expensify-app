import selectExpenses from '../../selectors/expenses';
import moment from 'moment';

const expenses = [
    {
        id: "1",
        description: 'water bill',
        amount: 12939,
        note: '', 
        createdAt: 0
    },
    {
        id: "2",
        description: 'power bill',
        amount: 1234,
        note: 'PGE', 
        createdAt: moment(0).subtract(1, 'day').valueOf()
    },
    {
        id: "3",
        description: 'rent',
        amount: 134234,
        note: 'May, 2018', 
        createdAt: moment(0).add(1, 'day').valueOf()
    }
]

test('Should filter by text value', ()=> {
    const filters = { 
      text: 'bill',
      sortBy: 'date',
      startDate: undefined,
      endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[1] ]);
});

test('should filter by startdate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[2], expenses[0]])
});

test('should filter by end date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[0], expenses[1]])
});

test('should filter by sort amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[2], expenses[0], expenses[1] ])
});

test('should filter by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[2], expenses[0], expenses[1] ])
});