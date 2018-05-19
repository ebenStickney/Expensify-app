import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';


const ExpenseListItem = ({dispatch, id , description, amount, createdAt} ) => (
    <div>
     <Link to={`/edit/${ id }`}> {description} </Link>

     <p>
         Amount:
         {numeral(amount / 100).format('$0,0.00')}  
          --
         Created at:
         {moment(createdAt).format('MMMM Do YYYY')}
    </p>

    </div>

);

export default ExpenseListItem;
