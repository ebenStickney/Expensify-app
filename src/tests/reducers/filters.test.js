import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should set default filter values', () => {
  const state = filtersReducer(undefined, {type: '@@init'} );
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
    
});

// sortBy amount and date.  set start date, set end date, set text filter
test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const initialState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined 
    };
    const state = filtersReducer(initialState, {type: 'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const text = 'bill';
    const action = {
        type: "SET_TEXT_FILTER", 
        text
    };
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe(action.text);
});

test('should set start date filter', () =>{
    const startDate = moment(39203904).valueOf();
    const action = {
        type: "SET_START_DATE",
        startDate
    }
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toBe(action.startDate);
});

test('should set end date filter', () =>{
    const endDate = moment(39203904).valueOf();
    const action = {
        type: "SET_END_DATE",
        endDate
    }
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toBe(action.endDate);
});