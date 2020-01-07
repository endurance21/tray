import React from 'react'
import Styles from './main.module.css'
import {Redirect ,Route} from 'react-router-dom' 
import OrderPage2 from '../../orders/index2'

import {BrowserRouter as Router } from 'react-router-dom'
import OrderPage from '../../orders'
var  axios  =  require('axios');


export default class JoinGroup extends React.Component{

constructor(){
    super();
    this.state ={
        orderPage:'',
        order_name:'hello'
    }
}


    joinGroup = ()=>{


       let  url = "http://localhost:3005/api/joingroup";
       var user =  JSON.parse(localStorage.getItem('user'));
       let data = {
           group_code:this.refs.groupCode.value,
           userId:user.userId
       }
       axios.post(url,data).then((res)=>{
         console.log(res);
         let data ={
             value:0
         }
         localStorage.setItem('isGroupAdmin',JSON.stringify(data));

         this.setState({
          orderPage:<Redirect to="/order/orderPage2"/>
         })
       });


    }

    render(){
        return(

            <div>
                <Router>
                <Route  path ="/joinGroup" exact>
                <label className = {Styles.input} for ='groupCode'> ENTER GROUP CODE </label> <input ref= "groupCode"></input>
                <button className = {Styles.button} onClick = {this.joinGroup} > JOIN Group</button>
                {this.state.orderPage}
                </Route>
                <Route path ="/order/orderPage2" exact>
                <OrderPage2 oder_name ={this.state.order_name} ></OrderPage2>
                </Route>
                {this.state.orderPage}
            </Router>
            </div>
        )
    }
}