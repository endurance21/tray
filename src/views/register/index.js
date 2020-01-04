import React from 'react'
// import Styles from './main.module.css'
export default class Register extends React.Component{

    render(){
     return (
         <div>
             <form> 
               <label>NAME</label> <input id = "name"></input>
               <label className=""> MOBILE NUMBER</label><input id = "mobileNumber"></input>
               <label>PASSWORD</label><input id = "password"></input>
               <label>CONFIRM PASSWORD</label><input id = "confirmPassword"></input>
            </form>
         </div>
     )
    }
}