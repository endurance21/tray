import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Register from './views/register/index'
import Login from './views/login/index'
import Home from './views/home/index'
import Styles from './main.module.css'
import Register from './views/register/index'
import CreateGroup from './views/groups/createGroup/index'
import JoinGroup from './views/groups/joinGroup/index'
import orderPage from './views/orders/index'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import OrderPage from './views/orders/index';
var axios  = require('axios');



var groupCode ;
class App extends React.Component{
    constructor(){
      super();
      this.state = {
        loggedIn:0,
        username:'',
        userId:'',
        groupcode:''

      }
      this.updateOnLogin = this.updateOnLogin.bind(this);
    }
  componentDidMount = ()=>{
    let user  = JSON.parse(localStorage.getItem('user'));

    if(user){
      this.setState(
        {
          loggedIn:1,
          username:user.username,
          userId:user.userId
        

      }

      )
    }
    
  }
  logout = ()=>{
    this.setState({
      loggedIn:0,
      username:'',
      userId:''
    })
    localStorage.removeItem('user');
    localStorage.removeItem('groups');
    // localStorage.setItem('group',JSON.stringify(group));
  }
  updateOnLogin = (value)=>{
    console.log("logged in")
    // this.render();
    this.setState({
      loggedIn:1

    })
  }
  setGroupCode = (value)=>{
   groupCode = value;
    let group = {
      groupcode:value
    }
    // console.log(groupCode)

   let groups  = [];
   groups.push(group);
    localStorage.setItem('groups',JSON.stringify(...groups));


    this.setState({
      groupcode:value

    })
  }

  resetGroup = ()=>{
    this.setState({
      groupcode:''
    })
  }

  render(){
    return (

      <Router>
      <div className="App">







          <switch>

           <Route path="/register" exact>

             <Register></Register>
           </Route>
            <Route path="/" exact>
            { (this.state.loggedIn) ?( <button className={Styles.button} onClick={this.logout}> LOGOUT</button> ): ''}
            {(this.state.loggedIn) ?  (<Home username = {this.state.username }></Home>) : (<Login  isLoggedIn = {this.updateOnLogin} ></Login>)}

            </Route>
            <Route path="/createGroup" exact>
              {<CreateGroup  resetGroup = {this.resetGroup} setGroupCode = {this.setGroupCode}></CreateGroup>}
      
            </Route>
            <Route path="/joinGroup" exact>
              {<JoinGroup userId ={this.state.userId} ></JoinGroup>}

            </Route>

            <Route path="/orderPage" exact>
              {<OrderPage groupCode = {groupCode} ></OrderPage>}

            </Route>

          </switch>

      </div>
      </Router>
   )
    }
}

export default App;
