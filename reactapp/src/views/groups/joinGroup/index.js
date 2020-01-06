import React from 'react'
import Styles from './main.module.css'
var  axios  =  require('axios');


export default class JoinGroup extends React.Component{


    joinGroup = ()=>{
       let  url = "http://localhost:3005/api/joingroup";
       var user =  JSON.parse(localStorage.getItem('user'));
       let data = {
           group_code:this.refs.groupCode.value,
           userId:user.userId
       }
       axios.post(url,data).then((res)=>{
         console.log(res);
       });


    }

    render(){
        return(

            <div>
            <label className = {Styles.input} for ='groupCode'> ENTER GROUP CODE </label> <input ref= "groupCode"></input>
            <button className = {Styles.button} onClick = {this.joinGroup} > JOIN Group</button>
            </div>
        )
    }
}