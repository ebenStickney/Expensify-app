import moment from 'moment';

export default [
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