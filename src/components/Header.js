import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
  <header>
   <h1>Expensify</h1>
   <h4>Manage Your Future</h4>
    <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create A New Expense</NavLink>
    <NavLink to="/help" activeClassName="is-active">FAQ</NavLink>
    
  
  </header>
)

export default Header;
