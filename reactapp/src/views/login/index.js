import React from 'react'
import Styles from './main.module.css'
// var db = require('../../../database/db')
export default class Login extends React.Component{
    
    login = ()=>{
        var data =  { method: 'POST',
        body: JSON.stringify({
            username:this.refs.username.value,
            Password:this.refs.password.value
        }),
        headers: {
            // 'Accept': 'application/json',
            // 'Content-Type': 'application/json',
        }} ;

        

        fetch('http://localhost:3005/login' ,data).then((res) => 
        { res.json();
            // if(res){
            //     console.log(res.json())
            // //   var fuck = res.body.getReader().read()
            // //   console.log(fuck.stat);
            //   //fuck.resolve('Success').then(function(value){console.log(value)}, function(value){})
            // }
        }
            ).then((body) =>{ console.log(body.results)})

    }
    render(){
        
     return (
         <div>
            
            <label className = {Styles.input} for ='username'> USERNAME  </label><input ref= "username"></input>
               <label className ={Styles.input} for ='password'> PASSWORD</label><input ref = "password"></input>
             <button className = {Styles.button} onClick = {this.login}>  Login</button>

         </div>
     )
    }
}