import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/style.scss';

const ExpenseDashboardPage = () => (
<div>
This is the dashboard.    
</div>
);

const CreatePage = () => (
<div>
This is the expense page.     
</div>
);

const EditPage = () => (
<div>
This is my edit page    
</div>
);

const HelpPage = () => (
<div>
This is where you go for help   
</div>
);

const NotFoundPage = () => (
<div>
404! -- <Link to="/">Go home</Link>  
</div>
);

const Header = () => (
  <header>
   <h1>Expensify</h1>
   <h4>Manage Your Future</h4>
    <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create A New Expense</NavLink>
    <NavLink to="/help" activeClassName="is-active">FAQ</NavLink>
    <NavLink to="/edit" activeClassName="is-active">Update Your Expenses</NavLink>
  
  </header>
)



const routes = (
<BrowserRouter>
 <div>
   <Header />
  <Switch>
    <Route 
    path="/"
    component={ExpenseDashboardPage}
    exact={true}
   />
   <Route 
    path="/create"
    component={CreatePage}
   />
   <Route 
    path="/edit"
    component={EditPage}
   />
   <Route 
    path="/help"
    component={HelpPage}
   />
   <Route
    
    component={NotFoundPage}
   />
  </Switch> 
 </div>
  
</BrowserRouter>

);



ReactDOM.render(routes, document.getElementById('app'));


      

