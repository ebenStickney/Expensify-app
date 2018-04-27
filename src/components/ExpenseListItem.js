import React from 'react';
import { Link } from 'react-router-dom';


const ExpenseListItem = ({dispatch, id , description, amount, createdAt} ) => (
    <div>
     <Link to={`/edit/${ id }`}> {description} </Link>
     <p>Amount: {amount} -- Created at: {createdAt}</p>
     
    </div>

);

export default ExpenseListItem;