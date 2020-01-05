import React from 'react'
import Styles from './main.module.css'

export default class Register extends React.Component{
    register = ()=>{

       
       var data =  { method: 'POST',
        body: JSON.stringify({
            username:this.refs.username.value,
            Password:this.refs.password.value
        }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }} ;

        

        fetch('http://localhost:3005/register' ,data).then((res) => 
        {
            if(res){
                console.log(res.body)
            }
        }
            );

       
    }

    render(){
     return (
         <div>
             <form> 
               {/* <label>NAME</label> <input id = "name"></input> */}
               {/* <label className=""> MOBILE NUMBER</label><input id = "mobileNumber"></input> */}
               <label className = {Styles.input} for ='username'> USERNAME  </label><input ref= "username"></input>
               <label className ={Styles.input} for ='password'> PASSWORD</label><input ref = "password"></input>
               <label className ={Styles.input} for = "confirmPassword" >CONFIRM PASSWORD</label><input id = "confirmPassword"></input>

            </form>
            <button className = {Styles.button} onClick = {this.register}> Register</button>

         </div>
     )
    }
}