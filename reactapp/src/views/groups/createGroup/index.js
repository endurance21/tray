import React from 'react'
import Styles from './main.module.css'
import {Link} from 'react-router-dom'
var  axios  =  require('axios');


export default class CreateGroup extends React.Component{

      
     componentDidMount(){
         this.props.resetGroup();
     }
    createGroup = ()=>{
        var url = "http://localhost:3005/api/creategroup";
        var user =  JSON.parse(localStorage.getItem('user'));
        var data =  {
            'group_name':this.refs.groupName.value,
            'userId' : user.userId
        };


        axios.post(url,data).then((res)=>{
            // console.log(res.data);
            this.props.setGroupCode(res.data);
           
        });
    }

    render(){
        return(
            <div>
                <label className = {Styles.input} for ='groupName'> ENTER GROUP NAME </label><input ref= "groupName"></input>
               <Link to = "/orderPage"> <button className = {Styles.button} onClick = {this.createGroup} > CreateGroup</button> </Link>
            </div>
        )
    }
}