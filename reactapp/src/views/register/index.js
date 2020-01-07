import React from 'react'
import Styles from './main.module.css'
import {Redirect} from 'react-router-dom'
var axios = require('axios');
export default class Register extends React.Component{

    constructor(){
        super();
        this.state ={
            login:''
        }
    }
    register = ()=>{
        if(this.refs.confirmPassword.value == this.refs.password.value &&this.refs.username.value){
            // console.log("he;;;")
        let data = {
            'username':this.refs.username.value,
            'Password':this.refs.password.value
        }
        axios.post('http://localhost:3005/register' , data).then((res) => 
        {
            if(res){
                console.log(res.data)
                alert("user regitered go to login page");

            }
        }
            );
    }
    
    else if(!this.refs.username.value){
        alert("username is empty")
    }
    else {
        alert("password and confirmed password did not matched")
    }
    
    }

    login = ()=>{
        this.setState({
            login:<Redirect to="/"/>
        })
    }

    render(){
     return (
         <div>
             <form> 
               {/* <label>NAME</label> <input id = "name"></input> */}
               {/* <label className=""> MOBILE NUMBER</label><input id = "mobileNumber"></input> */}
               <label className = {Styles.input} for ='username'> USERNAME  </label><input ref= "username"></input>
               <label className ={Styles.input} for ='password'> PASSWORD</label><input ref = "password" type = "password"></input>
               <label className ={Styles.input} for = "confirmPassword" >CONFIRM PASSWORD</label><input type = "password" ref = "confirmPassword"></input>

            </form>
            <button className = {Styles.button} onClick = {this.register}> Register</button>
            <button className = {Styles.button} onClick = {this.login}> Login </button>
            {this.state.login}

         </div>
     )
    }
}