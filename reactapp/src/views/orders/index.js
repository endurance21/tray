import React from 'react'
import Styles from './main.module.css'
import ChooseCanteen from '../canteens/chooseCanteen';
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
            <ChooseCanteen setCanteen = {this.setCanteen} setOrderName = {this.setOrderName}  createOrder = {this.createOrder}></ChooseCanteen>
            { (this.state.canteenId)?this.state.canteenId:''}
            { (this.state.orderName)?this.state.orderName:''}
            </div>
        )
    } 
}