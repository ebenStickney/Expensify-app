import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Header from "../components/Header"; 
import ExpenseDashboardPage from "../components/Dashboard"; 
import HelpPage from "../components/HelpPage"; 
import CreatePage from "../components/CreatePage"; 
import EditPage from "../components/EditPage";
import NotFoundPage from "../components/NotFound"; 



const AppRouter = () => (
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




export default AppRouter; 