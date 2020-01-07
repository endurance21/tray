import React from 'react'
import Styles from './main.module.css'
import ChooseCanteen from '../canteens/chooseCanteen';
import {BrowserRouter as Router  , Route} from 'react-router-dom'
import Item from '../items/index'
var axios  = require('axios')

export default class OrderPage extends React.Component{
    constructor(){
        super();

        this.state = {
            canteenId:'',
            orderName:''
        }
    }

    setCanteen = (value)=>{
        this.setState({
            canteenId:value
        })
    //   console.log(value)
    }

    createOrder = ()=>{
        
        let user  = JSON.parse(localStorage.getItem('user'));
        let groups = JSON.parse(localStorage.getItem('groups'));
        let url  = "http://localhost:3005/api/orders/create";
        console.log(user, groups);
        
        let data = {
                order_name:this.state.orderName,
                user_id:user.userId,
                group_code:groups.groupcode,
                canteen_id:this.state.canteenId,
                item_id:0
        }
           console.log(data)
        axios.post(url, data).then((res)=>{
               console.log(res.body)
        })
    }

    setOrderName = (value)=>{
        this.setState({
            orderName:value
        })
    }

    render(){
        return (
            <div>
            <Router>
                <Route path="/orderPage" exact>
                { (this.props.groupCode)?(<div>YOUR GROUP CODE IS : {this.props.groupCode}</div>):''}
                <ChooseCanteen setCanteen = {this.setCanteen} setOrderName = {this.setOrderName}  createOrder = {this.createOrder}></ChooseCanteen>
                { (this.state.canteenId)?this.state.canteenId:''}
                { (this.state.orderName)?this.state.orderName:''}

            </Route>
            <Route path = "/orderPage/order" exact>
                <div> your ORDER NAME IS : {this.state.orderName}</div>

                <div className={Styles.itemList}>
                {<>
                  <Item itemId = "1" price = "50rs" description = "pizza" ></Item>
                  <Item itemId = "2" price = "100rs" description = "burger" ></Item>
                  <Item itemId = "3" price = "20rs" description = "asdf" ></Item>
                  <Item itemId = "4" price = "500rs" description = "akjasf" ></Item>
                  </>
                }
               </div>

            </Route>
            </Router>
            
            </div>
        )
    } 
}