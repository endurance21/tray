import React from 'react';
import logo from './logo.svg';
import './App.css';
import Register from './views/register/index'
import Login from './views/login/index'
import Session from './sessions/closure.js'
var axios  = require('axios')

console.log(Session)
class App extends React.Component{
    constructor(){
      super();
      this.state = {
        loggedIn:0,
        username:'',
        userId:''

      }
    }
  componentDidMount = ()=>{
    let url  = "http://localhost:3005/"
    axios.get(url).then((res) => {
       console.log(res)

  //    this.setState({
  //      loggedIn:res.data.loggedIn,
  //      username:res.data.username,
  //      userId:res.data.userId
  //     })



    })
  }
  render(){
    // console.log(this.state.loggedIn)
    return (
      <div className="App">
          {(this.state.loggedIn) ?  (<div>AAP LOGINED HAI + {this.state.username} </div>) : (<Login></Login>)}
      </div>
   )
    }
}

export default App;
