import React from 'react';
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Header from "../components/Header";
import ExpenseDashboardPage from "../components/Dashboard";
import HelpPage from "../components/HelpPage";
import CreateExpense from "../components/CreatePage";
import EditPage from "../components/EditPage";
import NotFoundPage from "../components/NotFound";
import LoginPage from '../components/LoginPage'

export const history = createHistory();

const AppRouter = () => (
<Router history={history}>
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

</Router>

);




export default AppRouter;
