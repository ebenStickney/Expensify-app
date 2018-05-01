import moment from 'moment';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../../actions/filters';

test('Should generate set start date action generator', () => {
    const action = setStartDate(moment(23));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(23)
    });
});

test('Should generate set end date action generator', () => {
    const action = setEndDate(moment(20));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(20)
    });
});

test('Should generate text filter action generator with default string', () => {
   const action = setTextFilter();
   expect(action).toEqual({
       type: 'SET_TEXT_FILTER',
       text: ''
   });
});

test('Should generate text filter action generator with passed in value', () => {
    const action = setTextFilter('bill');
   expect(action).toEqual({
       type: 'SET_TEXT_FILTER',
       text: 'bill'
   });
});

test('Should generate sort by amount action generator', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
    
    // alternatively, can be written in one line:
    // expect(sortByAmount()).toEqual({type:'SORT_BY_AMOUNT'})
});

test('Should generate sort by date action generator', () => {
   const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
});