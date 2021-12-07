import React, { Component} from "react";
import "../css/App.css";

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Error from "./404";
import MenuAdmin from "./Menu/MenuAdmin";
import StorageAdmin from "./Storage/StorageAdmin";
import FormRegisterAdmin from "./Form/FormRegisterAdmin";
import Login from "./Login/Login";
import PostManager from "./PostManager/PostManager";
import Cookies from 'js-cookie';
import PostAdd from "./PostManager/PostAdd";


export default class App extends Component {
    render() {
        return (
            <div>
                 <div>
          <Router>
              {/* <MenuAdmin /> */}
              <Routes/>
              
          </Router>
      </div>
            </div>
        )
    }
}


const Routes = () => {
    
  return (
      <Switch>
          <Route exact path="/login" component={ComLogin} />
          <Route exact path="/" component={ComStorageAdmin} />
          <Route exact path="/form" component={ComFormRegisterAdmin} />
          <Route exact path="/post" component={ComPostManager} />
          <Route  exact path="/add_new">
                <MenuAdmin/>
              <  PostAdd/>
          </Route>
          <Route exact path="/:ex">
              <Error />
          </Route>
      </Switch>
  )
}
const ComLogin = () => {
  if( Cookies.get("user") === 'loginFalse' || !Cookies.get("user")){
      return (<Switch><Route component={Login}><Login /></Route></Switch>)
  } else {
      return (<Switch><Redirect to="/" /></Switch>)
  }
}
const ComStorageAdmin = () => {
  if( Cookies.get("user") === 'loginFalse' || !Cookies.get("user")){
      return (<Switch><Redirect to="/login" /></Switch>)
  }else{
      return ( <Switch><Route component={StorageAdmin}>  <MenuAdmin /><StorageAdmin    /></Route></Switch>)
  }
}
const ComFormRegisterAdmin = () => {
  if( Cookies.get("user") === 'loginFalse' || !Cookies.get("user")){
      return (<Switch><Redirect to="/login" /></Switch>)
  }else{
      return (<Switch><Route component={FormRegisterAdmin}>  <MenuAdmin /><FormRegisterAdmin /></Route></Switch>)
  }
}

const ComPostManager = () => {
  if( Cookies.get("user") === 'loginFalse' || !Cookies.get("user")){
      return (<Switch><Redirect to="/login" /></Switch>)
  }else{
      return (<Switch><Route component={PostManager}>  <MenuAdmin /><PostManager /></Route></Switch>)
  }
}

