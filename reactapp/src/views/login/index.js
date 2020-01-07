import React from 'react'
import Styles from './main.module.css'
import {Redirect } from 'react-router-dom'
var  axios  =  require('axios');
export default class Login extends React.Component{
    constructor(){
        super();
        this.state ={
            register:''
        }
    }
    login = ()=>{
        var url = "http://localhost:3005/login";
        var data =  {
            'username':this.refs.username.value,
            'Password':this.refs.password.value
        };


        axios.post(url,data).then((res)=>{
            console.log(res)
            if(res.data == 0){
                alert("incorrect username or password");
            }else{
                var user = {
                    username : res.data.user,
                    loggedIn : res.data.loggedIn,
                    userId : res.data.userId
                }
                    localStorage.setItem('user',JSON.stringify(user));
                  this.props.isLoggedIn(1);  
            }
        });

    }
    register = ()=>{
      this.setState({
          register:<Redirect to="/register"/>
      })
    }
    render(){
        
     return (
         <div>
            
               <label className = {Styles.input} for ='username'> USERNAME  </label><input ref= "username"></input>
               <label className ={Styles.input} for ='password'> PASSWORD</label><input type ="password" ref = "password"></input>
               <button className = {Styles.button} onClick = {this.login}>Login</button>

               <div>sign up here <button className = {Styles.button} onClick ={this.register}>Register</button>
               </div>
               {this.state.register}

         </div>
     )
    }
}