import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Header from "../components/Header";
import ExpenseDashboardPage from "../components/Dashboard";
import HelpPage from "../components/HelpPage";
import CreateExpense from "../components/CreatePage";
import EditPage from "../components/EditPage";
import NotFoundPage from "../components/NotFound";
import LoginPage from '../components/LoginPage'



const AppRouter = () => (
<BrowserRouter>
 <div>
   <Header />
  <Switch>
    <Route
    path="/"
    component={LoginPage}
    exact={true}
   />
   <Route
    path="/create"
    component={CreateExpense}
   />
   <Route
    path="/edit/:id"
    component={EditPage}
   />
   <Route
    path="/help"
    component={HelpPage}
   />
   <Route
    path="/dashboard"
    component={ExpenseDashboardPage}
   />
   <Route

    component={NotFoundPage}
   />
  </Switch>
 </div>

</BrowserRouter>

);




export default AppRouter;
